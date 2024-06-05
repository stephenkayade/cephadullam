import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../../../components/partials/Modal';
import Axios from 'axios';
import moment from 'moment'
import { RiDeleteBinFill } from "react-icons/ri";
import { BsFillTrashFill } from "react-icons/bs";
import { IoMdDoneAll } from "react-icons/io";

// import Message from '../../../components/partials/Message';
import storage from '../../../helpers/storage';
import Toast from '../../../components/partials/Toast';
import { IModalProps } from '../../../utils/types';

const Details = ({ isShow, closeModal, modalTitle }: IModalProps) => {

    const inputRef = useRef<any>()
    const modalRef = useRef<any>()

    const [step, setStep] = useState(0);
    const [showStatus, setShowStatus] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const [placeholder, setPlaceholder] = useState('')

    const [toast, setToast] = useState({
        type: '',
        show: false,
        message: '',
        title: '',
        position: 'top-right'
    })

    useEffect(() => {

        setStep(0)

        const handler = (event: MouseEvent) => {

            if (!modalRef.current) {
                return
            }

            if (!modalRef.current.contains(event.target)) {
                setShowStatus(false)
            }
        }

        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }


    }, [])

    const toggleToast = (e: React.MouseEvent<HTMLElement>) => {
        if (e) e.preventDefault();
        setToast({ ...toast, show: false });
    }

    const closeX = (e: React.MouseEvent<HTMLElement>) => {
        if (e) e.preventDefault();
        closeModal();
        setStep(0)
    }

    const status = ['Active', 'Inactive']

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

            <Modal isShow={isShow}>


                <div className="flex bg-white min-w-[550px] px-9 py-5">

                    <div className="dm--dbx ui-full-bg-norm" style={{ backgroundImage: 'url("../../../images/assets/bg@auth01.jpg")' }}>
                        <div className="dm--d">
                            <div>
                                {/* <img src="../../../images/assets/i" alt="icon" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="dm--body form">

                        <div className={`flex items-center ${step === 1 ? 'mb-4' : 'mb-4'}`}>
                            <h2 className={`brand-green-bright mb-0 font-dm fw-semibold text-capitalize fs-20 fs-sm-13 d-block`}>
                                {step === 0 ? 'Center Details' : step === 1 ? 'EDIT CENTER' : step === 2 ? 'Delete Center' : ''}
                            </h2>
                            <div className="ml-auto">
                                <Link to="" onClick={(e) => closeX(e)} className="link-round sm ui-icon-animate bg-mgreen">
                                    <span className="fe fe-x fs-20 fs-sm-12 onmgreen"></span>
                                </Link>
                            </div>
                        </div>

                        <div className="dm--ct mt-4 sm-mrgt1">

                            <div className='mb-3 flex justify-between items-center'>
                                <p className="mb-0 onlblack fs-14">Center Name: </p>
                                <p className="mb-0 onmlgreen fs-14 fw-medium ml-auto text-end">Center name</p>
                            </div>
                            <div className='mb-3 flex justify-between items-center'>
                                <p className="mb-0 onlblack fs-14">Date Created: </p>
                                <p className="mb-0 onblack fs-14 fw-medium ml-auto text-end">18th April, 2024 </p>
                            </div>
                            <div className='mb-3 flex justify-between items-center'>
                                <p className="mb-0 onlblack fs-14">State: </p>
                                <p className="mb-0 onblack fs-14 fw-medium ml-auto text-end">State</p>
                            </div>
                            <div className='mb-3 flex justify-between items-center'>
                                <p className="mb-0 onlblack fs-14">Center Address: </p>
                                <p className="mb-0 onblack fs-14 fw-medium ml-auto text-end">Center address </p>
                            </div>

                            <div className='mb-3'>
                                <p className="mb-0 flex justify-between items-center">
                                    <span className='fs-14 onlblack'>Notes/Desc: </span>
                                    <span className="px-1"></span>
                                    <span className='fs-14 onblack fs-14 fw-medium ml-auto text-end'>Note </span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </Modal>

        </>
    )

}

export default Details