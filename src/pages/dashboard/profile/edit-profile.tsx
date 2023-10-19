import RegistrationOrEditProfile from "@/components/Form/RegistrationOrEditProfile";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Button } from "flowbite-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EditProfile = () => {
    const { data: session, status } = useSession();
    const user = session?.user;

    console.log("User:", user);

    return (
        <div>
            <DashboardLayout>
                <RegistrationOrEditProfile />
            </DashboardLayout>
        </div>
    );
};

export default EditProfile;
