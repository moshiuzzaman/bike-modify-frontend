import { useGetReviewsQuery } from "@/redux/features/booking/booking.api";
import { Carousel } from "flowbite-react";
import React from "react";

const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const Review: React.FC = () => {
    const { data } = useGetReviewsQuery("limit=5");
    
    const reviews = data?.data?.data;
    return (
        <div className="h-[420px]  w-full bg-gray-900">
            <Carousel className="">
                {reviews?.map((review: { comment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; booking: { user: { image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }; }; },key: React.Key | null | undefined) => (
                    <section key={key} className="">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure className="max-w-screen-md mx-auto  text-white">
                                <svg
                                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                                    viewBox="0 0 24 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl font-medium  dark:text-white">
                                       {review?.comment}
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    <img
                                        className="w-6 h-6 rounded-full"
                                        src={review?.booking?.user?.image}
                                        alt="profile picture"
                                    />
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium ">
                                           {
                                                  review?.booking?.user?.name
                                           }
                                        </div>
                                        <div className="pl-3 text-sm font-light ">
                                            CEO at Google
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                ))}
            </Carousel>
        </div>
    );
};

export default Review;
