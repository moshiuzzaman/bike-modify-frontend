import { handleFetchResponse } from "@/helpers/error";
import {
    useSignUpMutation,
    useUpdateUserMutation,
} from "@/redux/features/user/user.api";
import { IUser } from "@/types";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { register } from "react-scroll/modules/mixins/scroller";
import { toast } from "react-toastify";

const RegistrationOrEditProfile = () => {
    const router = useRouter();
    const { data: session, update } = useSession();
    console.log({ session });

    let user: IUser | null = session?.user || null;

    if (user?.email) {
        router  .push("/dashboard");
    }
    console.log(!user);

    const [signupUser] = useSignUpMutation();
    const [updateUser] = useUpdateUserMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (values: any) => {
        console.log("values", values);

        const obj = { ...values };
        delete obj["file"];
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
                    token: user.token,
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
                console.log("res", res);
                
            }
            handleFetchResponse(res, "Failed to create user");
            if (!("error" in res) && res) {
                if (user) {
                    router.push("/dashboard/profile");
                } else {
                    router.push("/login");
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
                {router.pathname === "/dashboard/profile/edit-profile"
                    ? "Edit Profile"
                    : "Registration"}
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
