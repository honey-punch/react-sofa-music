import 'AppLayout.css';
import 'reset.css';
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import Artist from 'pages/Artist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routers from 'routes/routers'

export default function AppLayout() {
    // const routers = [...Routers]
    
    return (
        <div className='app-layout'>
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* 연결되는 페이지가 많아지면 route를 따로 관리할 것
                    {routers.map((route) => <Route key={route.key} path={route.path} element={<route.element />}></Route>)} */}
                    <Route path='/react-sofa-music' element={<Main />}></Route>
                    <Route path='/artist' element={<Artist />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}