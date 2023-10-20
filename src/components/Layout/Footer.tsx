import React from "react";
import Logo from "../../../public/assets/logo/logo2_white_2528X896.png";

import Image from "next/image";
import Link from "next/link";

const FooterContent = {
    description:
        "We're dedicated to fostering innovation and collaboration in technology. Our platform connects individuals to a thriving developer community, enabling exciting collaborative projects. We prioritize skill development and staying current with tech trends, empowering members to reach their full potential and network within our vibrant community.",
};
const Footer = () => {
    return (
        <div className=" pt-24 pb-24 bg-blue-950	 text-white">
            <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
                <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
                    <div className="col-start-1 col-end-2 flex items-center pb-4">
                        <Image
                            src="https://websitedemos.net/bike-modification-04/wp-content/uploads/sites/736/2020/11/custom-bike-builder-logo-white.svg"
                            width={190}
                            height={70}
                            alt="Logo"
                        ></Image>
                    </div>
                    <p className="mb-4 text-gray-300">
                        {FooterContent.description}
                    </p>
                    <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col items-center justify-center">
                        <div className="flex w-full mt-2 mb-8 -mx-2">
                            <Link
                                className="cursor-pointer"
                                href="https://www.facebook.com/groups/356271864430303"
                            >
                                <div className="cursor-pointer  rounded-full items-center justify-center flex p-2 shadow-md">
                                    <img
                                        width="50"
                                        height="50"
                                        src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png"
                                        alt="facebook--v1"
                                    />
                                </div>
                            </Link>
                            <Link
                                className="cursor-pointer"
                                href="https://www.linkedin.com/groups/14244223/"
                            >
                                <div className="cursor-pointer  rounded-full items-center justify-center flex p-2 shadow-md">
                                    <img
                                        width="50"
                                        height="50"
                                        src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                                        alt="linkedin"
                                    />
                                </div>
                            </Link>
                        </div>
                        <p className="text-gray-300 ">
                            Copyright © {new Date().getFullYear()} NGEGn
                        </p>
                    </div>
                </div>

                <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
                    <p className="text-white mb-4 font-medium text-lg">
                        Product
                    </p>
                    <ul className="text-gray-500 ">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Download{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Pricing{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Locations{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Server{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Countries{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Blog{" "}
                        </li>
                    </ul>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
                    <p className="text-white mb-4 font-medium text-lg">
                        Engage
                    </p>
                    <ul className="text-gray-500">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            iOS-dev-conf ?{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            FAQ{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Tutorials{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            About Us{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Privacy Policy{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Terms of Service{" "}
                        </li>
                    </ul>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
                    <p className="text-white mb-4 font-medium text-lg">
                        Earn Money
                    </p>
                    <ul className="text-gray-500">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Affiliate{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Become Partner{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
