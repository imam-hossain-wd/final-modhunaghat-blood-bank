import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => {
        return {
          url: "/user",
          method: "GET"
        };
      },
      providesTags: [tagTypes.user],
    }),
      getSingleUser: builder.query({
        query: (id) => {
          return {
            url: `/users/${id}`,
            method: "GET"
          };
        },
        providesTags: [tagTypes.user]
      }),
  }),
});

export const {
    useGetUsersQuery,
    useGetSingleUserQuery
} = userApi;