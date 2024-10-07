import { createApi, CreateApi,fetchBaseQuery,FetchBaseQueryMeta } from "@reduxjs/toolkit/query"; 
import build from "next/dist/build";


export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_BASE_API_URL}),
    reducerPath:"api",
    tagTypes:[],
    endpoints:(build)=>({}),
})