import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useGetServicesQuery } from "@/redux/features/service/service.api";
import { Button } from "flowbite-react";
import SingleService from "../Singleservice";
import Link from "next/link";


const services = {
    title: "Our services",
    description: "Magic is believing in yourself.",
    listOfServices: [
        {
            icon: "https://grandconference.b-cdn.net/v5/design/wp-content/uploads/sites/7/2022/02/management-consulting-business-advice.png",
            title: "Auto Maintenance ",
            description:
                "his is a short description elaborating the service you have mentioned above.",
        },
        {
            icon: "https://grandconference.b-cdn.net/v5/design/wp-content/uploads/sites/7/2022/02/management-consulting-business-advice.png",
            title: "Auto Maintenance ",
            description:
                "his is a short description elaborating the service you have mentioned above.",
        },
        {
            icon: "https://grandconference.b-cdn.net/v5/design/wp-content/uploads/sites/7/2022/02/management-consulting-business-advice.png",
            title: "Auto Maintenance ",
            description:
                "his is a short description elaborating the service you have mentioned above.",
        },
        {
            icon: "https://grandconference.b-cdn.net/v5/design/wp-content/uploads/sites/7/2022/02/management-consulting-business-advice.png",
            title: "Auto Maintenance ",
            description:
                "his is a short description elaborating the service you have mentioned above.",
        },
        {
            icon: "https://grandconference.b-cdn.net/v5/design/wp-content/uploads/sites/7/2022/02/management-consulting-business-advice.png",
            title: "Auto Maintenance ",
            description:
                "his is a short description elaborating the service you have mentioned above.",
        },
        {
            icon: "https://grandconference.b-cdn.net/v5/design/wp-content/uploads/sites/7/2022/02/management-consulting-business-advice.png",
            title: "Auto Maintenance ",
            description:
                "his is a short description elaborating the service you have mentioned above.",
        },
    ],
};

const Service = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const { data } = useGetServicesQuery("limit=6");

    return (
        <div className="bg-white-500">
            <div
                className="max-w-screen-xl pt-8  sm:py-14  px-6 sm:px-8 lg:px-16 mx-auto "
                id="services"
            >
                <div className="text-center py-12">
                    <h4 className="text-xl">{services.description}</h4>
                    <h1 className="text-6xl font-bold">{services.title}</h1>
                </div>
                <div className="grid grid-cols-3 flex justify-between items-center gap-4 my-4">
                    {data?.data?.map((data: any, index: any) => (
                        <SingleService key={index} {...data} />
                    ))}
                </div>

                <Link href="/services">
                    <Button className="mx-auto">View all</Button>
                </Link>
            </div>
        </div>
    );
};

export default Service;
