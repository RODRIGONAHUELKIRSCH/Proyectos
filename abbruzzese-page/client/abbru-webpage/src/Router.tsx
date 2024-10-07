import * as React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './pages/Signin';
import Register from './pages/Form';
import  Recover  from './pages/Recover';
import  Inicio  from './pages/Home';
import Company from './pages/Company';
import News from './pages/Event';
import Contact from './pages/Contact';

const App:React.FC=()=>{
    return(
        
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<SignIn/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/recover' element={<Recover/>}></Route>
            <Route path='/home' element={<Inicio/>}></Route>
            <Route path="/aboutus" element={<Company/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
        
    );
};
export default App;