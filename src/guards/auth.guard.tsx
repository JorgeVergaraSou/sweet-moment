// src/guards/auth.guard.tsx
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../models';
import { Props } from '../interfaces/guard.interface';
import { clearLocalStorage } from '../utilities';
import { UserKey, resetUser } from '../redux/states/user';
import { useAppSelector } from '../redux/hooks';

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useAppSelector((state) => state.user);
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      try {
        const { exp } = JSON.parse(atob(token.split('.')[1]));
        const expirationDate = new Date(exp * 1000);
        const currentDate = new Date();

        if (expirationDate <= currentDate) {
          clearLocalStorage(UserKey);
          dispatch(resetUser());
          window.location.href = `${PublicRoutes.LOGIN}`;
        }
      } catch (error) {
        clearLocalStorage(UserKey);
        dispatch(resetUser());
        window.location.href = `${PublicRoutes.LOGIN}`;
      }
    }
  }, [location, token, dispatch]);

  if (!userState.name) {
    return <Navigate replace to={`${PublicRoutes.LOGIN}`} />;
  }

  return privateValidation ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />;
};

export default AuthGuard;