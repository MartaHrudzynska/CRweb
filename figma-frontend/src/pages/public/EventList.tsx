/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import { VoidFunctionComponent, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { cities } from '@/constants/common';
import { Label } from '@/components/Label';
import { selectEventList, setEvent } from '@/redux/eventsSlice';
import { useGetEventMutation } from '@/redux/reducers/eventReducer';

type EventProps = {
  title: string;
  date: string;
  time: string;
  srcUrl: string;
  price: string;
  id: string;
  city: string;
};

const Event: VoidFunctionComponent<EventProps> = ({
  id,
  title,
  date,
  time,
  srcUrl,
  price,
  city,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getEvent, { isSuccess, data }] = useGetEventMutation();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setEvent(data));
      navigate(`/city/${city}/events/${id}`);
    }
  }, [city, data, dispatch, id, isSuccess, navigate]);

  return (
    <div
      onClick={() =>
        getEvent({
          id,
        })
      }
      className="cursor-pointer mx-auto my-10 text-primary text-hxl grid md:grid-cols-[40%_1fr] p-10 h-auto bg-[#D1E3C5] w-full max-w-[50rem] gap-4 border-primary border-[3px]"
    >
      <img src={srcUrl} alt={title} />
      <div>
        <div className="underline p-2">{title}</div>
        <div className="underline p-2">{`Дата: ${date}`}</div>
        <div className="underline p-2">{`Час: ${time}`}</div>
        <div className="underline p-2">{`Вартість: ${price} грн`}</div>
      </div>
    </div>
  );
};

const EventList: VoidFunctionComponent = () => {
  const params = useParams<{ cityId: string }>();
  const [city, setCity] = useState<{
    imgSrc: string;
    label: string;
    link: string;
  }>(cities[0]);

  const data = useSelector(selectEventList);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const currentCity = cities.find((item) => item.link === params.cityId)!;
    setCity(currentCity);
  }, [params.cityId]);

  return (
    <div className="flex flex-col bg-[#F2EBD9]">
      <Header label={city.label} />
      <div className="md:px-10 px-5 py-20">
        {data?.length ? (
          data?.map((item) => {
            return (
              <Event
                id={item._id}
                key={item._id}
                title={item.title}
                date={item.date}
                time={item.time}
                srcUrl={item.imageSrc}
                price={item.price}
                city={city.link}
              />
            );
          })
        ) : (
          <div className="grid p-10 w-full max-w-[900px] mx-auto mb-10">
            <Label title="Нічого не знайдено!" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;
