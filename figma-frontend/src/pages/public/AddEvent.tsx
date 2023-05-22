/* eslint-disable @typescript-eslint/no-explicit-any */
import { VoidFunctionComponent, useEffect, useState } from 'react';
import ImageUpload from 'image-upload-react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Label } from '@/components/Label';

import 'image-upload-react/dist/index.css';
import { Button } from '@/components';
import { Input } from '@/components/Input';
import { events as eventList } from '@/constants/common';
import { useAddEventMutation } from '@/redux/reducers/eventReducer';

const AddEvent: VoidFunctionComponent = () => {
  const [imageSrc, setImageSrc] = useState();
  const [image, setImage] = useState<string>('');
  const [events, setEvents] = useState(eventList);
  const [eventId, setEventId] = useState<number>(0);

  const [title, setTitle] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const [price, setPrice] = useState<string>('');
  const [place, setPlace] = useState<string>('');

  const navigate = useNavigate();

  const [addEvent, { isLoading, isSuccess }] = useAddEventMutation();

  const handleImageSelect = (e: any) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]) as unknown as string);
    setImage(e.target.files[0]);
    const fd = new FormData();
    fd.append('image', e.target.files[0], e.target.files[0].name);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/share-event');
    }
  }, [isSuccess, navigate]);

  const sendRequest = () => {
    addEvent({
      title,
      name,
      surname,
      email,
      city,
      date: new Date(date).toLocaleDateString('en-US'),
      time: time.toString().substring(16, 21),
      description,
      imageSrc: 'https://events.liveto.io/_next/static/media/default_event.82c17d7a.png',
      type: eventId,
      price,
      place,
    });
  };

  const disabled =
    !title ||
    !name ||
    !surname ||
    !email ||
    !city ||
    !description ||
    !date ||
    !time ||
    !imageSrc ||
    !eventId ||
    !price ||
    !place ||
    isLoading;

  return (
    <div className="flex flex-col bg-[#F2EBD9]">
      <Header label="Додати подію" />
      <div className="md:px-10 px-5 py-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          <ImageUpload
            handleImageSelect={handleImageSelect}
            imageSrc={imageSrc}
            setImageSrc={setImageSrc}
            style={{
              width: 'auto',
              height: '400px',
              background: 'grey',
            }}
          />
          <div className="flex flex-col gap-10 items-center py-10 w-full">
            <div className="flex flex-col gap-10 w-full px-5 lg:px-10">
              <Input
                type="secondary"
                value={title}
                setValue={setTitle}
                placeholder="Назва події..."
              />
              <Input
                type="secondary"
                value={name}
                setValue={setName}
                placeholder="Ім'я організатора..."
              />
              <Input
                type="secondary"
                value={surname}
                setValue={setSurname}
                placeholder="Прізвище організатора...."
              />
              <Input type="secondary" value={email} setValue={setEmail} placeholder="Email..." />
              <Input type="secondary" value={city} setValue={setCity} placeholder="Місто..." />
              <Input type="secondary" value={price} setValue={setPrice} placeholder="Ціна..." />
              <Input type="secondary" value={place} setValue={setPlace} placeholder="Місце..." />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div className="flex flex-col gap-10 md:py-10">
            <Label title="Введіть дату" className="w-[200px]" />
            <div className="h-[4rem] md:w-[350px] flex flex-col md:flex-col sm:flex-row lg:flex-row gap-4 lg:gap-10">
              <DatePicker
                closeOnScroll
                selected={date}
                onChange={(value: any) => setDate(value)}
                customInput={
                  <input className="flex items-center px-2 md:w-[300px] w-full placeholder:text-[#739A68] text-hxl h-[3rem] bg-[#D1E3C5] border-primary border-b-[3px] text-primary focus:outline-none" />
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 md:py-10">
            <Label title="Введіть час" className="w-[200px]" />
            <div className="h-[4rem] md:w-[350px] flex flex-col md:flex-col sm:flex-row lg:flex-row gap-4 lg:gap-10">
              <DatePicker
                closeOnScroll
                selected={time}
                onChange={(value: any) => setTime(value)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                customInput={
                  <input
                    className="flex items-center px-2 md:w-[300px] w-full placeholder:text-[#739A68] text-hxl h-[3rem] bg-[#D1E3C5] border-primary border-b-[3px] text-primary focus:outline-none"
                    placeholder="Номер телефону"
                  />
                }
              />
            </div>
          </div>
        </div>
        <Label
          title="Виберіть вид діяльності, яка найточніше описує Ваш захід:"
          className="my-10 max-w-[700px] mx-auto"
        />
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
        <textarea
          className="resize-none my-10 h-[200px] w-full placeholder:text-[#739A68] text-hxl p-3 h-[3rem] bg-[#D1E3C5] border-primary border-[3px] text-primary focus:outline-none"
          placeholder="Залиште короткий опис та силочку, де люди можуть придбати білет на цей захід..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          onClick={sendRequest}
          disabled={disabled}
          className="flex justify-center my-5 max-w-[700px] w-full mx-auto"
        >
          Опублікувати подію
        </Button>
      </div>
    </div>
  );
};

export default AddEvent;
