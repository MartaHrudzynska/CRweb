import { SetStateAction, VoidFunctionComponent, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header } from './components/Header';
import { Label } from '@/components/Label';
import { cities, events as eventList } from '@/constants/common';
import { Button } from '@/components';
import { useGetEventsMutation } from '@/redux/reducers/eventReducer';
import { setEventList } from '@/redux/eventsSlice';

const CitySingle: VoidFunctionComponent = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState(eventList);
  const [eventId, setEventId] = useState<number>(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams<{ cityId: string }>();
  const [city, setCity] = useState<{
    imgSrc: string;
    label: string;
    link: string;
  }>(cities[0]);

  const [getEvent, { isLoading, isSuccess, data }] = useGetEventsMutation();

  const disabled = !date || !eventId || isLoading;

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setEventList(data));
      navigate(`/city/${city.link}/events`);
    }
  }, [city.link, data, dispatch, isSuccess, navigate]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const currentCity = cities.find((item) => item.link === params.cityId)!;
    setCity(currentCity);
  }, [params.cityId]);

  return (
    <div className="flex flex-col bg-[#F2EBD9]">
      <Header label={city.label} />
      <div className="md:px-10 px-5 py-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          <img src={city.imgSrc} alt={city.label} />
          <div className="flex flex-col gap-10 items-center md:py-10">
            <div className="flex flex-col items-center gap-10 md:py-10">
              <Label title="Дата" className="w-[200px] md:mr-[50px]" />
              <div className="h-[4rem] md:w-[350px] flex flex-col md:flex-col sm:flex-row lg:flex-row gap-4 lg:gap-10">
                <DatePicker
                  closeOnScroll
                  selected={date}
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  onChange={(value: SetStateAction<Date> | null) => setDate(value!)}
                  customInput={
                    <input className="flex items-center px-2 md:w-[300px] w-full placeholder:text-[#739A68] text-hxl h-[3rem] bg-[#D1E3C5] border-primary border-b-[3px] text-primary focus:outline-none" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <Label title="Види діяльності і розваг" className="my-10 max-w-[700px] mx-auto" />
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {events.map((item) => (
            <Label
              key={item.id}
              title={item.title}
              isActive={item.isActive}
              className="cursor-pointer"
              onClick={() => {
                const idx = eventList.findIndex((elem) => elem.id === item.id);

                setEvents([
                  ...eventList.slice(0, idx),
                  {
                    ...events[idx],
                    isActive: !events[idx].isActive,
                  },
                  ...eventList.slice(idx + 1),
                ]);

                setEventId(eventList[idx].id);
              }}
            />
          ))}
        </div>
        <Button
          disabled={disabled}
          onClick={() =>
            getEvent({
              city: city.label,
              date: new Date(date).toLocaleDateString('en-US'),
              type: eventId,
            })
          }
          className="flex justify-center my-10 w-full md:w-[700px] mx-auto"
        >
          Пошук події
        </Button>
      </div>
    </div>
  );
};

export default CitySingle;
