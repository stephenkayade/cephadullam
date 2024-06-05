import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const toggleMenu = (e: React.MouseEvent<HTMLElement>) => {

        if (e) e.preventDefault()

        setOpenMenu(!openMenu)

    }

    return (
        <>
            <nav className="bg-brand-blue border-gray-200 dark:bg-brand-blue">
                <div className="max-w-screen-xl flex flex-wrap items-center gap-x-52 justify-end mx-auto p-2">

                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-[13px] font-dm whitespace-nowrap dark:text-white">Free Shippings and Returns on orders above $100+</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 gap-x-10 rtl:space-x-reverse">
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-dm justify-center py-2 text-[15px] text-gray-900 dark:text-white rounded-lg cursor-pointer dark:hover:text-white">
                            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                            </svg>
                            Eng
                        </button>

                        <a href="" className="flex items-center mx-auto space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-[15px] font-dm whitespace-nowrap dark:text-white">Support</span>
                        </a>

                        <a href="" className="flex items-center mx-auto space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-[15px] font-dm whitespace-nowrap dark:text-white">Log in / Sign Up</span>
                        </a>

                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                            <ul className="py-2 font-medium" role="none">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-[15px] font-dm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">
                                            <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2 font-dm" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" /><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" /></g></svg>
                                            Eng
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">
                                            <svg className="h-3.5 w-3.5 rounded-full me-2 font-dm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z" /><path d="M0 0h512v170.7H0z" /><path fill="#d00" d="M0 170.7h512v170.6H0z" /></svg>
                                            Deutsch
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">
                                            <svg className="h-3.5 w-3.5 rounded-full me-2 font-dm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z" /><path fill="#009246" d="M0 0h170.7v512H0z" /><path fill="#ce2b37" d="M341.3 0H512v512H341.3z" /></g></svg>
                                            Italiano
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">
                                            中文 (繁體)
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-[15px] text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>



                </div>
            </nav>

            <nav className="bg-white w-full border-b-[0.5px] border-brand-blue/30">

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">

                    <ul className="flex items-center">

                        <li className='mr-12'>

                            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                {/* <img src="../../../images/nxturban-black-logo.png" className="h-14" alt="Nxturban Logo" /> */}
                                <h1 className="text-brand-blue text-xl font-bold capitalize">cephadullam</h1>
                            </a>

                        </li>

                        <div className="flex items-center gap-x-10">

                            <li>

                                <a href="" className="flex items-center mx-auto space-x-3 rtl:space-x-reverse">
                                    <span className="self-center text-[15px] font-dm whitespace-nowrap dark:text-black">Products</span>
                                </a>

                            </li>

                            <li className='relative'>

                                <button onClick={(e) => toggleMenu(e)} className="flex items-center mx-auto space-x-3 rtl:space-x-reverse">

                                    <span className="self-center text-[15px] font-dm whitespace-nowrap dark:text-black">Services</span>

                                </button>

                                {
                                    openMenu &&
                                    <div className='absolute top-[40px] px-2 py-4 left-[-30px] rounded-xl min-w-[320px] min-h-[150px] bg-brand-blue/5 border-[0.5px] border-brand-blue/30'>

                                        <ul className="grid gap-y-4 gap-x-2 grid-cols-2">

                                            <li className='hover:bg-brand-blue/10 transition-all ease-in-out duration-700 rounded-lg py-2 px-3'>
                                                <Link to=''>Training</Link>
                                            </li>
                                            <li className='hover:bg-brand-blue/10 transition-all ease-in-out duration-700 rounded-lg py-2 px-3'>
                                                <Link to=''>Remote classes</Link>
                                            </li>
                                            <li className='hover:bg-brand-blue/10 transition-all ease-in-out duration-700 rounded-lg py-2 px-3'>
                                                <Link to=''>Music theory</Link>
                                            </li>
                                            <li className='hover:bg-brand-blue/10 transition-all ease-in-out duration-700 rounded-lg py-2 px-3'>
                                                <Link to=''>Teen classes</Link>
                                            </li>
                                            <li className='hover:bg-brand-blue/10 transition-all ease-in-out duration-700 rounded-lg py-2 px-3'>
                                                <Link to=''>Child classes</Link>
                                            </li>
                                            <li className='hover:bg-brand-blue/10 transition-all ease-in-out duration-700 rounded-lg py-2 px-3'>
                                                <Link to=''>Adult classes</Link>
                                            </li>
                                        </ul>

                                    </div>
                                }


                            </li>

                        </div>


                    </ul>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[15px] px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
                        <div className="flex items-center gap-x-4">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>


                            <Link to="" className='relative' style={{ top: '2px' }}>

                                <span className='absolute flex items-center justify-center rounded-full z-[2] bg-red-500 w-2.5 h-2.5 right-0'>
                                    {/* <i className='font-dm text-7xl text-red-500 font-normal relative'>.</i> */}
                                </span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>

                            </Link>


                            <Link to="/" className='relative' style={{ top: '2px' }}>
                                <span className='absolute flex items-center justify-center rounded-full z-[2] bg-red-500 w-2.5 h-2.5 right-0'>
                                    {/* <i className='font-dm text-7xl text-red-500 font-normal relative'>.</i> */}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>

                            </Link>


                        </div>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-[15px] text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative hidden md:block w-96 mx-8">
                        <div className="absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none bg-brand-blue px-3 rounded-r-md" >
                            <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pe-10 text-[13px] text-gray-900 border border-brand-blue font-dm rounded-md bg-gray-50 focus:ring-brand-blue outline-none focus:border-brand-blue dark:bg-white dark:border-brand-blue dark:placeholder-gray-400 dark:text-black dark:focus:ring-brand-blue dark:focus:border-brand-blue" placeholder="Search for products, brands and categories" />
                    </div>


                    <ul className="flex items-center">

                        <div className="flex items-center gap-x-8">

                            <li>

                                <a href="" className="flex items-center mx-auto space-x-3 rtl:space-x-reverse">
                                    <span className="self-center text-[15px] whitespace-nowrap font-dm text-black">About Us</span>
                                </a>

                            </li>

                            <li>

                                <a href="" className="flex items-center mx-auto space-x-3 rtl:space-x-reverse">
                                    <span className="self-center text-[15px] whitespace-nowrap font-dm text-black">Blog</span>
                                </a>

                            </li>

                            <li>

                                <a href="" className="flex items-center mx-auto space-x-3 rtl:space-x-reverse">
                                    <span className="self-center text-[15px] whitespace-nowrap font-dm text-black">Contact Us</span>
                                </a>

                            </li>

                        </div>


                    </ul>
                </div>
            </nav >


        </>
    )
}

export default Navbar