import React from 'react';
import 'css/Nav.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className="nav__aside">
        <li className="aside__li"><button>FULL MENU</button></li>
        <li className="aside__li"><button>ARTIST</button></li>
        <li className="aside__li"><button>SOFA TV</button></li>
      </ul>
      <ul className="nav__scroll">
        <li className=''>nav</li>
      </ul>
    </nav>
  )
}