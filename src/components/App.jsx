import React, { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from './hooks/userAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../redux/auth/auth-fetch';
import { Container } from './App.styled';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';

import hero from "../photo/hero.jpg";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? ( 
    <Loader /> 
  ) : (
      <Container style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo={"/login" || "/registration"} component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />{' '}
        </Route>
      </Routes>
    </Container>
  );
}