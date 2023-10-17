import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

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
                <div className="grid grid-flow-row grid-cols-3 justify-center  w-4/3 gap-16 ">
                    {services.listOfServices.map((data) => (
                        <ScrollAnimationWrapper
                            key={data.title}
                            className="flex w-full justify-end"
                        >
                            <motion.div
                                className="h-full p-4"
                                variants={scrollAnimation}
                            >
                                <div>
                                    <div className="flex flex-col justify-center text-center items-center">
                                        <Image
                                            src={data.icon}
                                            width={85}
                                            height={80}
                                            alt="Picture of the author"
                                        />

                                        <h1 className=" text-2xl  mb-2 font-bold">
                                            {data.title}
                                        </h1>
                                        <h4>{data.description}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
