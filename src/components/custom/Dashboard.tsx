"use client";
import React from "react";

const Dashboard = () => {
    return (
        <div className="flex flex-1 p-2 md:p-10 rounded-tl-2xl bg-white dark:bg-neutral-900 flex-col gap-2 w-full h-full">
            <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse" />
                ))}
            </div>
            <div className="flex gap-2 flex-1">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse" />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
