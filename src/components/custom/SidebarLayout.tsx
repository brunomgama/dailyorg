"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { LayoutDashboard, UserCog, Settings, LogOut, Menu } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SidebarLayout = () => {
    const [open, setOpen] = useState(false); // Initially collapsed

    const links = [
        { label: "Dashboard", href: "#", icon: <LayoutDashboard className="h-5 w-5" /> },
        { label: "Profile", href: "#", icon: <UserCog className="h-5 w-5" /> },
        { label: "Settings", href: "#", icon: <Settings className="h-5 w-5" /> },
        { label: "Logout", href: "#", icon: <LogOut className="h-5 w-5" /> },
    ];

    return (
        <div className={cn("relative h-screen flex")}>
            {/* Toggle Button */}
            {/*<button*/}
            {/*    className="absolute top-4 left-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-md"*/}
            {/*    onClick={() => setOpen(!open)}*/}
            {/*>*/}
            {/*    <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />*/}
            {/*</button>*/}

            {/* Sidebar */}
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Bruno Gama",
                                href: "#",
                                icon: (
                                    <Image
                                        src="https://assets.aceternity.com/manu.png"
                                        className="h-7 w-7 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
        </div>
    );
};

export default SidebarLayout;
