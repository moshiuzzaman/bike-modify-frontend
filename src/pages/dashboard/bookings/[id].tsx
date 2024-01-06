import DashboardLayout from "@/components/Layout/DashboardLayout";
import SingleService from "@/components/Singleservice";
import { AppointmentTime } from "@/constants/appontment";
import { responseHandler } from "@/helpers/responseHandler";
import useAuth from "@/hooks/useAuth";
import {
    useGetSingleBookingQuery,
    useUpdateBookingMutation,
} from "@/redux/features/booking/booking.api";
import { Datepicker } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const EditBooking = () => {
    const { token } = useAuth();
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetSingleBookingQuery({ id, token });
    const [date, setDate] = useState<Date>(new Date());

    const [bookingTime, setBookingTime] = useState<string>("09:00 AM");

    const [updateBooking] = useUpdateBookingMutation();

    const handleUpdateBooking = async () => {
        
        const bookingData: { date?: Date; time?: string } = {};
        date && (bookingData.date = date);
        bookingTime && (bookingData.time = bookingTime);

        const res = await updateBooking({
            data: { ...bookingData, status: "PENDING" },
            id: id as string,

            token,
        });
        responseHandler(res);
        if (!("error" in res)) {
            router.push("/dashboard/bookings");
        }
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
                Edit Booking
            </h1>
            <div className="flex px-16 my-16 justify-between items-between">
                <div className="h-20">
                    <SingleService {...data?.data?.service} className="h-20" />
                </div>
                <div className="mx-4 flex w-1/3 justify-center">
                    <Datepicker
                        id="datePick"
                        inline
                        onSelectedDateChanged={(e) => {
                            setDate(e);
                        }}
                    />
                </div>
                <div className="flex flex-col justify-center p-8 w-1/3">
                    <h1 className="text-2xl mb-2">Appointment Time</h1>
                    <div className="flex justify-between flex-wrap">
                        {AppointmentTime.map((data, index) => (
                            // onclick set the time and change the color
                            <div
                                onClick={() => {
                                    setBookingTime(data);
                                }}
                                key={index}
                                className={
                                    bookingTime === data
                                        ? "bg-blue-500 text-white p-2 rounded m-2"
                                        : "bg-gray-300 p-2 rounded m-2"
                                }
                            >
                                {data}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleUpdateBooking}
                        className="bg-blue-500 text-white p-2 rounded m-2"
                    >
                        Update Booking
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default EditBooking;
