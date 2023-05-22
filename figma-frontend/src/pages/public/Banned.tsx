import { VoidFunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from './components/Header';
import { Button } from '@/components';

const Banned: VoidFunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#F2EBD9] pb-20">
      <Header label="Функція буде доступна тільки після авторизації" />
      <div className="flex flex-col md:flex-row md:gap-10 md:mx-auto mt-20">
        <Button
          onClick={() => navigate('/login')}
          className="md:w-[20rem] lg:w-[25rem] md:mx-auto w-auto m-5"
        >
          Увійти
        </Button>
        <Button
          onClick={() => navigate('/registration')}
          className="md:w-[20rem] lg:w-[25rem] md:mx-auto w-auto m-5"
        >
          Зареєструватись
        </Button>
      </div>
      <div className="flex flex-col md:flex-row md:gap-10 md:mx-auto">
        <Button onClick={() => navigate('/')} className="md:w-[30rem] md:mx-auto w-auto m-5">
          На головну
        </Button>
      </div>
    </div>
  );
};

export default Banned;
