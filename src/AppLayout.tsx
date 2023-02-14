import React from 'react';
import 'AppLayout.css';
import 'reset.css';
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import Artist from 'pages/Artist';
import routes from "routes/routers";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppLayout() {
    return (
        <div className='app-layout'>
            <BrowserRouter>
                <Header />
                {/* 연결되는 페이지가 많아지면 route를 따로 관리할 것
                {routes.map((route) => <Route key={route.key} path={route.path} element={route.element} />) } */}
                <Routes>
                    <Route path='/' element={<Main />}></Route>
                    <Route path='/artist' element={<Artist />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}