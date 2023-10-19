/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/SeoHead";
import {
    Button,
    Carousel,
    Checkbox,
    Pagination,
    Select,
    TextInput,
} from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

export const services = [
    {
        title: "Car wash",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.",
        price: 200,
        image: "https://t3.ftcdn.net/jpg/04/32/24/08/360_F_432240885_U5v0N3PaSG4echxjah4OkgpaSFwQdkpx.jpg",
    },
    {
        title: "Car wash",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.",
        price: 200,
        image: "https://t3.ftcdn.net/jpg/04/32/24/08/360_F_432240885_U5v0N3PaSG4echxjah4OkgpaSFwQdkpx.jpg",
    },
    {
        title: "Car wash",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.",
        price: 200,
        image: "https://t3.ftcdn.net/jpg/04/32/24/08/360_F_432240885_U5v0N3PaSG4echxjah4OkgpaSFwQdkpx.jpg",
    },
    {
        title: "Car wash",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.",
        price: 200,
        image: "https://t3.ftcdn.net/jpg/04/32/24/08/360_F_432240885_U5v0N3PaSG4echxjah4OkgpaSFwQdkpx.jpg",
    },
    {
        title: "Car wash",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.",
        price: 200,
        image: "https://t3.ftcdn.net/jpg/04/32/24/08/360_F_432240885_U5v0N3PaSG4echxjah4OkgpaSFwQdkpx.jpg",
    },
    {
        title: "Car wash",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.",
        price: 200,
        image: "https://t3.ftcdn.net/jpg/04/32/24/08/360_F_432240885_U5v0N3PaSG4echxjah4OkgpaSFwQdkpx.jpg",
    },
];
const index = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <SeoHead title="Car modify | Services" />
            <Layout>
                <div className="h-96 bg-black text-white flex items-center justify-center">
                    <h1 className="text-6xl">Services</h1>
                </div>
                {/* 2 grid 1st 1/3 2nd 2/3 */}
                <div className="flex  container px-12 my-12">
                    <div className="  w-1/4">
                        <div className="flex items-center justify-between ">
                            <h2>Filter by</h2>
                            <Button>Reset filter</Button>
                        </div>
                        <div className="bg-gray-300 my-4 rounded p-4">
                            <h1>Keyword</h1>
                            <TextInput placeholder="Search" className="mt-2" />
                        </div>
                        <div className="bg-gray-300 my-4 rounded p-4">
                            <h1 className="mb-2">Categories</h1>
                            <Select>
                                <option value="all">All</option>
                                <option value="car_watch">Car watch</option>
                                <option value="car_modify">Car modify</option>
                                <option value="car_maintenance">
                                    Car maintenance
                                </option>
                                <option value="bike_wash">Bike wash</option>
                                <option value="bike_modify">Bike modify</option>
                                <option value="bike_maintenance">
                                    Bike maintenance
                                </option>
                            </Select>
                        </div>
                        <div className="bg-gray-300 my-4 rounded p-4">
                            <h1 className="mb-2">Price</h1>
                            <div className="flex items-center justify-between gap-2">
                                <TextInput
                                    placeholder="Min"
                                    className="w-1/2"
                                />
                                <TextInput
                                    placeholder="Max"
                                    className="w-1/2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="  w-full ml-8">
                        <div className="flex justify-between items-center">
                            <h1>Found 12 services</h1>
                            <Select>
                                <option value="desc">Price Low to high</option>
                                <option value="asc">Price high to low</option>
                            </Select>
                        </div>
                        <div className="grid grid-cols-3 flex justify-between items-center gap-4 my-4">
                            {services.map((data, index) => (
                                <div
                                    key={index}
                                    className=" bg-white p-4 rounded"
                                >
                                    <Image
                                        width={300}
                                        height={200}
                                        src={data.image}
                                        alt="service image"
                                    ></Image>
                                    <h1 className="text-xl font-bold mt-4">
                                        {data.title}
                                    </h1>
                                    <p className="text-sm my-2">
                                        {data.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-xl font-bold">
                                            ${data.price}
                                        </h1>
                                        <Button>Book now</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-center text-center">
                            <Pagination
                                currentPage={currentPage}
                                layout="pagination"
                                nextLabel="Go forward"
                                onPageChange={(page) => {
                                    onPageChange(page);
                                }}
                                previousLabel="Go back"
                                showIcons
                                totalPages={1000}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default index;
