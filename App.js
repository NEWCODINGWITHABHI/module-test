import logo from './logo.svg';
import './App.css';
import './css/main.css';
import React from "react";
import Main from './component/body/Main'
import Footer from './component/footer/Footer';
import NavigationBar from './component/header/NavigationBar';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Card from './component/body/Card';
function App() {

  return (
    <div className="App">
      <NavigationBar/>
      <Main/>
      <div className='App-card'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <Footer/>
    </div>
   
  );
}

export default App;
