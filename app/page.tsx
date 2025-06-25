import React from 'react'
import Navbar from './components/layout/Navbar';
import UserServices from './components/layout/UserServices';

export default function Page() {
  return (
    <div className='w-screen h-screen flex flex-col bg-white'>
      <Navbar />
      <UserServices />
    </div>
  );
}
