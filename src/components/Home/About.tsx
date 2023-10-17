import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { HiPlay } from "react-icons/hi";

import { Button } from "flowbite-react";

const joinData = [
    { title: "Attendees", value: 200 },
    { title: "Speakers", value: 10 },
    { title: "Session", value: 5 },
    // { title: "Workshops", value: "8HR" },`
];

const About = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="bg-black">
            <div id="about" className=" bg-black-800">
                <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto">
                    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-24 ">
                        <ScrollAnimationWrapper className="flex w-full justify-end">
                            <motion.div
                                className="h-full w-full p-4"
                                variants={scrollAnimation}
                            >
                                <h1
                                    className="
                              text-2xl font-bold text-lime-500
                            "
                                >
                                    Overview
                                </h1>
                                <h1
                                    className="
                              text-6xl font-bold my-4 text-white"
                                >
                                    Discover Our Story
                                </h1>
                                <p className="text-white">
                                    Welcome to GearUp, where two-wheeled dreams
                                    come to life. We are passionate about
                                    crafting unique and personalized bike
                                    modifications that make a statement.
                                    Discover the art of riding with us
                                </p>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper>
                            <motion.div
                                className="flex flex-col text-white-500 items-end justify-center ml-auto w-full"
                                variants={scrollAnimation}
                            >
                                <div
                                    className="
                                    relative
                                "
                                >
                                    <Image
                                        src="https://websitedemos.net/bike-modification-04/wp-content/uploads/sites/736/2020/11/custom-bike-builder-story-video-thumb.jpg"
                                        width={1000}
                                        height={1000}
                                        alt="Picture of the about"
                                    />
                                  
                                        <HiPlay className="h-20 w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                            hover:text-lime-500 transition duration-300 ease-in-out cursor-pointer
                                        " />
                                    
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
