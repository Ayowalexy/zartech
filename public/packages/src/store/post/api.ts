import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axios/axiosBaseQuery";
import { baseUrl } from "../../config/local";
import * as STypes from "./interface";

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: axiosBaseQuery({ baseUrl: baseUrl as string }),
    endpoints: (builder) => ({
        post: builder.mutation<STypes.PostInterface, STypes.PostInterface>({
            query: (credentials) => ({
                url: "posts",
                method: "POST",
                body: credentials,
            }),
        }),
        getPost: builder.query<STypes.PostInterface, string>({
            query: (id: string) => ({
                url: `posts/${id}`,
                method: "GET",
            }),
        }),
        getPosts: builder.query<STypes.PostInterface[], void>({
            query: () => ({
                url: `posts`,
                method: "GET",
            }),
        }),
        edit: builder.mutation<STypes.PostInterface, { id: string, body: STypes.PostInterface }>({
            query: (credentials) => ({
                url: `posts/${credentials.id}`,
                method: "PUT",
                body: credentials.body,
            }),
        }),
        delete: builder.mutation<STypes.PostInterface, string>({
            query: (id: string) => ({
                url: `posts/${id}`,
                method: "DELETE",
            }),
        }),

    }),
});

export const {
    usePostMutation,
    useGetPostQuery,
    useGetPostsQuery,
    useLazyGetPostQuery,
    useEditMutation,
    useDeleteMutation
} = blogApi;

