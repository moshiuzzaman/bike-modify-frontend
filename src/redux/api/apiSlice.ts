import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
export const api = createApi({
    reducerPath: "api",
    // baseQuery: fetchBaseQuery({ baseUrl: "https://demo-backend.studio-23.xyz/api/v1" }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    tagTypes: tagTypesList,
    endpoints: () => ({}),
});
