import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type User = {
  name: string;
  surname: string;
  mobile: string;
  email: string;
  year: string;
  password: string;
};

export type Response = {
  token: string;
  user: {
    email: string;
    mobile: string;
    name: string;
    surname: string;
  };
};

export const authApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    login: builder.mutation<Response, Partial<User>>({
      query(body) {
        return {
          url: 'login',
          method: 'POST',
          body,
        };
      },
    }),
    registration: builder.mutation<Response, User>({
      query(body) {
        return {
          url: 'registration',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
