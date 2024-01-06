import DashboardLayout from "@/components/Layout/DashboardLayout";
import ReviewModal from "@/components/ReviewModal";
import { convertDate, convertDateAndTime } from "@/helpers/dateConvert";
import { responseHandler } from "@/helpers/responseHandler";
import useAuth from "@/hooks/useAuth";
import {
    useDeleteBookingMutation,
    useGetBookingByUserQuery,
    useGetBookingsQuery,
    usePostReviewMutation,
    useUpdateBookingMutation,
} from "@/redux/features/booking/booking.api";
import { Button, Modal, Pagination, Select } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

interface Booking {
    id: string;
    service: {
        image: string;
        title: string;
        price: number;
    };
    user: {
        name: string;
        email: string;
    };
    reviews: [];
    status: string;
    date: string;
    time: string;
    createdAt: string;
}

export default function MyBookings() {
    const { token, role } = useAuth();
    const router = useRouter();

    const [currentPage, setCurrentPage] = useState(1);

    const { data, refetch } = useGetBookingByUserQuery({
        query: `limit=6&page=${currentPage}`,

        token: token,
    });
    const { data: booking } = useGetBookingsQuery({
        query: `limit=6&page=${currentPage}`,
        token: token,
    });

    const [deleteBooking] = useDeleteBookingMutation();

    const onPageChange = (page: number) => {
        setCurrentPage(page);
        refetch();
    };

    const [openModal, setOpenModal] = useState<string | undefined>();
    const [id, setId] = useState<string | undefined>();
    const handleModalOpen = (id: string) => {
        setId(id);
        setOpenModal("default");
    };
    const handleDelete = async () => {
        const res = await deleteBooking({ id, token: token });
        setOpenModal(undefined);
        responseHandler(res);
    };

    let bookingData: Booking[] = [];
    let length = 0;
    if (role === "USER") {
        bookingData = data?.data?.data;
        length = data?.data?.meta?.total;
    } else {
        bookingData = booking?.data?.data;
        length = booking?.data?.meta?.total;
    }


    const [updateBooking] = useUpdateBookingMutation();

    const handleUpdateBooking = async (id: string, status: string) => {

        toast.loading("Updating booking status...");
        const res = await updateBooking({
            data: { status },
            id: id,
            token,
        });
        responseHandler(res);
        if (!("error" in res)) {
            refetch();
        }
    };

    const [openReviewModal, setOpenReviewModal] = useState<
        string | undefined
    >();
    const [reviewHandle] = usePostReviewMutation();
    const handleReview = async (review: string) => {
        toast.loading("Reviewing...");
        const res = await reviewHandle({
            data: { comment: review, bookingId: id },

            token,
        });
        responseHandler(res);
        if (!("error" in res)) {

            router.push("/dashboard/bookings");
        }
    };

    return (
        <DashboardLayout>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            My Bookings
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all my bookings
                        </p>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                        >
                                            Service data
                                        </th>
                                        {role !== "USER" && (
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                User
                                            </th>
                                        )}
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Date & Time
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Booking Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative py-3.5 pl-3 pr-4 sm:pr-0 "
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {bookingData?.length === 0 && (
                                        <tr>
                                            <td
                                                className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0"
                                                colSpan={5}
                                            >
                                                <div className="ml-2 flex items-center">
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">
                                                            No Bookings
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    {bookingData?.map((booking: Booking) => (
                                        <tr key={booking.id}>
                                            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                                <div className="ml-2 flex items-center">
                                                    <div className="h-11 w-11 flex-shrink-0">
                                                        <img
                                                            className="h-11 w-11 rounded-full"
                                                            src={
                                                                booking.service
                                                                    .image
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">
                                                            {
                                                                booking.service
                                                                    .title
                                                            }
                                                        </div>
                                                        <div className="mt-1 text-gray-500">
                                                            Price:{" "}
                                                            {
                                                                booking.service
                                                                    .price
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            {role !== "USER" && (
                                                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                    <div className="text-gray-900">
                                                        {booking.user.name}
                                                    </div>
                                                    <div className="mt-1 text-gray-500">
                                                        {booking.user.email}
                                                    </div>
                                                </td>
                                            )}
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                <div className="text-gray-900">
                                                    {convertDate(booking.date)}
                                                </div>
                                                <div className="mt-1 text-gray-500">
                                                    {booking.time}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                    {role === "USER" || booking.reviews.length ? (
                                                        booking.status
                                                    ) : (
                                                        <Select
                                                            onChange={(e) =>
                                                                handleUpdateBooking(
                                                                    booking.id,
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            defaultValue={
                                                                booking.status
                                                            }
                                                        >
                                                            <option value="PENDING">
                                                                PENDING
                                                            </option>
                                                            <option value="CONFIRMED">
                                                                CONFIRMED
                                                            </option>
                                                            <option value="COMPLETED">
                                                                COMPLETED
                                                            </option>
                                                            <option value="CANCELED">
                                                                CANCELED
                                                            </option>
                                                        </Select>
                                                    )}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                {convertDateAndTime(
                                                    booking.createdAt
                                                )}
                                            </td>
                                            <td
                                                className=" text-sm font-medium 
                                                flex gap-2 items-center justify-center h-[80px]
                                            "
                                            >
                                                {role === "USER" &&
                                                    booking.status ===
                                                        "PENDING" && (
                                                        <>
                                                            <Link
                                                                href={`/dashboard/bookings/${booking.id}`}
                                                            >
                                                                <Button>
                                                                    Edit
                                                                </Button>
                                                            </Link>
                                                            <Button
                                                                onClick={() =>
                                                                    handleModalOpen(
                                                                        booking.id
                                                                    )
                                                                }
                                                            >
                                                                delete
                                                            </Button>
                                                        </>
                                                    )}
                                                {role !== "USER" && (
                                                    <>
                                                        {!booking.reviews
                                                            .length && (
                                                            <Link
                                                                href={`/dashboard/bookings/${booking.id}`}
                                                            >
                                                                <Button>
                                                                    Edit
                                                                </Button>
                                                            </Link>
                                                        )}
                                                        <Button
                                                            onClick={() =>
                                                                handleModalOpen(
                                                                    booking.id
                                                                )
                                                            }
                                                        >
                                                            delete
                                                        </Button>
                                                    </>
                                                )}
                                                {role === "USER" &&
                                                    booking.status ===
                                                        "COMPLETED" &&
                                                    !booking.reviews.length && (
                                                        <Button
                                                            onClick={() => {
                                                                setId(
                                                                    booking.id
                                                                );
                                                                setOpenReviewModal(
                                                                    "default"
                                                                );
                                                            }}
                                                        >
                                                            Review
                                                        </Button>
                                                    )}
                                                {booking.status ===
                                                    "COMPLETED" &&
                                                    booking.reviews.length && (
                                                        <p>Review done</p>
                                                    )}
                                                {role === "USER" &&
                                                    booking.status ===
                                                        "CONFIRMED" && (
                                                        <p>Wait please</p>
                                                    )}
                                                {role === "USER" &&
                                                    booking.status ===
                                                        "CANCELED" && (
                                                        <Link
                                                            href={`/dashboard/bookings/${booking.id}`}
                                                        >
                                                            <Button>
                                                                Rescheduled
                                                            </Button>
                                                        </Link>
                                                    )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <ReviewModal
                                openModal={openReviewModal}
                                setOpenModal={setOpenReviewModal}
                                handleReview={handleReview}
                            />
                            <Modal
                                show={openModal === "default"}
                                onClose={() => setOpenModal(undefined)}
                            >
                                <Modal.Header>
                                    Are you want to delete this
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        Are you sure you want to delete this
                                        Booking? This action cannot be undone.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => handleDelete()}>
                                        I accept
                                    </Button>
                                    <Button
                                        color="gray"
                                        onClick={() => setOpenModal(undefined)}
                                    >
                                        Decline
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <div className="flex items-center justify-center text-center">
                                {length > 6 && (
                                    <Pagination
                                        currentPage={currentPage}
                                        layout="pagination"
                                        nextLabel="Go forward"
                                        onPageChange={(page) => {
                                            onPageChange(page);
                                        }}
                                        previousLabel="Go back"
                                        showIcons
                                        totalPages={Math.ceil(length / 6) || 0}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
