import React, { useReducer } from "react"

import UserContext from "./userContext"
import UserReducer from './userReducer'
import axios from "axios"
import storage from "../../helpers/storage"
import { GET_ME, GET_USERS, SET_COUNT, SET_LOADING, SET_PAGINATION, SET_TOTAL } from "../types"
import { IListQuery } from "../../utils/types"
import { useNavigate } from "react-router-dom";
import Loader from "../../components/partials/Loader"
// import Cookies from "universal-cookie"

const UserState = (props: any) => {

    // const cookie = new Cookies();
    const navigate = useNavigate()
    const exp = new Date(
        Date.now() + 70 * 24 * 60 * 60 * 1000
    )

    const initialState = {
        users: [],
        pagination: {},
        loggedInUser: {},
        count: 0,
        total: 0,
        loading: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)


    const logout = async () => {

        storage.clearAuth();
        localStorage.clear();
        navigate('/admin/login');

    }

    // const getUsers = async (data: IListQuery) => {
    const getUsers = async () => {

        // const { limit, page, order } = data
        // const q = `limit=${limit ? limit.toString() : 10}&page=${page ? page.toString() : 1}`;


        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/users`, storage.getConfigWithBearer())

            .then((resp) => {

                dispatch({
                    type: GET_USERS,
                    payload: resp.data.data
                })

                // dispatch({
                //     type: SET_PAGINATION,
                //     payload: resp.data.pagination
                // })

                // dispatch({
                //     type: SET_TOTAL,
                //     payload: resp.data.total
                // });

                // dispatch({
                //     type: SET_COUNT,
                //     payload: resp.data.count
                // });

            })

            .catch((err) => {

                console.log(err)

                if (err && err.response && err.response.data && err.response.data.status === 401) {
                    logout()
                }

                else if (err && err.response && err.response.data) {
                    console.log(`Error! could not get users`)
                }

                else if (err && err.toString() === 'Error: Network Error') {
                    Loader.popNetwork()
                }

                else if (err) {
                    console.log(`Error could not get users`)
                }
            })

    }

    const getLoggedInUser = async() => {

        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/getMe`, storage.getConfigWithBearer())

            .then((resp) => {

                dispatch({
                    type: GET_ME,
                    payload: resp.data.data
                })

            })

            .catch((err) => {

                console.log(err)

                if (err && err.response && err.response.data && err.response.data.status === 401) {
                    logout()
                }

                else if (err && err.response && err.response.data) {
                    console.log(`Error! could not get users`)
                }

                else if (err && err.toString() === 'Error: Network Error') {
                    Loader.popNetwork()
                }

                else if (err) {
                    console.log(`Error could not get users`)
                }
            })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })

    }

    return <UserContext.Provider value={{
        users: state.users,
        loggedInUser: state.loggedInUser,
        pagination: state.pagination,
        loading: state.loading,
        count: state.count,
        total: state.total,
        getUsers,
        getLoggedInUser,
        setLoading
    }}>
        {props.children}
    </UserContext.Provider>


}

export default UserState