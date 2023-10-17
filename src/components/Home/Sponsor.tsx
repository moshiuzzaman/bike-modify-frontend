import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const sponsors = [
  {
    icon: "http://34.72.136.54:9900/wp-content/uploads/2022/02/sponsor1-1.png",
  },
  {
    icon: "http://34.72.136.54:9900/wp-content/uploads/2022/02/sponsor3-1.png",
  },
  {
    icon: "http://34.72.136.54:9900/wp-content/uploads/2022/02/sponsor2-1.png",
  },
  {
    icon: "http://34.72.136.54:9900/wp-content/uploads/2022/02/sponsor4-1.png",
  },
  {
    icon: "http://34.72.136.54:9900/wp-content/uploads/2022/02/sponsor5-1.png",
  },
];

const Sponsor = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-white-500">
      <div
      className="max-w-screen-xl py-32 mx-auto"
      id="sponsors"
    >
      <div className="text-center ">
        <h1 className="text-6xl font-bold mb-8">Sponsors</h1>
      </div>
      <div>
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <div className="grid grid-cols-5 gap-4 ">
              {sponsors.map((data) => (
                <div key={data.icon} className="flex items-center justify-center">
                  <img className="h-[30px]" src={data.icon} alt=""/>
                </div>
              ))}
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
    </div>
  );
};

export default Sponsor;
