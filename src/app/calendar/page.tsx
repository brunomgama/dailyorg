"use client";
import React from "react";
import SidebarLayout from "@/components/custom/SidebarLayout";
import Calendar from '@/components/custom/CalendarComponent'

const PageCalendarHome = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-screen">
            <SidebarLayout />
            <div className="flex flex-1 flex-col ml-2 mr-2">
                <Calendar />
            </div>
        </div>
    );
};

export default PageCalendarHome;
