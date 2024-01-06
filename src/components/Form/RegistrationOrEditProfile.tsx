import { handleFetchResponse } from "@/helpers/error";
import useAuth from "@/hooks/useAuth";
import {
    useSignUpMutation,
    useUpdateUserMutation,
} from "@/redux/features/user/user.api";
import { IUser } from "@/types";
import { Button, FileInput, Label, Select, TextInput } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { register } from "react-scroll/modules/mixins/scroller";
import { toast } from "react-toastify";

const RegistrationOrEditProfile = ({ user }: { user?: any }) => {
    const router = useRouter();
    const { update } = useSession();
    const { role } = useAuth();

    if (user?.email && router.pathname === "/signup") {
        router.push("/dashboard");
    }
    

    const [signupUser] = useSignUpMutation();
    const [updateUser] = useUpdateUserMutation();

    const { token } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (values: any) => {
        

        const obj = { ...values };
        delete obj["file"];
        // remove empty values4
        Object.keys(obj).forEach((key) => obj[key] === "" && delete obj[key]);
        const data = JSON.stringify(obj);
        

        const formData = new FormData();
        formData.append("file", values.file[0]);
        formData.append("data", data);
        try {
            let res: any;
            if (user) {
                //
                toast.loading("Updating user...");

                res = await updateUser({
                    data: formData,
                    id: user.id,
                    token,
                }).unwrap();

                update({
                    name: res.data.name,
                    email: res.data.email,
                    address: res.data.address,
                    image: res.data.image,
                });
            } else {
                toast.loading("Creating user...");

                res = await signupUser(formData).unwrap();
                
            }
            handleFetchResponse(res, "Failed to create user");
            if (!("error" in res) && res) {
                if (router.pathname === "/signup") {
                    router.push("/login");
                } else if (
                    router.pathname === "/dashboard/manage-users/add-user" ||
                    router.pathname === "/dashboard/manage-users/edit-user/[id]"
                ) {
                    router.push("/dashboard/manage-users");
                } else if (
                    router.pathname === "/dashboard/profile/edit-profile"
                ) {
                    router.push("/dashboard/profile");
                }
            }
            toast.dismiss();
        } catch (err: any) {
            toast.dismiss();
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        if (user?.email) {
            register("name", { value: user?.name });
            register("email", { value: user?.email });
            register("address", { value: user?.address });
        }
    }, [user, register]);

    return (
        <div className="bg-white mt-36 mb-24 gap-8 p-24 rounded flex flex-col items-center justify-center">
            <h1 className="text-6xl">
                {router.pathname === "/dashboard/profile/edit-profile" &&
                    "Edit Profile"}
                {router.pathname === "/signup" && "Sign up"}
                {router.pathname === "/dashboard/manage-users/add-user" &&
                    "Add User"}
                {router.pathname === "/dashboard/manage-users/edit-user/[id]" &&
                    "Edit User"}
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-4 grid grid-cols-2"
            >
                <div id="fileUpload ">
                    <Label
                        className="mb-2 block"
                        htmlFor="file"
                        value="Upload file"
                    />

                    <FileInput
                        id="file"
                        {...register("file", { required: !user })}
                    />
                </div>
                <div>
                    <Label className="mb-2 block" htmlFor="name" value="Name" />
                    <TextInput
                        defaultValue={user?.name ?? ""}
                        type="text"
                        placeholder="name"
                        {...register("name", { required: !user })}
                    />
                </div>
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="email"
                        value="Email"
                    />
                    <TextInput
                        defaultValue={user?.email ?? ""}
                        type="email"
                        placeholder="example@mail.com"
                        {...register("email", { required: !user })}
                    />
                </div>
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="password"
                        value="Password"
                    />
                    <TextInput
                        type="password"
                        placeholder="password"
                        {...register("password", {
                            required: !user,
                        })}
                    />
                </div>

                <div>
                    {/* for address */}
                    <Label
                        className="mb-2 block"
                        htmlFor="address"
                        value="Address"
                    />
                    <TextInput
                        defaultValue={user?.address ?? ""}
                        type="text"
                        placeholder="address"
                        {...register("address", { required: !user })}
                    />
                </div>

                <div>
                    {/* for address */}
                    <Label
                        className="mb-2 block"
                        htmlFor=""
                        value="Submit for signup"
                    />

                    <Button className="w-full  flex" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationOrEditProfile;
