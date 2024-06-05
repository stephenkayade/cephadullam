import React, { useState, useEffect } from "react";

import Sidebar from "../partials/Sidebar";
import Topbar from "../partials/Topbar";
import { IDashboardLayoutProps } from "../../utils/types";

const DashboardLayout = ({ Component, header, text }: IDashboardLayoutProps) => {

    useEffect(() => {
    }, []);

    return (
        <>
            <div className="flex h-auto">
                <Sidebar />

                <main className={`pl-[260px] w-screen h-screen dashboard`}>
                    <div className={`w-full h-auto comp`}>
                        <Topbar header={header} text={text} />
                        <div className="pt-20 h-full bg-white px-10">
                            <Component />

                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;
