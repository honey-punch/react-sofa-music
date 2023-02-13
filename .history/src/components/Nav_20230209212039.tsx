import React, {useState} from 'react';
import 'css/Nav.css';

export default function Nav() {

  const [toggleStatem, setToggleState] = useState(false);
  const onClick = () :void => {
    setToggleState((prev) => (!prev))
  }

  return (
    <nav className='nav'>
      <ul className="nav__ul nav__aside">
        <li className="aside__li"><button>FULL MENU</button></li>
        <li className="aside__li"><button>ARTIST</button></li>
        <li className="aside__li"><button>SOFA TV</button></li>
      </ul>
      <ul className="nav__ul nav__scroll">
        <li className='scroll__li'>nav</li>
        <li className='scroll__li'>nav</li>
        <li className='scroll__li'>nav</li>
      </ul>
    </nav>
  )
}