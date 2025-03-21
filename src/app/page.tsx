"use client";
import React from "react";
import SidebarLayout from "@/components/custom/SidebarLayout";
import Dashboard from "@/components/custom/Dashboard";

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-screen">
            <SidebarLayout />
            <div className="flex flex-1 flex-col ml-2 mr-2">
                <Dashboard />
            </div>
        </div>
    );
};

export default Home;
