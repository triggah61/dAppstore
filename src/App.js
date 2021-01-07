import React, { useContext } from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';
import ReactGA from 'react-ga';

import { GOOGLE_ANALYTICS_ID, IS_DEV_STAGING } from 'constants/config';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import YourStore from 'pages/YourStore';
import DApps from 'pages/DApps';
import Apps from 'pages/Apps';
import Games from 'pages/Games';
import News from 'pages/News';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import ConfirmEmail from 'pages/ConfirmEmail';
import SignupSuccess from 'pages/SignupSuccess';
import Account from 'pages/Account';
import ForgotPassword from 'pages/ForgotPassword';
import ForgotPasswordSuccess from 'pages/ForgotPassword/Success';
import ResetPassword from 'pages/ResetPassword';
import ResetPasswordSuccess from 'pages/ResetPassword/Success';
import AppDetails from 'pages/AppDetails';
import NotFound from 'pages/NotFound';
import Search from 'pages/Search';
import AuthPageContainer from 'components/Common/AuthPageContainer';
import TermsOfService from 'pages/TermsOfService';
import DAppstore from 'pages/DAppstore';
import Rankings from 'pages/Rankings';
import PageContainer from 'components/Common/PageContainer';
import GlobalStyles from 'components/GlobalStyles';

import Presale from 'pages/Presale';
import Cart from 'pages/Cart';
import MyVoucher from 'pages/MyVoucher';
import OrderHistory from 'pages/OrderHistory';
import { CartContext } from 'contexts/CartContext';
import withSession from './withSession';
import 'stylesheet/global.css';

import styles from './App.module.scss';

const Container = styled.div`
  min-height: 100vh;
`;
function App() {
  const { selectedItemID } = useContext(CartContext);
  if (!IS_DEV_STAGING) {
    ReactGA.initialize(GOOGLE_ANALYTICS_ID);
  }

  return (
    <div className={selectedItemID ? styles.App : null}>
      <GlobalStyles />
      <Header />
      <Container>
        <Router>
          <PageContainer default>
            <AuthPageContainer path="/">
              <YourStore path="your-store" />
              <Account path="account" />
              <NotFound default />
            </AuthPageContainer>
            <Home path="/" />
            <DApps path="dapps" />
            <Apps path="apps" />
            <AppDetails path="app-details/:appType/:appId" />
            <Games path="games" />
            <News path="news" />
            <Login path="login" />
            <Signup path="signup" />
            <Search path="search" />
            <ConfirmEmail path="confirm-email/:token" />
            <SignupSuccess path="signup-success" />
            <ForgotPassword path="forgot-password" />
            <ForgotPasswordSuccess path="forgot-password-success" />
            <ResetPassword path="reset-password/:token" />
            <ResetPasswordSuccess path="reset-password-success" />
            <TermsOfService path="terms-of-service" />
            <DAppstore path="dAppstore" />
            <Presale path="presale" />
            <Rankings path="rankings" />
            <Cart path="/cart" />
            <MyVoucher path="my-vouchers" />
            <OrderHistory path="order-history" />
          </PageContainer>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default withSession()(App);
