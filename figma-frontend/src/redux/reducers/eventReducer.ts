import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Event = {
  _id: string;
  title: string;
  name: string;
  surname: string;
  city: string;
  date: string;
  time: string;
  description: string;
  imageSrc: string;
  type: number;
  price: string;
  place: string;
};

export type EventResponse = Array<Event>;

type Params = {
  city: string;
  date: string;
  type: number;
};

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getEvents: builder.mutation<EventResponse, Params>({
      query(body) {
        return {
          url: 'events',
          method: 'POST',
          body,
        };
      },
    }),
    getEvent: builder.mutation<Event, { id: string }>({
      query(body) {
        return {
          url: `event/${body.id}`,
          method: 'GET',
        };
      },
    }),
    addEvent: builder.mutation<Event, Partial<Event> & { email: string }>({
      query(body) {
        return {
          url: `add-event`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useAddEventMutation, useGetEventsMutation, useGetEventMutation } = eventApi;
