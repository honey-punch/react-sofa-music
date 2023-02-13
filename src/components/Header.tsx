import React from 'react';
import 'css/Header.css';
import logo from 'components/img/logo.png';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1 className='logo'><Link to='/'><img src={logo} alt="logo"/></Link></h1>
    </header>
  )
}