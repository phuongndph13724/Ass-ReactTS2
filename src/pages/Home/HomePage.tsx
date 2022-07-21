import { Footer, Header } from 'antd/lib/layout/layout';
import React from 'react'
import { Outlet } from 'react-router-dom';

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
    <Header/>
      <div>HomePage</div>
      <Outlet/>
    <Footer/>
    </>
  );
}

export default HomePage