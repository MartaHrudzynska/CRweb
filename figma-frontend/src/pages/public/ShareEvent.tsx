import { VoidFunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from './components/Header';
import { Button } from '@/components';
import { Label } from '@/components/Label';

const ShareEvent: VoidFunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#F2EBD9] pb-20">
      <Header label="Дуже вдячні за те, що ділитеся з нами захоплюючими подіями!" />
      <div className="mx-5">
        <Label
          title="Хочемо повідомити Вас, що ми отримали Ваш запит і вже працюємо над його модифікацією. Очікуйте, будь ласка, трішки часу після чого ми надішлемо відповідь на Вашу пошту. Дякуємо за розуміння!"
          className="my-20 max-w-[700px] mx-auto text-[#17530D] text-hl"
        />
      </div>
      <Button onClick={() => navigate('/')} className="md:w-[30rem] md:mx-auto w-auto m-5">
        Повернутись на головну сторінку
      </Button>
    </div>
  );
};

export default ShareEvent;
