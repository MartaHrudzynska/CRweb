import { VoidFunctionComponent, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Button } from '@/components';
import { useRegistrationMutation } from '@/redux/reducers/userReducer';
import { Input } from '@/components/Input';
import { setCredentials } from '@/redux/authSlice';

const SignUp: VoidFunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerMutation, { isLoading, isSuccess, error, data }] = useRegistrationMutation();

  const disabled = !name || !surname || !mobile || !year || !email || !password || isLoading;

  useEffect(() => {
    if (error) {
      setEmail('');
      setPassword('');
      // eslint-disable-next-line no-alert
      alert('Email вже використовується');
    }
    if (isSuccess && data) {
      dispatch(setCredentials(data));
      navigate('/');
    }
  }, [data, dispatch, error, isSuccess, navigate]);

  return (
    <div className="flex flex-col bg-[#F2EBD9] pb-20">
      <Header label="Зареєструйтеся та діліться крутими подіями разом з нами!" />
      <div className="mx-5 flex flex-col p-10 pb-16 md:mx-auto bg-[#D1E3C5] md:w-[30rem] gap-4 mt-[6rem] border-primary border-[3px]">
        <Input value={mobile} setValue={setMobile} placeholder="Номер телефону" />
        <Input value={email} setValue={setEmail} placeholder="Email..." />
        <Input value={name} setValue={setName} placeholder="Повне ім'я..." />
        <Input value={surname} setValue={setSurname} placeholder="Прізвище користувача..." />
        <Input value={year} setValue={setYear} placeholder="Рік народження..." />
        <Input
          typeInput="password"
          value={password}
          setValue={setPassword}
          placeholder="Пароль до Вашої сторінки..."
        />
      </div>
      <div className="text-center text-hxl text-primary mx-auto py-10">
        Реєструючись, ви приймаєте наші Умови!
      </div>
      <Button
        disabled={disabled}
        onClick={async () => {
          registerMutation({
            name,
            surname,
            mobile,
            email,
            year,
            password,
          });
        }}
        className="md:w-[30rem] md:m-auto w-auto mx-5"
      >
        Зареєструватись
      </Button>
    </div>
  );
};

export default SignUp;
