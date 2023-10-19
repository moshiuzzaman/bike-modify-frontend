import React, { Children, ReactNode, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import sidebarItems from "@/constants/sidebarItems";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { IUser } from "@/types";

type LayoutProps = {
    children: ReactNode;
};

const DashboardLayout = ({ children }: LayoutProps) => {
    const { data: session } = useSession();
    const user: IUser | null = session?.user || null;
    const role = user?.role;

    const sidebar = sidebarItems(role as string);
    return (
        <>
            <aside
                id="sidebar-multi-level-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-hidden bg-gray-50 dark:bg-gray-800 ">
                    <Sidebar aria-label="Sidebar with multi-level dropdown example">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                {sidebar.map((item, index) => (
                                    <Link key={index} href={item.href}>
                                        <p>{item.label}</p>
                                    </Link>
                                ))}
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4 min-h-screen border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
