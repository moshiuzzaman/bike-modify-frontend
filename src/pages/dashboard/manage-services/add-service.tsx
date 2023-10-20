import DashboardLayout from "@/components/Layout/DashboardLayout";
import { responseHandler } from "@/helpers/responseHandler";
import { useCreateServicesMutation } from "@/redux/features/service/service.api";
import { IUser } from "@/types";
import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function AddUser() {
    const { data: session, } = useSession();
    const user: IUser | null = session?.user || null;
    console.log(user?.token);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [createService] = useCreateServicesMutation();
    const onSubmit = async (data: any) => {
        const obj = { ...data };
        delete obj["file"];
        const serviceData = JSON.stringify(obj);
        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("data", serviceData);

        let res;
        toast.loading("Creating service...");
        try {
            res = await createService({
                data: formData,
                token: user?.token,
            }).unwrap();
        } catch (error) {
            res = error;
        }
        responseHandler(res);
        
    };

    return (
        <DashboardLayout>
             <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
                Add service
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-4 grid grid-cols-2"
            >
                <div id="fileUpload ">
                    <Label
                        className="mb-2 block"
                        htmlFor="file"
                        value="Upload Image"
                    />

                    <FileInput
                        id="file"
                        {...register("file", { required: true })}
                    />
                    {errors.file && (
                        <Label
                            className="text-red-500"
                            value="Image is required"
                        />
                    )}
                </div>
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="Title"
                        value="title"
                    />
                    <TextInput
                        type="text"
                        placeholder="Title"
                        {...register("title", { required: true })}
                    />
                    {errors.title && (
                        <Label
                            className="text-red-500"
                            value="Title is required"
                        />
                    )}
                </div>
                <div>
                    {/* price */}
                    <Label
                        className="mb-2 block"
                        htmlFor="price"
                        value="Price"
                    />
                    <TextInput
                        type="number"
                        placeholder="price"
                        {...register("price", { required: true })}
                    />
                    {errors.price && (
                        <Label
                            className="text-red-500"
                            value="Price is required"
                        />
                    )}
                </div>
                {/* Status */}
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="status"
                        value="Status"
                    />
                    <select
                        {...register("status", { required: true })}
                        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-500 focus:ring-opacity-50"
                    >
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>
                    {errors.status && (
                        <Label
                            className="text-red-500"
                            value="Status is required"
                        />
                    )}
                </div>
                {/* Length */}
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="length"
                        value="How many days will it take?"
                    />
                    <TextInput
                        type="number"
                        placeholder="length"
                        {...register("length", { required: true })}
                    />
                    {errors.length && (
                        <Label
                            className="text-red-500"
                            value="Length is required"
                        />
                    )}
                </div>
                {/* Description */}
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="description"
                        value="Description"
                    />
                    <Textarea
                        placeholder="description"
                        {...register("description", { required: true })}
                    />
                    {errors.description && (
                        <Label
                            className="text-red-500"
                            value="Description is required"
                        />
                    )}
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </DashboardLayout>
    );
}
