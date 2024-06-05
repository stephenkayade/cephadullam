import React, { useEffect, useState } from 'react'
import { ISkeletonProps } from '../../utils/types'

const Skeleton = ({ height, width, bgColor, animate, radius, className, minHeight, minWidth, marginTop, marginBottom }: ISkeletonProps) => {

    // https://jamesinkala.com/blog/make-animated-content-placeholders-with-html-and-css/
    
    useEffect(() => {

    }, [])

    return (
        <>

            <div className={`placeholder ${className ? className : ''}`} 
            style={{ 
                height: height,
                width: width,
                minHeight: minHeight,
                minWidth: minWidth,
                backgroundColor: bgColor,
                borderRadius: `${radius}`,
                marginTop: marginTop ? marginTop : '',
                marginBottom: marginBottom ? marginBottom : ''
            }}
            >
                <div className={`activity ${animate ? 'flicker': ''}`}></div>
            </div>

        </>
    )
}

export default Skeleton