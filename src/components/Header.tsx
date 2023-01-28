import React from 'react';
import 'css/Header.css';
import logo from 'components/img/logo.png';

export default function Header() {
  return (
    <header>
      <h1 className='logo'><img src={logo} alt="logo"/></h1>
    </header>
  )
}