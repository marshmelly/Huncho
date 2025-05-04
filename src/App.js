import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from'./Components/Home';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
import Addhaircut from './Components/Addhaircut';
import NotFound from './Components/NotFound';
import Payment from './Components/Payments';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import About from './Components/About';
import Contact from './Components/COntact';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Carousel/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/haircut' element={<Addhaircut/>}/>
          <Route path='/carousel' element={<Carousel/>}/>
          <Route path='/notfound' element={<NotFound/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/payments' element={<Payment/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter><br/>
      <Footer/>
    </div>
  );
}

export default App;
