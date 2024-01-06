import RegistrationOrEditProfile from "@/components/Form/RegistrationOrEditProfile";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { useGetSingleUserQuery } from "@/redux/features/user/user.api";
import { useRouter } from "next/router";
import React from "react";

const EditUser = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data } = useGetSingleUserQuery(id as string);
   

    return (
        <DashboardLayout>
            <RegistrationOrEditProfile user={data?.data} />
        </DashboardLayout>
    );
};

export default EditUser;
