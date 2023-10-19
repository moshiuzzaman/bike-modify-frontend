import DashboardLayout from "@/components/Layout/DashboardLayout";
import { responseHandler } from "@/helpers/responseHandler";
import useAuth from "@/hooks/useAuth";
import { useDeleteServiceMutation, useGetServicesQuery } from "@/redux/features/service/service.api";
import { Avatar, Button, Modal, Pagination } from "flowbite-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const people = [
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    // More people...
];

export default function Users() {
  const {token}=useAuth();
  
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, refetch } = useGetServicesQuery(
        `limit=6&page=${currentPage}`
    );
    const [deleteService, { isSuccess }] = useDeleteServiceMutation();
    console.log("Data:", data?.meta?.total);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
        refetch();
    };
    const [openModal, setOpenModal] = useState<string | undefined>();
    const [id, setId] = useState<string | undefined>();
    const handleModalOpen = (id: string) => {
        setId(id);
        setOpenModal('default');
    };
    const handleDelete = async() => {
        setOpenModal(undefined);
       const res=await deleteService({id,token:token});
      responseHandler(res);
    }
    return (
        <DashboardLayout>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Services
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the Services
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <Link href="/dashboard/manage-services/add-service">
                            <Button
                                type="button"
                                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add Service
                            </Button>
                        </Link>
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
                                            Image
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Langth
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                        >
                                            <span>Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {data?.data?.map((service: any) => (
                                        <tr key={service.title}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                <Avatar
                                                    img={service.image}
                                                    alt="User Image"
                                                    className="rounded-full "
                                                />
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {service.title}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {service.price}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {service.status
                                                    ? "Available"
                                                    : "Unavailable"}
                                            </td>
                                            <td className=" py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                <div className="flex gap-2">
                                                    <Link
                                                        href={`/dashboard/manage-services/edit/${service.id}`}
                                                    >
                                                        <Button>Edit</Button>
                                                    </Link>
                                                    <Button
                                                        onClick={() =>
                                                            handleModalOpen(
                                                                service.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Modal
                    show={openModal === "default"}
                    onClose={() => setOpenModal(undefined)}
                >
                    <Modal.Header>Are you want to delete this</Modal.Header>
                    <Modal.Body>
                        <p>
                            Are you sure you want to delete this service? This
                            action cannot be undone.
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
                    <Pagination
                        currentPage={currentPage}
                        layout="pagination"
                        nextLabel="Go forward"
                        onPageChange={(page) => {
                            onPageChange(page);
                        }}
                        previousLabel="Go back"
                        showIcons
                        totalPages={Math.ceil(data?.meta?.total / 6 )|| 0}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
}
