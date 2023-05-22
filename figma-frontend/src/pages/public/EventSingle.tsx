import { VoidFunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { selectEvent } from '@/redux/eventsSlice';

const EventSingle: VoidFunctionComponent = () => {
  const item = useSelector(selectEvent);

  return (
    <div className="flex flex-col bg-[#F2EBD9]">
      <Header label={item?.title} />
      <div className="mx-5 flex self-center flex-col my-20 bg-[#D1E3C5] max-w-[50rem] p-10 border-primary h-auto border-[3px]">
        <div className="text-primary text-hxl grid md:grid-cols-[40%_1fr] gap-4">
          <img src={item?.imageSrc} alt={item?.title} />
          <div>
            <div className="underline p-2">{item?.title}</div>
            <div className="underline p-2">{`Дата: ${item?.date}`}</div>
            <div className="underline p-2">{`Час: ${item?.time}`}</div>
            <div className="underline p-2">{`Вартість: ${item?.price} грн`}</div>
            <div className="underline p-2">{`Місце: ${item?.place}`}</div>
          </div>
        </div>
        <div className="underline p-2 text-primary text-hxl">{item?.description}</div>
      </div>
    </div>
  );
};

export default EventSingle;
