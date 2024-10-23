import * as React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './pages/Signin';
import Register from './pages/Form';
import  Recover  from './pages/Recover';
import  Inicio  from './pages/Home';
import Company from './pages/Company';
import News from './pages/Event';
import Contact from './pages/Contact';
import Products from './pages/Product';
import PasswordReset from './pages/PasswordRecovery';
import ProtectedRoute from './pages/ProtectedRoute';
import Magazine from './pages/Magazines';
import ProtectedLoginRoute from './pages/ProtectedLoginRoute'

const App:React.FC=()=>{

    return(
        
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/register' element={<ProtectedLoginRoute><Register/></ProtectedLoginRoute>}></Route>
            <Route path='/recover' element={<ProtectedLoginRoute><Recover/></ProtectedLoginRoute>}></Route>
            <Route path='/signin'  element={<ProtectedLoginRoute><SignIn/></ProtectedLoginRoute>}></Route>
            <Route path="/aboutus" element={<Company/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path='/passwordreset' element={<PasswordReset/>}></Route>
            <Route path='/magazine' element={<Magazine/>}></Route>
            {/* Rutas protegidas */}
            <Route  path="/products"element={ <ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path="/news"element={<ProtectedRoute><News /></ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>
        
    );
};

export default App;