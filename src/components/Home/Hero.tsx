import React, { useMemo } from "react";

import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Button } from "flowbite-react";

const Hero = ({
    title = "NSDhaka 2023",
    subTitle = "Beyond code: connection, share, and grow together. ",
    eventdDate = "16th September -2023",
}) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="w-full bg-cover" id="hero_section">
            <div
                className="max-w-screen  flex-1 justify-center items-center "
                id="home"
            >
                <ScrollAnimationWrapper className="h-full">
                    <motion.div
                        className="  gap-8 py-6 sm:py-16 w-full  min-h-screen flex flex-col justify-center items-center"
                        variants={scrollAnimation}
                    >
                        <h1 className=" font-medium text-white leading-normal">
                            Custom Bike Builder
                        </h1>
                        <h3
                            className="text-white text-6xl max-w-xl  font-extrabold 
							text-center
						"
                        >
                            Make Your Bike Truly Yours
                        </h3>

                        <Button   className="bg-transparent border-white" >
                            <p>CHECK OUR WORKS</p>
                        </Button>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Hero;
