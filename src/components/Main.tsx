import React from 'react';
import 'css/Main.css';
import jacket1 from 'components/img/jacket1.jpg';
import jacket2 from 'components/img/jacket2.jpg';
import jacket3 from 'components/img/jacket3.jpg';
import { useState } from "react";

export default function Main() {
  const imgs_list: NodeListOf<Element> = document.querySelectorAll(".main-img");
  const imgs_array: Array<HTMLElement> = Array.prototype.slice.call(imgs_list);

  const time = 2000;
  let i = 0;

  function fadeInAndOut(): void {
    imgs_array[i].classList.add('fade');
    setTimeout(() => {imgs_array[i].classList.remove('fade')}, time)

    i++;

    if (i == imgs_array.length) {
      i = 0;
    }
  }

  function startInterval() {
    fadeInAndOut()
      return setInterval(() => {
        fadeInAndOut();
      }, time)
  }

  startInterval();
  

  return (
    <main className='main'>
      <img className='main-img' src={jacket1} alt="img" />
      <img className='main-img' src={jacket2} alt="img" />
      <img className='main-img' src={jacket3} alt="img" />
    </main>
  )
}