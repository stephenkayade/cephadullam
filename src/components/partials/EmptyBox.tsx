import React from 'react'
import { IEmptyBoxProps } from '../../utils/types'

const EmptyBox = ({ children, bgColor, size, className }: IEmptyBoxProps) => {
    
    return (
        <>

            <div className={`empty-box py-5 ${size ? size : 'sm'} ${className ? className : ''}`} style={{ backgroundColor: `${bgColor ? bgColor : '#FFE0E9'}` }}>

                <div className="ui-text-center w-100">
                    <div className="row">
                        <div className="col-md-10 mx-auto ui-text-center">
                            {children}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default EmptyBox