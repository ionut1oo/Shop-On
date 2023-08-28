import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
  id: number;
  name: string;
  description: string;  
  price: number;  
}

export const apiSlice = createApi({
  reducerPath: 'apiProductSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
