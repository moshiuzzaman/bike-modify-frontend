import DashboardLayout from "@/components/Layout/DashboardLayout";
import { IUser } from "@/types";
import { Button } from "flowbite-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
    const { data: session, status } = useSession();
    let user: IUser | null = session?.user || null;

    return (
        <div>
            <DashboardLayout>
                <Link href="/dashboard/profile/edit-profile">
                    <Button className="mb-4">Edit</Button>
                </Link>
                <div className="bg-white flex flex-col items-center py-24 gap-8">
                    <Image
                        src={user?.image ?? ""}
                        alt="User Image"
                        width={130}
                        height={100}
                        className="rounded-full bg-gray-200 w-24 h-24"
                    />
                    <h1>Name:{user?.name}</h1>
                    <p>Email:{user?.email}</p>
                    <p>Role:{user?.role}</p>
                    <p>Address:{user?.address}</p>
                </div>
            </DashboardLayout>
        </div>
    );
};

export default Dashboard;
