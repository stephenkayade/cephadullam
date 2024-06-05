import React, {useState, useEffect} from 'react'
import { IToastProps } from '../../utils/types'
import { Link } from 'react-router-dom'

const Toast = ({ show, close, title, message, type, position }: Partial<IToastProps>) => {

    useEffect(() => {

    }, [])

    const closeX = (e: React.MouseEvent<HTMLElement>) => {
        if(e) e.preventDefault();
        close(e);
    }

    const setBg = (type: any) => {

        let result = '#3eb249' 
        if(type === 'success'){
            result = '#3eb249'
        }

        if(type === 'error'){
            result = '#e74c3c'
        }

        if(type === 'info'){
            result = '#00BDE7'
        }

        if(type === 'warning'){
            result = '#FFB31F'
        }

        return result;

    }

    return (
        <>
        
            <div className={`toast-inner ${ show && show === true ? '' : 'hidden' } ${ position ? position : 'top-right'}`}
            style={{ backgroundColor: `${setBg(type)}` }}>

                <div className="flex items-center mb-1">
                    <h3 className="font-bold text-sm mb-0 text-white leading"> { title ? title : 'No Title'} </h3>
                    <button className="ml-auto text-xl text-white" onClick={(e) =>closeX(e)}><span className="fe fe-x fs-15 text-white"></span> &times;</button>
                </div>

                <p className="font-medium text-sm text-white mb-0">
                    {message ? message : 'No message'}
                </p>

           </div>

        </>
    )
  
}

export default Toast