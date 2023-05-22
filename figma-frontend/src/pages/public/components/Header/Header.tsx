/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { VoidFunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components';
import { logout, selectCurrentUser } from '@/redux/authSlice';

type HeaderProps = {
  label?: string;
};

const Header: VoidFunctionComponent<HeaderProps> = ({ label }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuth } = useSelector(selectCurrentUser);

  return (
    <div className="flex flex-col border-primary border-b-[0.25rem] p-10 bg-bg text-primary drop-shadow-[0_10px_7px_rgba(0,0,0,0.3)] relative">
      <div className="flex w-full bg-bg justify-center items-center">
        <div
          className="text-[3rem] md:text-2xl text-primary cursor-pointer"
          onClick={() => navigate('/')}
        >
          Chill & Relax
        </div>
      </div>
      <div className="md:absolute top-4 right-4 flex flex-col gap-4 pt-2">
        {isAuth ? (
          <>
            <Button onClick={() => navigate('/private/profile')}>Кабінет</Button>
            <Button
              onClick={() => {
                dispatch(logout());
                navigate('/login');
              }}
            >
              Вихід
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => navigate('/login')}>Увійти</Button>
            <Button onClick={() => navigate('/registration')}>Зареєструватись</Button>
          </>
        )}
      </div>
      {!!label && (
        <div className="drop-shadow-[0_10px_7px_rgba(0,0,0,0.3)] text-center w-[80%] absolute top-[245px] md:top-[153px] py-3 px-3 md:px-10 bg-[#D1E3C5] right-[10%] border-primary border-[0.125rem]">
          {label}
        </div>
      )}
    </div>
  );
};

export default Header;
