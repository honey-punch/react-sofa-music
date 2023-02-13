import React from 'react';
import 'AppLayout.css';
import 'reset.css';
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import MainController from 'pages/MainController';
import routes from "routes/routers";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppLayout() {
    return (
        <div className='app-layout'>
            <BrowserRouter>
                <Header />
                {/* {routes.map((route) => <Router key={} url={route.url} components={route.component} />) } */}
                <Routes>
                    <Route path='/' element={<Main />}></Route>
                    <Route path='/artist' element={<MainController />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}