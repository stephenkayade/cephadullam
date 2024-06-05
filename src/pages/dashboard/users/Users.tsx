import React, { useState, useContext, useEffect, useRef } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { TbEyeFilled } from 'react-icons/tb'

import { Link, useNavigate } from 'react-router-dom'

import body from '../../../helpers/body'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdEye } from "react-icons/io";
import { TbReport } from "react-icons/tb";
import Details from './Details'
import UserContext from '../../../context/user/userContext'
import { IUserContext } from '../../../utils/types'
import papa from 'papaparse'
import Skeleton from '../../../components/partials/Skeleton'
import EmptyBox from '../../../components/partials/EmptyBox'
import moment from 'moment'
import PaginationNav from '../../../components/partials/Pagination'
import storage from '../../../helpers/storage'

// import Pagination from '../../components/layouts/partials/Pagination'

const Users = ({ bg }: any) => {

  const usersContext = useContext<IUserContext>(UserContext)

  const navigate = useNavigate()

  const [showAddenter, setShowAddCenter] = useState(false)
  const [showViewUser, setShowViewUser] = useState(false)

  const [data, setData] = useState({})

  const logout = async () => {

    storage.clearAuth();
    localStorage.clear();
    // cookie.remove('token');
    // cookie.remove('userType');

    navigate('/admin/login');
    // wait for logout API
    // await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/logout`, {}, storage.getConfig());
  }


  useEffect(() => {

    if (!storage.checkToken()) {
      logout()
    }
    // usersContext.getUsers({ limit: 10, page: 1 })
    usersContext.getUsers()
  }, [storage.checkToken()])

  const formatRole = (val: string) => {

    let flag = {
      title: '',
      val: '',
    }

    if (val === 'user') {
      flag = { title: 'user', val: 'blue' }
    }

    else if (val === 'publisher') {
      flag = { title: 'Publisher', val: 'purple' }
    }

    else if (val === 'admin') {
      flag = { title: 'Admin', val: 'yellow' }
    }

    else {

      flag = { title: 'Super', val: 'green' }

    }

    return flag

  }

  const back = (e: React.MouseEvent<HTMLElement>) => {
    if (e) e.preventDefault()
    navigate(-1)
  }

  const toggleAddCenter = (e: React.MouseEvent<HTMLElement>) => {
    if (e) e.preventDefault()

    setShowAddCenter(!showAddenter)
  }

  const toggleViewUser = (e: React.MouseEvent<HTMLElement>, data: any) => {
    if (e) e.preventDefault()

    if (data) {
      setData(data)
    }

    setShowViewUser(!showViewUser)
  }


  const config = [
    { label: '#' },
    { label: 'Full Name ' },
    { label: 'Email' },
    { label: 'Date  ' },
    { label: 'Phone' },
    { label: 'Role ' },
    // { label: 'Actions' },
  ]


  //   const overview = [

  //     {
  //       icon: '../../../images/assets/icon@centers.svg',
  //       text: 'All Centers',
  //       count: usersContext.centers.length,
  //     },
  //     {
  //       icon: '../../../images/assets/icon@states.svg',
  //       text: 'New Centers',
  //       count: '20',
  //     },
  //     {
  //       icon: '../../../images/assets/icon@managers.svg',
  //       text: 'Active Centers',
  //       count: '150',
  //     },
  //     {
  //       icon: '../../../images/assets/icon@managers.svg',
  //       text: 'Inactive Centers',
  //       count: '50',
  //     },
  //   ]

  const renderedHeaders = config.map((column) => {
    return <th key={column.label} className='text-left p-2 font-500 px-4 text-sm text-brand-deepblue'>{column.label}</th>
  })

  const exportData = (e: any) => {

    if (e) { e.preventDefault(); }

    if (usersContext.users.length >= 0) {

      const pdts = usersContext.users.map((i) => {

        delete i._id;
        delete i._version;
        delete i.__v;
        delete i.id;

        i.createdAt = moment(i.createdAt).format('ddd Do MMM, YYYY mm:ss A');

        if (i.bodytype && i.bodytype.type) {
          i.bodytype = i.bodytype.type;
        } else {
          delete i.message;
        }

        return i;
      })

      const data = papa.unparse(pdts);
      const csv = new Blob([data], { type: 'text/csv;charset=utf-8;' });

      let csvUrl = '';

      csvUrl = window.URL.createObjectURL(csv);

      let link = document.createElement("a");
      link.href = csvUrl;
      link.setAttribute("download", "users.csv");
      link.click();
    }
  }


  // const pagiNext = async (e: React.MouseEvent<HTMLElement>) => {
  //   if (e) { e.preventDefault() }
  //   usersContext.getUsers({ limit: usersContext.pagination.next.limit, page: usersContext.pagination.next.page })
  // }

  // const pagiPrev = async (e: React.MouseEvent<HTMLElement>) => {
  //   if (e) { e.preventDefault() }
  //   usersContext.getUsers({ limit: usersContext.pagination.prev.limit, page: usersContext.pagination.prev.page })
  // }

  return (
    <>
      <div className={` pb-12 pt-8`}>
        <div className="flex justify-between items-center mb-3 pb-8">
          <div className='leading'>
            <h3 className='text-md sm-text-sm text-brand-blue capitalize font-medium'>All Users</h3>
            <p className='text-base text-brand-lightblue sm-fs-13 font-regular'>Manage all users</p>
          </div>
          <Link onClick={(e) => back(e)} to='' className={`py-2 button mini border border-brand-deeppink cursor-pointer text-center rounded-md`}>
            <span className="text-sm sm-text-sm text-brand-pink">Go Back</span>
          </Link>

        </div>

        <div className="ui-dashboard-card">

          <div className="ui-dashboard-card-body">

            <div className="d-flex justify-content-between mrgb2">

              <form className='card-search mb-10 flex justify-between items-center' onSubmit={(e) => { e.preventDefault(); }}>
                <div className='card-input rm border border-brand-pink rounded-md flex items-center w-[374px]'>
                  <input onChange={(e) => { }} className={`font-aeonik text-brand-deepblue placeholder:text-brand-deepblue rounded-md text-sm px-5 border-0 w-[86%] min-h-[48px] focus:outline-none`} type={'text'} placeholder="Search by name or email" />
                  <Link onClick={(e) => { }} to="" className='p-0 w-[10px] min-w-[52px] min-h-[48px] bg-brand-lightpink mx-auto flex justify-center items-center rounded-r-md'>
                    {/* <span className='fe fe-search fs-15 ui-relative ongreen' style={{ top: '0px' }}></span> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#461f3a" className="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                  </Link>
                </div>
                <div className="flex items-center">

                  <Link onClick={(e) => { }} to='' className={`py-2 button mini bg-brand-blue cursor-pointer text-center rounded-md`}>
                    <span className="text-sm sm-text-sm text-white">New</span>
                  </Link>
                  <span className="mx-1"></span>
                  <Link onClick={(e) => exportData(e)} to='' className={`py-2 button mini bg-brand-brightblue cursor-pointer text-center rounded-md`}>
                    <span className="text-sm sm-text-sm text-white">Export</span>
                  </Link>
                </div>

              </form>

            </div>


            <div className="">


              {
                usersContext.loading &&
                <div className='w-full' style={{ overflowX: 'scroll' }}>
                  <table className='table-auto border-spacing-2  px-4 bg-transparent w-full'>
                    <thead>
                      <tr className=' border-b-1 border-[#ffe9f8]'>
                        {renderedHeaders}
                      </tr>
                    </thead>

                    <tbody className='bg-transparent'>
                      {
                        Array(10).fill(0).map((_, i) => (
                          <tr className=' px-4 border-b border-pink'>
                            {
                              Array(config.length).fill(0).map((_, i) => (
                                <td>
                                  <Skeleton
                                    height='20px'
                                    width="170px"
                                    radius={'0px'}
                                    bgColor='#e8f5ff'
                                    animate={true}
                                    className='mx-2 my-2 py-3'
                                  />
                                </td>
                              ))
                            }
                          </tr>
                        ))}
                    </tbody>

                  </table>
                </div>
              }

              {
                !usersContext.loading &&

                <>
                  {
                    usersContext.users.length <= 0 &&
                    <>
                      <div className="mt-2">

                        <EmptyBox bgColor='#e8f5ff' size='sm'>

                          <div className="icon-box" style={{ backgroundColor: '#e8f5ff', margin: '0 auto' }}>
                            <span style={{ position: 'relative', left: '0', top: '1px' }} className={`nxt-product nxt-icon `}>
                              <img src="../../../images/assets/icon@centers.svg" alt="" />
                            </span>

                          </div>
                          <p className='font-dm mrgb1 mrgt1 fs-16 ui-line-height text-brand-lightblue pdx5'>Users data will appear here</p>


                        </EmptyBox>
                      </div>
                    </>
                  }

                  {
                    usersContext.users.length >= 1 &&
                    <div className='w-full' style={{ overflowX: 'scroll' }}>
                      <table className='table-auto border-spacing-2 w-full mb-5'>
                        <thead>
                          <tr className=' border-b border-pink'>
                            {renderedHeaders}
                          </tr>
                        </thead>

                        <tbody className='bg-transparent'>

                          {
                            usersContext.users.map((user, index) => (
                              <tr key={user._id} className='border-b border-brand-pink'>
                                <td className='pl-2 py-4 px-4 w-fit text-brand-deepblue font-normal text-sm'>{index + 1}</td>
                                <td className='pl-2 py-4 px-4 w-fit text-sm text-brand-deepblue font-normal'>{`${user.firstName} ${user.lastName}`}</td>
                                <td className='pl-2 py-4 px-4 w-fit text-brand-deepblue font-normal text-sm'>{user.email}</td>
                                <td className='pl-2 py-4 px-4 w-fit text-sm text-brand-deepblue font-normal'>{moment(user.createdAt).format('Do MMM, YYYY')}</td>
                                <td className='pl-2 py-4 px-4 w-fit text-brand-deepblue font-normal text-sm'>{user.phone}</td>
                                <td className='pl-2 py-4 px-4 w-fit text-sm text-brand-deepblue font-normal capitalize'>
                                  <span className={`${formatRole(user.role).val} custom-badge lg`}>{formatRole(user.role).title}</span>

                                </td>
                                {/* <td align='center' className='pl-2 py-4 px-4 w-fit text-md'>
                                <Link onClick={(e) => toggleViewUser(e, user)} to='' className="border-0 onlgreen"><IoMdEye className='font-semibold fs-18' /></Link>

                              </td> */}
                              </tr>
                            ))}

                        </tbody>

                      </table>
                    </div>
                  }
                </>

              }

            </div>

            {/* 
            <PaginationNav
              resourceName={`${usersContext.count > 1 ? 'users' : 'user'}`}
              pagination={usersContext.pagination}
              count={usersContext.count}
              total={usersContext.total}
              onNext={(e) => pagiNext(e)}
              onPrev={(e) => pagiPrev(e)}
            /> */}

          </div>

        </div>

      </div>


      <Details
        isShow={showViewUser}
        closeModal={toggleViewUser}
        modalTitle="Center Details"
      // data={data}
      // slim="slim"
      />

    </>
  )
}

export default Users