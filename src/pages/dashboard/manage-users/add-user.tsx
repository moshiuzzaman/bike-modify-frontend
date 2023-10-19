import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);

    return (
        <DashboardLayout>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 grid grid-cols-2">
                <div id="fileUpload ">
                    <Label
                        className="mb-2 block"
                        htmlFor="file"
                        value="Upload file"
                    />

                    <FileInput
                        helperText="A profile picture is useful to confirm your are logged into your account"
                        id="file"
                        {...register("file", { required: true })}
                    />
                </div>
                <div >
                    <Label
                        className="mb-2 block"
                        htmlFor="name"
                        value="Name"
                    />
                    <TextInput
                        type="text"
                        placeholder="name"
                        {...register("name", { required: true })}
                    />
                </div>
                <div >
                    <Label
                        className="mb-2 block"
                        htmlFor="email"
                        value="Email"
                    />
                    <TextInput
                        type="email"
                        placeholder="example@mail.com"
                        {...register("email", { required: true })} />
                </div>
                <div >
                    <Label
                        className="mb-2 block"
                        htmlFor="password"
                        value="Password"
                    />
                    <TextInput
                        type="password"
                        placeholder="password"
                        {...register("password", { required: true })}
                    />
                </div>
                <div >
                    <Label 
                        className="mb-2 block"
                        htmlFor="role"
                        value="Role"
                    />
                    <select
                        {...register("role", { required: true })}
                        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-500 focus:ring-opacity-50"
                    >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div >
                    {/* for address */}
                    <Label
                        className="mb-2 block"
                        htmlFor="address"
                        value="Address"
                    />
                    <TextInput
                        type="text"
                        placeholder="address"
                        {...register("address", { required: true })}
                    />
                </div>


                    <Button type="submit">Submit</Button>
              
            </form>
        </DashboardLayout>
    );
}
