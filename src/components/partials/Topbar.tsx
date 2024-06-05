import React, { useContext, useEffect, useState } from "react";

import body from "../../helpers/body";
import moment from "moment";
import { ITopbarProps, IUserContext } from "../../utils/types";
import UserContext from "../../context/user/userContext";

const TopBar = ({ header, text, show }: ITopbarProps) => {

  const userContext = useContext<IUserContext>(UserContext)

  useEffect(() => {
    userContext.getLoggedInUser()
  }, []);

  return (
    <div className="pl-[295px] fixed right-0 left-0 top-0 h-[65px] border-b border-[#ebf6ff] bg-[#e8f5ff] flex items-center z-10">

      <div className="flex justify-between items-center w-full">

        <div className="flex items-center justify-center">
          <p className="text-brand-blue text-md font-semibold">{header}</p>
          <p className="text-brand-blue text-md pl-12">
            <span className="text-sm">Last login </span>
            <span className="text-sm font-light mx-2">| </span>
            {/* <span>{moment(new Date(Date.now), "DD-MM-YYYY").format('L')}</span> */}
            <span className="text-sm">{moment(userContext?.loggedInUser ?? new Date(Date.now())).format('Do MMM, YYYY hh:MM a')}</span>
          </p>
        </div>

        <div className="flex items-center ml-auto pr-10">

          <p className="text-brand-lightblue text-sm pr-4">{userContext.loggedInUser ? `${userContext.loggedInUser.firstName} ${userContext.loggedInUser.lastName}` : 'Admin'}</p>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00427b" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </div>


      </div>

    </div>
  );
};

export default TopBar;
