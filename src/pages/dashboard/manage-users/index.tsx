import DeleteModal from "@/components/DeleteModal";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { responseHandler } from "@/helpers/responseHandler";
import useAuth from "@/hooks/useAuth";
import {
    useDeleteUserMutation,
    useGetAllUsersQuery,
    useUpdateUserMutation,
    useUpdateUserRoleMutation,
} from "@/redux/features/user/user.api";
import { Button, Pagination, Select } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    PromiseLikeOfReactNode,
    Key,
    ReactPortal,
    useState,
} from "react";
import { toast } from "react-toastify";

type IUser = {
    email: string;
    id: string;
    image: string | undefined;
    name: string;
    role: string;
};

export default function Users() {
    const { token, role } = useAuth();

    const [currentPage, setCurrentPage] = useState(1);
    const { data, refetch } = useGetAllUsersQuery({
        token: token,
        query: `limit=6&page=${currentPage}`,
    });
    const users = data?.data;
    console.log();

    const onPageChange = (page: number) => {
        setCurrentPage(page);
        refetch();
    };

    const [updateRole] = useUpdateUserRoleMutation();

    const handleRoleChange = async (role: string, id: string) => {
        toast.loading("Updating user role...");
        const res = await updateRole({ data: { role }, id, token: token });
        responseHandler(res);
    };

    const [openModal, setOpenModal] = useState<string | undefined>();
    const [id, setId] = useState<string | undefined>();
    const [deleteUser] = useDeleteUserMutation();
    const router = useRouter();
    const handleDelete = async () => {
        toast.loading("Reviewing...");
        const res = await deleteUser({
            id,

            token,
        });
        responseHandler(res);
        if (!("error" in res)) {
            console.log("res done");

            router.push("/dashboard/manage-users");
            setOpenModal(undefined);
        }
    };

    return (
        <DashboardLayout>
            <DeleteModal
                handleDelete={handleDelete}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Users
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the users in your account including
                            their name, title, email and role.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <Link href="/dashboard/manage-users/add-user">
                            <button
                                type="button"
                                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add user
                            </button>
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
                                            Name &amp; Email
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {users?.map((person: IUser) => (
                                        <tr key={person.email}>
                                            <td className="">
                                                <div className="flex items-center">
                                                    <div className="ml-4 ">
                                                        <img
                                                            className="h-11 w-11 rounded-full"
                                                            src={person.image}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                <div className="ml-4">
                                                    <div className="font-medium text-gray-900">
                                                        {person.name}
                                                    </div>
                                                    <div className="mt-1 text-gray-500">
                                                        {person.email}
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                {role === "ADMIN" ? (
                                                    person.role
                                                ) : (
                                                    <Select
                                                        className="w-36"
                                                        value={person.role}
                                                        onChange={(e) => {
                                                            handleRoleChange(
                                                                e.target.value,
                                                                person.id
                                                            );
                                                        }}
                                                    >
                                                        <option value="ADMIN">
                                                            Admin
                                                        </option>
                                                        <option value="USER">
                                                            User
                                                        </option>
                                                    </Select>
                                                )}
                                            </td>
                                            <td className="flex items-center justify-center mt-6 gap-2">
                                                <Link
                                                    href={`/dashboard/manage-users/edit-user/${person.id}`}
                                                >
                                                    <Button>Edit</Button>
                                                </Link>
                                                <Button
                                                    onClick={() => {
                                                        setOpenModal("default");
                                                        setId(person.id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex items-center justify-center text-center">
                                {data?.meta?.total > 6 && (
                                    <Pagination
                                        currentPage={currentPage}
                                        layout="pagination"
                                        nextLabel="Go forward"
                                        onPageChange={(page) => {
                                            onPageChange(page);
                                        }}
                                        previousLabel="Go back"
                                        showIcons
                                        totalPages={
                                            Math.ceil(data?.meta?.total / 6) ||
                                            0
                                        }
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
