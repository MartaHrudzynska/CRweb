/* eslint-disable no-cond-assign */
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/authSlice';

export default () => {
  const { isAuth } = useSelector(selectCurrentUser);

  return isAuth ? <Outlet /> : <Navigate to="/banned" />;
};
