import React from 'react';
import 'components/css/Header.css';
import logo from 'components/img/logo.png';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <h1 className='logo'>
        <Link className='link-btn' to='/'><img src={logo} alt="logo"/></Link>
      </h1>
    </header>
  )
}