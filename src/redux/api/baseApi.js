import { createApi} from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-types'
import { axiosBaseQuery } from '@/helpers/axiosBaseQuery'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl:"https://modhunaghat-blood-bank-backend.vercel.app/api/v1"}),
    endpoints: () => ({}),
  tagTypes: tagTypesList
})