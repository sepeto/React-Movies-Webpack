import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/index.jsx';

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>

  )
};

export default PageLayout;
