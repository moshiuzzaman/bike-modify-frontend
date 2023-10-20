/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/SeoHead";
import SingleService from "@/components/Singleservice";
import { useGetServicesQuery } from "@/redux/features/service/service.api";
import {
    Button,
    Carousel,
    Checkbox,
    Pagination,
    Select,
    TextInput,
} from "flowbite-react";

import { Key, use, useEffect, useState } from "react";

const index = () => {
    const [searchText, setSearchText] = useState("");
    const [status, setStatus] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [query, setQuery] = useState("limit=6" + `&page=${currentPage}&`);
    const { data, isLoading, refetch } = useGetServicesQuery(query);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
        refetch();
    };
    useEffect(() => {
        let query = "";
        if (searchText) {
            query += `searchTerm=${searchText}&`;
        }
        if (status) {
            query += `status=${status}&`;
        }
        query += `limit=6&page=${currentPage}&`;
        setQuery(query);
    }, [searchText, status]);
    useEffect(() => {
        refetch();
    }, [query]);
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
                            <Button
                                onClick={() => {
                                    setStatus("");
                                    setSearchText("");
                                    setCurrentPage(1);
                                }}
                            >
                                Reset filter
                            </Button>
                        </div>
                        <div className="bg-gray-300 my-4 rounded p-4">
                            <h1>Keyword</h1>
                            <TextInput
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Search"
                                className="mt-2"
                            />
                        </div>
                        <div className="bg-gray-300 my-4 rounded p-4">
                            <h1 className="mb-2">Status</h1>
                            <Select onChange={(e) => setStatus(e.target.value)}>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </Select>
                        </div>
                    </div>
                    <div className="  w-full ml-8">
                        <div className="flex justify-between items-center">
                            <h1>Found {data?.meta?.total} services</h1>
                        </div>
                        <div className="grid grid-cols-3 flex justify-between items-center gap-4 my-4">
                            {data?.data?.map(
                                (data: any, index: Key | null | undefined) => (
                                    <SingleService key={index} {...data} />
                                )
                            )}
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
                                totalPages={
                                    Math.ceil(data?.meta?.total / 6) || 0
                                }
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default index;
