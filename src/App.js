import React, { useState } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import ThemeContext from './ThemeContext'
import Header from './header'
import Main from './mainwithfunction'


function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value = {themeHook}>
      <div>
        <Header />
        <Main />
        
      </div>
    </ThemeContext.Provider>
  );
}
export default App

