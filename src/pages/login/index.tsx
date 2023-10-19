import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/SeoHead";
import { CustomError, handleFetchError } from "@/helpers/error";
import { useLoginUserMutation } from "@/redux/features/user/user.api";
import { login } from "@/redux/features/user/user.slice";
import { RootState } from "@/redux/store";
import { Button, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
    const router = useRouter();

    const { data: session, status } = useSession();
    if (session?.user?.email) {
        // router  .push("/dashboard");
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data: any) => {
        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });
        if (res?.error) {
            toast.error("Failed to login");
        } else {
            toast.success("Login successful");
            router.push("/dashboard");
        }
    };

    return (
        <>
            <SeoHead title="Car modify" />
            <Layout>
                <div className="h-screen flex items-center justify-center">
                    <div className="w-[500px] bg-white gap-8 p-24 rounded flex flex-col items-center justify-center">
                        <h1 className="text-6xl">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextInput
                                className="my-4 w-[400px]"
                                type="email"
                                placeholder="email"
                                {...register("email", { required: true })}
                            />
                            <TextInput
                                className="my-4 w-full"
                                type="password"
                                placeholder="password"
                                {...register("password", { required: true })}
                            />

                            <Button className="w-full" type="submit">
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
}
