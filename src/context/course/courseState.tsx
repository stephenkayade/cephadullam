import React, { useReducer } from "react"

import CourseContext from "./courseContext"
import CourseReducer from './courseReducer'
import axios from "axios"
import storage from "../../helpers/storage"
import { GET_COURSES, SET_COUNT, SET_LOADING, SET_PAGINATION, SET_TOTAL } from "../types"
import { IListQuery } from "../../utils/types"
import { useNavigate } from "react-router-dom";
import Loader from "../../components/partials/Loader"
// import Cookies from "universal-cookie"

const CourseState = (props: any) => {

    // const cookie = new Cookies();
    const navigate = useNavigate()
    const exp = new Date(
        Date.now() + 70 * 24 * 60 * 60 * 1000
    )

    const initialState = {
        courses: [],
        pagination: {},
        count: 0,
        total: 0,
        loading: false
    }

    const [state, dispatch] = useReducer(CourseReducer, initialState)


    const logout = async () => {

        storage.clearAuth();
        localStorage.clear();
        navigate('/admin/login');

    }

    // const getUsers = async (data: IListQuery) => {
    const getCourses = async () => {

        // const { limit, page, order } = data
        // const q = `limit=${limit ? limit.toString() : 10}&page=${page ? page.toString() : 1}`;


        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/courses`, storage.getConfigWithBearer())

            .then((resp) => {

                dispatch({
                    type: GET_COURSES,
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
                    console.log(`Error! could not get courses`)
                }

                else if (err && err.toString() === 'Error: Network Error') {
                    Loader.popNetwork()
                }

                else if (err) {
                    console.log(`Error could not get courses`)
                }
            })

    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })

    }

    return <CourseContext.Provider value={{
        courses: state.courses,
        pagination: state.pagination,
        loading: state.loading,
        count: state.count,
        total: state.total,
        getCourses,
        setLoading
    }}>
        {props.children}
    </CourseContext.Provider>


}

export default CourseState