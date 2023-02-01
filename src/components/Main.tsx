import React from 'react';
import 'css/Main.css';
import jacket1 from 'components/img/jacket1.jpg';
import jacket2 from 'components/img/jacket2.jpg';
import jacket3 from 'components/img/jacket3.jpg';
import { useState } from "react";

export default function Main() {
  const imgBox_list: NodeListOf<Element> = document.querySelectorAll(".img-box");
  const imgBox_array: Array<HTMLElement> = Array.prototype.slice.call(imgBox_list);

  const [fadeState, setFadeState] = useState(false);

  setTimeout(() => {setFadeState(true)}, 2000);
  

  return (
    <main className='main'>
        <a href="#" className={fadeState ? 'img-box current' : 'img-box'}><img className='main-img' src={jacket1} alt="img" /></a>
        <a href="#" className={fadeState ? 'img-box current' : 'img-box'}><img className='main-img' src={jacket1} alt="img" /></a>
        <a href="#" className={fadeState ? 'img-box current' : 'img-box'}><img className='main-img' src={jacket1} alt="img" /></a>
    </main>
  )
}