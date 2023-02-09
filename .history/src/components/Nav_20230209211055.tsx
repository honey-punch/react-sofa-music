import React from 'react';
import 'css/Nav.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className="nav__aside">
        <li className="nav__li"><button>FULL MENU</button></li>
        <li className="nav__li"><button>ARTIST</button></li>
        <li className="nav__li"><button>SOFA TV</button></li>
      </ul>
      <ul className="nav__scroll">
        <li>nav</li>
      </ul>
    </nav>
  )
}