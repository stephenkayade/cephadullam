import React from 'react'
import ReactDOM from 'react-dom'

import { IModalProps } from '../../utils/types'


const Modal = ({ isShow, closeModal, children, }: Partial<IModalProps>) => {

    return ReactDOM.createPortal(

        <div className={`h-screen  inset-0 bg-[rgba(31,2,22,0.49)] flex justify-center items-center w-full z-50 transition ease-in-out delay-300 duration-300  ${isShow === true ? 'fixed' : 'hidden'}`}>
            <div className={`absolute w-full flex justify-center z-9999 transition ease-in-out delay-150 duration-300 `}>
                {children}
            </div>
        </div>,
        document.querySelector('.modal-container')!

    )
}

export default Modal