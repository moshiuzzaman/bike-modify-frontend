import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/SeoHead";
import { CustomError, handleFetchError, handleFetchResponse } from "@/helpers/error";
import { useSignUpMutation } from "@/redux/features/user/user.api";

import { RootState } from "@/redux/store";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useSession, signIn, signOut } from "next-auth/react";
import RegistrationOrEditProfile from "@/components/Form/RegistrationOrEditProfile";

export default function Signup() {
    const router = useRouter();

    const { data: session, status } = useSession();
    if (session?.user?.email) {
        // router  .push("/dashboard");
    }

    
    return (
        <>
            <SeoHead title="Car modify" />
            <Layout>
                <div className=" flex items-center justify-center">
                   <RegistrationOrEditProfile  />
                </div>
            </Layout>
        </>
    );
}
