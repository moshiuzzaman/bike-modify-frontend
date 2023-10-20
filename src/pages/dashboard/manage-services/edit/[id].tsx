import DashboardLayout from "@/components/Layout/DashboardLayout";
import { responseHandler } from "@/helpers/responseHandler";
import {
    useGetSingleServiceQuery,
    useUpdateServiceMutation,
} from "@/redux/features/service/service.api";
import { IUser } from "@/types";
import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditServicePage = () => {
    const router = useRouter();
    console.log(router.query.id);

    const { data } = useGetSingleServiceQuery(router.query.id as string);

    // const { id } = params;
    const defaultServiceData = data?.data;

  
    const { data: session, status } = useSession();
    const user: IUser | null = session?.user || null;
   

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (defaultServiceData?.title) {
            register("title", { value: defaultServiceData?.title });
            register("price", { value: defaultServiceData?.price });
            register("status", { value: defaultServiceData?.status });
            register("length", { value: defaultServiceData?.length });
            register("description", { value: defaultServiceData?.description });
        }
    }, [register, defaultServiceData]);

    const [updateService] = useUpdateServiceMutation();
    const onSubmit = async (data: any) => {
        let obj = { ...data };
        delete obj["file"];
        // remove empty values
        Object.keys(obj).forEach((key) => obj[key] === "" && delete obj[key]);

        
        console.log({ obj });
        
        const serviceData = JSON.stringify(obj);
        console.log({ serviceData });

        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("data", serviceData);

        let res;
        toast.loading("Updating service...");
        try {
            res = await updateService({
                data: formData,
                id: defaultServiceData.id,
                token: user?.token,
            }).unwrap();
            router.push("/dashboard/manage-services");
        } catch (error) {
            res = error;
        }
        responseHandler(res);
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
                Edit service
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

                    <FileInput id="file" {...register("file")} />
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
                        defaultValue={defaultServiceData?.title}
                        type="text"
                        placeholder="Title"
                        {...register("title")}
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
                        defaultValue={defaultServiceData?.price}
                        type="number"
                        placeholder="price"
                        {...register("price")}
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
                        defaultValue={defaultServiceData?.status}
                        {...register("status")}
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
                        defaultValue={defaultServiceData?.length}
                        type="number"
                        placeholder="length"
                        {...register("length")}
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
                        defaultValue={defaultServiceData?.description}
                        placeholder="description"
                        {...register("description")}
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
};
export default EditServicePage;
