import { axiosBaseQuery } from '@/utils/axiosCustom';
import { createApi } from '@reduxjs/toolkit/query/react';

export const rootServices = createApi({
  reducerPath: 'rootServices',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/',
  }),
  endpoints: () => ({}),
});
