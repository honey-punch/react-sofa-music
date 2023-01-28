import React from 'react';
import 'AppLayout.css';
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import 'reset.css';

export default function AppLayout() {
    return (
        <div className='app-layout'>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}