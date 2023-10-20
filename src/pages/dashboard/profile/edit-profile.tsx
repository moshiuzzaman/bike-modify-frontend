import RegistrationOrEditProfile from "@/components/Form/RegistrationOrEditProfile";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import useAuth from "@/hooks/useAuth";
import { Button } from "flowbite-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EditProfile = () => {
    const { user } = useAuth();

    return (
        <div>
            <DashboardLayout>
                <RegistrationOrEditProfile user={user} />
            </DashboardLayout>
        </div>
    );
};

export default EditProfile;
