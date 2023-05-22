import { VoidFunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Button } from '@/components';
import { useLoginMutation } from '@/redux/reducers/userReducer';
import { Input } from '@/components/Input';
import { setCredentials } from '@/redux/authSlice';

const SignIn: VoidFunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [loginMutation, { isLoading, isSuccess, error, data }] = useLoginMutation();

  const disabled = !email || !password || isLoading;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setEmail('');
      setPassword('');
      // eslint-disable-next-line no-alert
      alert('Пароль або email не валідні');
    }
    if (isSuccess && data) {
      dispatch(setCredentials(data));
      navigate('/');
    }
  }, [data, dispatch, error, isSuccess, navigate]);

  // useEffect(() => {
  //   if (isSuccess && data) {
  //     console.log(data);
  //     dispatch(
  //       setCredentials(
  //         data as unknown as {
  //           user: {
  //             email: string;
  //             phone: string;
  //           };
  //           token: string;
  //         },
  //       ),
  //     );
  //     navigate('/');
  //   }
  // }, [data, dispatch, isSuccess, navigate]);

  return (
    <div className="flex flex-col bg-[#F2EBD9] pb-20">
      <Header label="Заходьте у свій профіль та діліться цікавими!" />
      <div className="mx-5 flex flex-col p-10 pb-16 md:mx-auto bg-[#D1E3C5] md:w-[30rem] gap-4 mt-[6rem] border-primary border-[3px]">
        <Input value={email} setValue={setEmail} placeholder="Email..." />
        <Input
          typeInput="password"
          value={password}
          setValue={setPassword}
          placeholder="Пароль до Вашої сторінки..."
        />
      </div>
      <Button
        disabled={disabled}
        onClick={async () => {
          loginMutation({
            email,
            password,
          });
        }}
        className="md:w-[30rem] md:mx-auto w-auto mx-5 mt-16"
      >
        Увійти в обліковий запис
      </Button>
    </div>
  );
};

export default SignIn;
