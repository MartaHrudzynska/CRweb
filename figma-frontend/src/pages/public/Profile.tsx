import { VoidFunctionComponent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';

import { ReactComponent as UseIcon } from '@/assets/user.svg';
import { Button } from '@/components';
import { logout, selectCurrentUser } from '@/redux/authSlice';

const Profile: VoidFunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(selectCurrentUser);

  return (
    <div className="flex flex-col bg-[#F2EBD9]">
      <Header label="Профіль" />
      <div className="md:px-10 px-5 pt-20 md:max-m-[1000px] m-a">
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start">
          <div className="flex flex-col my-auto p-10 pb-16 w-full max-w-[20rem] max-h-[20rem] bg-[#D1E3C5]  gap-4 border-primary border-[3px]">
            <UseIcon />
          </div>
          <div>
            <div className="text-primary md:justify-start text-hxl flex flex-col p-10 pb-16 bg-[#D1E3C5] w-full max-w-[30rem] gap-4 border-primary border-[3px]">
              Раді вітати Вас на нашому сайті! Якщо у Вас виникли певні проблеми, то зверніться до
              нашого менджера! Ми якнайшвидше спробуємо вирішити Вашу проблему!
            </div>
            <div className="my-10 text-primary md:justify-start text-hxl flex flex-col p-10 pb-16 bg-[#D1E3C5] w-full max-w-[30rem] gap-4 border-primary border-[3px]">
              <div className="underline">{user.name}</div>
              <div className="underline">{user.surname}</div>
              <div className="underline">{user.email}</div>
              <div className="underline">{user.mobile}</div>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          dispatch(logout());
          navigate('/login');
        }}
        className="md:w-[30rem] md:mx-auto w-auto m-5"
      >
        Вийти з облікового запису
      </Button>{' '}
      <Button
        onClick={() => navigate('/private/add-event')}
        className="md:w-[30rem] md:mx-auto w-auto m-5 mb-20"
      >
        Опублікувати подію
      </Button>
    </div>
  );
};

export default Profile;
