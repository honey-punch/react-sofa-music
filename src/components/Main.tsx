import React from 'react';
import 'css/Main.css';
import jacket1 from 'components/img/jacket1.jpg';
import jacket2 from 'components/img/jacket2.jpg';
import jacket3 from 'components/img/jacket3.jpg';
import { useState } from "react";

type ActiveInfo = {
  id: number;
  src: string;
  isActive: boolean;
}

export default function Main() {
  const [imgBox, setImgBox] = useState<Array<ActiveInfo>>([
    {
      id: 1,
      src: jacket1,
      isActive: true,
    },
    {
      id: 2,
      src: jacket2,
      isActive: false,
    },
    {
      id: 3,
      src: jacket3,
      isActive: false,
    }
  ])


  return (
    <main className='main'>
        <a href="#" className='img-box current'><img className='main-img' src={jacket1} alt="img" /></a>
        <a href="#" className='img-box current'><img className='main-img' src={jacket2} alt="img" /></a>
        <a href="#" className='img-box current'><img className='main-img' src={jacket3} alt="img" /></a>
    </main>
  )
}