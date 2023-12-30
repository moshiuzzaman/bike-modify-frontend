import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ServiceData {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
}

const SingleService = (data: ServiceData) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className=" bg-white p-4 rounded">
            <img
                className="w-full h-40 object-cover rounded"
                src={data.image}
                alt="service image"
            ></img>
            <h1 className="text-xl font-bold mt-4">{data.title}</h1>
            <p className="text-sm my-2">{data.description}</p>
            <div className="flex items-center justify-between flex-col md:flex-row">
                <h1 className="text-xl font-bold">${data.price}</h1>
                {!id && (
                    <>
                        <Link href={`/services/booking/${data.id}`}>
                            <Button>Book Now</Button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default SingleService;
