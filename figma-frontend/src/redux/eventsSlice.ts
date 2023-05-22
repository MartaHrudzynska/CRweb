/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { EventResponse, Event } from './reducers/eventReducer';

type Response = {
  data?: EventResponse;
  event?: Event;
};

const initialState: Response = {
  data: [],
  event: {
    _id: '',
    title: '',
    name: '',
    surname: '',
    city: '',
    date: '',
    time: '',
    description: '',
    imageSrc: '',
    type: 0,
    price: '',
    place: '',
  },
};

const slice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEventList(state, action) {
      state.data = action.payload;
    },
    setEvent(state, action) {
      state.event = action.payload;
    },
  },
});

export const { setEventList, setEvent } = slice.actions;

export default slice.reducer;

export const selectEventList = (state: RootState) => state.events.data;

export const selectEvent = (state: RootState) => state.events.event;
