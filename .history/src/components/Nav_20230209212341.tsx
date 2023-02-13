import React, {useState} from 'react';
import 'css/Nav.css';

export default function Nav() {

  const [toggleState, setToggleState] = useState(false);
  const onClick = (): void => {
    setToggleState(false)
  }

  return (
    <nav className='nav'>
      <ul className="nav__ul nav__aside">
        <li className="aside__li"><button onClick={onClick}>FULL MENU</button></li>
        <li className="aside__li"><button>ARTIST</button></li>
        <li className="aside__li"><button>SOFA TV</button></li>
      </ul>
      <ul className={toggleState ? "nav__ul nav__scroll active" : 'nav__ul nav__scroll'}>
        <li className='close -btn'><button></button></li>
        <li className='scroll__li'>nav</li>
        <li className='scroll__li'>nav</li>
        <li className='scroll__li'>nav</li>
      </ul>
    </nav>
  )
}