import React from "react";
import { GET_USERS, SET_PAGINATION, SET_LOADING, SET_TOTAL, SET_COUNT, GET_ME } from "../types";

const reducer = (state: any, action: any) => {

    switch (action.type) {

        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case GET_ME:
            return {
                ...state,
                loggedInUser: action.payload,
                loading: false
            }

        case SET_PAGINATION:
            return {
                ...state,
                pagination: action.payload,
                loading: false
            }

        case SET_TOTAL:
            return {
                ...state,
                total: action.payload,
                loading: false
            }

        case SET_COUNT:
            return {
                ...state,
                count: action.payload,
                loading: false
            }

        case SET_PAGINATION:
            return {
                ...state,
                pagination: state.pagination,
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state


    }

}

export default reducer