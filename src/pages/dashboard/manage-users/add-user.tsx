import RegistrationOrEditProfile from "@/components/Form/RegistrationOrEditProfile";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddUser() {
   

    return (
        <DashboardLayout>
            <RegistrationOrEditProfile user={undefined} />
        </DashboardLayout>
    );
}
