import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DonorPage from './Donationpage'
import NeedyPage from './Needypage'

function App() {
  
  const MyContext = React.createContext();
  const value = { data: 'Hello World' };
  return (
    <>
    <DonorPage/>
    <MyContext.Provider value={value}>
      <NeedyPage />
    </MyContext.Provider>
    </>
  )
}

export default App
