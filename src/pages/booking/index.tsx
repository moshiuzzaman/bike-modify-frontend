import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/SeoHead";
import Image from "next/image";
import React, { useEffect } from "react";
import { services } from "../services";
import { Datepicker } from "flowbite-react";

const Booking = () => {
    const dateHandler = (e) => {
        console.log({e})
    }

    useEffect(() => {
        const datePick = document.getElementById("datePick");
        datePick?.addEventListener("changeDate", dateHandler);
        return () => {
            datePick?.removeEventListener("changeDate", dateHandler);
        };
    }, []);
    
    return (
        <>
            <SeoHead title="Car modify | Services" />
            <Layout>
                    <div className="h-96 bg-black text-white flex items-center justify-center">
                        <h1 className="text-6xl">Booking</h1>
                    </div>

                    <div className="flex  container px-16 my-12">
                        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                            <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                    <svg
                                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="mr-2">1</span>
                                    Select{" "}
                                    <span className="hidden sm:inline-flex sm:ml-2">
                                        Service
                                    </span>
                                </span>
                            </li>
                            <li className="flex md:w-full  text-blue-600 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                    <svg
                                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="mr-2">2</span>
                                    Book{" "}
                                    <span className="hidden sm:inline-flex sm:ml-2">
                                        Appointment
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">3</span>
                                Confirmation
                            </li>
                        </ol>
                    </div>
                    {/* left side a single service right site calender and time for booking */}
                    <div className="flex px-16">
                        <div>
                            <Image
                                src={services[0].image}
                                alt="service image"
                                width={500}
                                height={500}
                            ></Image>
                            <h1 className="text-xl font-bold mt-4">
                                {services[0].title}
                            </h1>
                            <p className="text-sm my-2">
                                {services[0].description}
                            </p>

                            <h1>Price: ${services[0].price}</h1>
                        </div>
                        <div>
                            <Datepicker id="datePick" inline onChange={e=>dateHandler(e)}/>
                        </div>
                    </div>
                
            </Layout>
        </>
    );
};

export default Booking;
