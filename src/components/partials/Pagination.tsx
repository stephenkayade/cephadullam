import React, { useEffect, useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { IPaginationNav } from "../../utils/types";

const PaginationNav = (props: IPaginationNav) => {

    const {
        count, onNext, onPrev, pagination, resourceName, total
    } = props;

    useEffect(() => {

    }, [])

    return (
        <>
            <div className='flex items-center mt-4'>

                <p className='mrgb0'>
                    <span className='font-aeonik fs-14 text-[#461f3a]'>Displaying {count} {resourceName}</span>
                </p>


                <div className={`ml-auto`}>
                    <Link onClick={(e) => onPrev(e)} to="" className={`link-round bg-brand-lightpink ${pagination && pagination.prev ? '' : 'disabled-lt'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C93A9E" className="size-4 text-[#C93A9E]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
                    <span className='px-1'></span>
                    <Link onClick={(e) => onNext(e)} to="" className={`link-round bg-brand-lightpink ${pagination && pagination.next ? '' : 'disabled-lt'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C93A9E" className="size-4 text-[#C93A9E]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </Link>
                </div>

            </div>
        </>
    )
};

export default PaginationNav;
