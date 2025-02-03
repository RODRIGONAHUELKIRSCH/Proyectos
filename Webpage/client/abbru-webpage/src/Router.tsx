import * as React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './pages/Signin';
import Register from './pages/Form';
import  Recover  from './pages/Recover';
import  Inicio  from './pages/Home';
import Company from './pages/Company';
import News from './pages/Event';
import Contact from './pages/Contact';
import PasswordReset from './pages/PasswordRecovery';
import ProtectedRoute from './pages/ProtectedRoute';
import Magazine from './pages/Magazines';
import ProtectedLoginRoute from './pages/ProtectedLoginRoute'
import ProtectedCookieRoute from './pages/ProtectedCookieRoute';
import CookiePolicy from './pages/CookiePolicy'
import Productos from './pages/Productos';

const App:React.FC=()=>{

    return(
        
        <BrowserRouter basename="/frontend">
            <Routes>
            <Route path='/policy'  element={<CookiePolicy></CookiePolicy>}></Route>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/register' element={<ProtectedLoginRoute><Register/></ProtectedLoginRoute>}></Route>
            <Route path='/recover' element={<ProtectedLoginRoute><Recover/></ProtectedLoginRoute>}></Route>
            <Route path='/signin'  element={<ProtectedLoginRoute><SignIn/></ProtectedLoginRoute>}></Route>
            <Route path="/aboutus" element={<Company/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path='/passwordreset' element={<PasswordReset/>}></Route>
            <Route path='/magazine' element={<Magazine/>}></Route>
            {/* Rutas protegidas */}
            <Route  path="/products"element={<ProtectedCookieRoute><ProtectedRoute><Productos/></ProtectedRoute></ProtectedCookieRoute> } />
            <Route path="/news"element={<ProtectedCookieRoute><ProtectedRoute><News /></ProtectedRoute></ProtectedCookieRoute>}/>
            </Routes>
        </BrowserRouter>
        
    );
};

export default App;