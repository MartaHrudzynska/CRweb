/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { VoidFunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from './components/Header';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { cities } from '@/constants/common';

type CityCardProps = {
  imgSrc: string;
  label: string;
  link: string;
};

const CityCard: VoidFunctionComponent<CityCardProps> = ({ imgSrc, label, link }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2 cursor-pointer" onClick={() => navigate(`/city/${link}`)}>
      <img className="h-[20rem] object-cover" src={imgSrc} alt="city" />
      <button type="button" className="w-full bg-[#D1E3C5] p-4 border-primary border-[2px]">
        {label}
      </button>
    </div>
  );
};

const HomePage: VoidFunctionComponent = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>('');

  const filteredCities = cities.filter((item) => {
    if (!query) return item;

    return item.label.toLowerCase().startsWith(query.toLowerCase());
  });

  const handleAddEvent = () => navigate('/private/add-event');

  return (
    <div className="flex flex-col bg-[#F2EBD9]">
      <Header />
      <div className="text:bodyl text-primary flex md:text-hl md:px-10 px-5 py-5 justify-center text-center bg-[#b4c6b2] drop-shadow-[0_10px_7px_rgba(0,0,0,0.3)]">
        Ласкаво просимо на наш сайт, де Ви знайдете огляд найцікавіших подій у вашому місті -
        концерти, виставки, фестивалі, спортивні змагання та інші. Наша мета - допомогти Вам знайти
        найкращі місця для проведення свого часу, тому ми надаємо детальну інформацію про все, що
        може зацікавити Вас. Додайте наш сайт до Ваших закладок та завітайте сюди в будь-яких
        зручних для Вас момент.
      </div>
      <div className="flex flex-col items-center mt-10 mx-10">
        <div className="flex justify-center flex-col md:flex-row gap-10 w-full">
          <div className="flex justify-center text-hxl items-center p-5 text-primary text-center border-primary border-[0.25rem] md:w-[19.5rem] h-[15rem] bg-secondary cursor-pointer">
            Пошук місць для відпочинку
          </div>
          <div
            onClick={handleAddEvent}
            className="flex justify-center text-hxl items-center bg-grey text-[#739A68] p-5 border-primary border-[0.25rem] md:w-[19.5rem] h-[15rem] text-center cursor-pointer"
          >
            Поділитись подією
          </div>
        </div>
        <Input
          className="md:w-[41.5rem] mt-10 w-full border-[3px]"
          placeholder="Введіть місто, у якому хочте незабутньо провести час!"
          value={query}
          setValue={setQuery}
        />
      </div>
      {filteredCities.length ? (
        <div className="grid md:grid-cols-2 gap-10 p-10 max-w-[900px] mx-auto mb-10">
          {filteredCities.map(({ label, imgSrc, link }) => (
            <CityCard key={link} imgSrc={imgSrc} label={label} link={link} />
          ))}
        </div>
      ) : (
        <div className="grid p-10 w-full max-w-[900px] mx-auto mb-10">
          <Label title="Нічого не знайдено!" />
        </div>
      )}
    </div>
  );
};

export default HomePage;
