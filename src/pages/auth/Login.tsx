import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import body from '../../helpers/body'
import { IToastProps } from '../../utils/types'
import Toast from '../../components/partials/Toast'

import storage from '../../helpers/storage'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate()

    const [pass, setPass] = useState<boolean>(true)
    const [showForgot, setShowForgot] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const [toast, setToast] = useState({
        type: '',
        show: false,
        message: '',
        title: '',
        position: 'top-left'
    })

    const togglePass = () => {
        setPass(!pass)
    }

    const toggleToast = (e: any) => {
        if (e) e.preventDefault();
        setToast({ ...toast, show: !toast.show });
    }


    const login = async (e: React.MouseEvent<HTMLElement>) => {

        if (e) e.preventDefault()

        if (!loginData.password && !loginData.email) {

            setToast({ ...toast, type: 'error', title: 'Error!', show: true, message: 'All fields are required' })
            setTimeout(() => {
                setToast({ ...toast, show: false })
            }, 3000)

        }

        else if (!loginData.password) {

            setToast({ ...toast, type: 'error', title: 'Required!', show: true, message: 'email/password is required' })
            setTimeout(() => {
                setToast({ ...toast, show: false })
            }, 3000)

        }

        else if (!loginData.email) {

            setToast({ ...toast, type: 'error', title: 'Required!', show: true, message: 'email/password is required' })
            setTimeout(() => {
                setToast({ ...toast, show: false })
            }, 3000)

        }

        else {

            const payload = { ...loginData }

            setLoading(true)

            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`, { ...payload }, storage.getConfigWithBearer())

                .then((resp) => {

                    console.log(resp.data)

                    const { role, _id } = resp.data.data

                    if (resp.data.data.role === 'admin' || resp.data.data.role === 'super' || resp.data.data.role === 'publisher') {

                        storage.saveCredentials(resp.data.token, role, _id)

                        setTimeout(() => {
                            navigate('/dashboard/users')
                        }, 2000)

                    }

                })
                .catch((err) => {

                    if (err && err.response && err.response.data) {

                        setToast({ ...toast, type: 'error', title: 'Error!', show: true, message: err.response.data.message })
                        setTimeout(() => {
                            setToast({ ...toast, show: false })
                        }, 3000)

                    } else {
                        setToast({ ...toast, type: 'error', title: 'Required!', show: true, message: err?.message })

                    }
                    console.log(err)
                })
                .finally(() => {
                    setLoading(false)
                })

        }

    }

    return (

        <>

            <Toast
                type={toast.type}
                show={toast.show}
                message={toast.message}
                position={toast.position}
                title={toast.title}
                close={toggleToast}
            />

            <section>

                <div className="flex relative h-svh">


                    <div className="w-6/12 ml-auto h-full overflow-y-hidden">
                        <img src="../../../images/assets/bg@login.jpg" className='h-auto w-full' alt="" />
                    </div>


                    <div className='w-6/12 px-28 pt-20'>

                        {/* <div className='flex justify-between items-center pb-12'>
                            <img src='../../../assets/images/logo.png' className='text-lg leading-[4rem] w-20 h-20 font-satoshibold capitalize text-oxford-900' />
                            <p className="font-satoshimedium text-cebiz-gray-200 text-base">Login Page</p>
                        </div> */}

                        <div className='flex flex-col items-center items-center pb-12'>
                            <img src='../../../images/logo.png' className='text-lg leading-[4rem] w-auto h-20 font-satoshibold capitalize text-oxford-900' />
                            <p className="font-satoshimedium text-cebiz-gray-200 text-xl mt-9">Welcome back</p>
                            <p className="font-satoshimedium text-cebiz-gray-200/80 text-sm mt-3">Login into your Cebiz Organization Dashboard</p>
                        </div>

                        <form className='pt-7 w-full bg-white rounded-[28px]' onSubmit={(e) => e.preventDefault()}>


                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-4 text-base font-satoshimedium text-cebiz-gray-200">Email Address</label>
                                <input type="email" onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} id="email" className="shadow-sm p-4 bg-white border text-cebiz-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>

                            <div className="mb-5 relative">
                                {
                                    pass &&
                                    <svg onClick={() => togglePass()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-[63%] right-5 cursor-pointer font-bold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                }

                                {
                                    !pass &&

                                    <svg onClick={() => togglePass()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-[63%] right-5 cursor-pointer font-bold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                }

                                <label htmlFor="password" className="block mb-4 text-base font-satoshimedium text-cebiz-gray-200">Password</label>

                                <input type={pass ? 'password' : 'text'} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} id="password" className="shadow-sm p-4 bg-white border text-cebiz-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>

                            <div className="flex justify-between mb-12">

                                <div className="flex items-center">
                                    <input id='remember' type="checkbox" className='h-4 w-4 border' />
                                    <label htmlFor="remember" className='text-sm text-cebiz-gray-100 pl-2 cursor-pointer'>Remember me</label>
                                </div>

                                <Link to='' onClick={(e) => { }} className='text-sm text-cebiz-gray-100'>Forgot Password?</Link>

                            </div>

                            <Link to='' onClick={(e) => login(e)} className={`w-full h-[55px] items-center justify-center text-white inline-flex bg-brand-blue hover:bg-brand-blue font-satoshimedium rounded-xl text-base text-center dark:bg-brand-pink dark:hover:bg-brand-blue/90 ${loading ? 'disabled-lt' : ''}`}>
                                {loading ? <span className='ts-loader sm white'></span> : <span className='font-bold text-sm'>Login</span>}
                            </Link>

                        </form>

                    </div>

                </div>

            </section >

        </>
    )
}

export default Login