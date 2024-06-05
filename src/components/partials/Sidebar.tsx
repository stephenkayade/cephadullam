import React, { useEffect, useState, useCallback, useContext } from 'react'
import { CiGrid42 } from 'react-icons/ci'
import { AiOutlineUsergroupAdd, AiOutlineBarChart } from 'react-icons/ai'
import { BsChatLeftDots } from 'react-icons/bs'
import { HiUsers, HiOutlineUsers, HiUserGroup } from 'react-icons/hi'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { BiSolidReport } from 'react-icons/bi'
import { TbCalendarEvent } from 'react-icons/tb'
import { FaHome, FaSpeakerDeck, FaCalendar, FaBed, FaLayerGroup, FaStream, FaChartArea } from 'react-icons/fa'
import { IoHome, IoLogOut } from 'react-icons/io5'
import { ImUsers } from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import storage from '../../helpers/storage'
import body from '../../helpers/body'

const Sidebar = () => {

    useEffect(() => {
        body.changeBackground('bg-bck')

        if (storage.getStatus() === active) {
            setActive(storage.getStatus())
        }

        setActive(storage.fetchLegacy('sb-menu') ? storage.fetchLegacy('sb-menu') : 'dashboard');

    }, [])

    const [active, setActive] = useState<any>('')

    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLElement>, t: string, url: string, select: boolean) => {

        if (e) { e.preventDefault() }
        storage.keepLegacy('sb-menu', t)
        setActive(t)
        storage.saveStatus(t)
        navigate(`/${url}`)


    }

    const logout = (e: React.MouseEvent<HTMLElement>) => {
        if (e) e.preventDefault()
        storage.clearAuth()
        navigate('/admin/login')
    }

    const superRoutes = [
        // { title: 'dashboard', url: 'dashboard', icon: <IoHome />, show: false },
        { title: 'users', url: 'dashboard/users', icon: <HiUsers />, show: false },
        { title: 'courses', url: 'dashboard/courses', icon: <HiUsers />, show: false },
        // { title: 'events', url: 'dashboard/events', icon: <FaCalendar />, show: false },
        // { title: 'participants', url: 'dashboard/participants', icon: <HiUserGroup />, show: true },
        // { title: 'accomodation', url: 'dashboard/accomodations', icon: <FaBed />, show: true },
        // { title: 'resource group', url: 'dashboard/resource-groups', icon: <FaLayerGroup />, show: true },
        // { title: 'sessions', url: 'dashboard/sessions', icon: <FaStream />, show: false },
        // { title: 'reports', url: 'dashboard/reports', icon: <FaChartArea />, show: false },
        // { title: 'communications', url: 'dashboard/communications', icon: <BsChatLeftDots />, show: false },
    ]

    const renderedSuperLinks = superRoutes.map((route, i) => {
        return (
            <Link key={i} onClick={(e) => handleClick(e, route.title, route.url, route.show)} to={``} className={`flex items-center mb-4 px-5 py-2 rounded-lg ${active === route.title ? 'text-[#320688]' : ''}`}>
                <span className={`${active === route.title ? 'text-brand-brightblue font-bold' : 'text-brand-blue'}  text-xl stroke-3`}>{route.icon}</span>
                <span className={`${active === route.title ? 'text-brand-brightblue font-semibold' : 'text-brand-blue'} font-medium pl-7 text-sm capitalize`}>{route.title}</span>
            </Link>
        )
    })

    return (
        <>
            <div className="fixed h-screen w-[260px] bg-[#e9f5ff] z-30">

                <div className='pl-10 flex items-center justify-start h-[65px] bg-[#d3ebff] z-20'>
                    <img src="../../../images/logo.png" width={80} alt="" />

                </div>

                <div className="pt-16 h-full px-4">

                    <div className='pb-64'>
                        {renderedSuperLinks}
                    </div>


                    <Link onClick={(e) => logout(e)} to={``} className={`flex items-center mb-5 my-12 px-5 py-2 rounded-lg `}>
                        <span className="text-[#3c4372] font-semibold text-2xl stroke-2"><IoLogOut /></span>
                        <span className="text-[#3c4372] font-medium pl-7 text-sm capitalize">Logout</span>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default Sidebar;
