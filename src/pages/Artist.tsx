import React, { useState } from 'react';
import Nav from "components/Nav";
import 'pages/css/Artist.css';
import { Link } from 'react-router-dom';

type members = 'john' | 'paul' | 'george' | 'ringo';

export default function Artist() {
  const [linkState, setLinkState] = useState({
    john: false,
    paul: false,
    george: false,
    ringo: false,
  });
  
  const mouseEnter = (key: members, e:React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();
    setLinkState({
      ...linkState,
      [key]: true
    });
  }
  const mouseLeave = (key: members, e:React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();
    setLinkState({
      ...linkState,
      [key]: false
    });
  }
  
  return (
    <main className='main'>
      <ul className='artist__ul'>
        <li className='artist__li'
            onMouseEnter={(e) => mouseEnter('john', e)}
            onMouseLeave={(e) => mouseLeave('john', e)}
        >
          <img className='artist__img' src={process.env.PUBLIC_URL + '/img/1.john.png'} alt="john" />
          <Link className={linkState.john ? 'artist__link active' : 'artist__link'} to='/artist/1'>
            <h2 className='artist__name'>John Lennon</h2>
            <p className='artist__more'>more</p>
          </Link>
        </li>
        <li className='artist__li'
            onMouseEnter={(e) => mouseEnter('paul', e)}
            onMouseLeave={(e) => mouseLeave('paul', e)}
        >
          <img className='artist__img' src={process.env.PUBLIC_URL + '/img/2.paul.png'} alt="paul" />
          <Link className={linkState.paul ? 'artist__link active' : 'artist__link'} to='/artist/2'>
            <h2 className='artist__name'>Paul McCartney</h2>
            <p className='artist__more'>more</p>
          </Link>
        </li>
        <li className='artist__li'
            onMouseEnter={(e) => mouseEnter('george', e)}
            onMouseLeave={(e) => mouseLeave('george', e)}
        >
          <img className='artist__img' src={process.env.PUBLIC_URL + '/img/3.george.png'} alt="george" />
          <Link className={linkState.george ? 'artist__link active' : 'artist__link'} to='/artist/3'>
            <h2 className='artist__name'>George Harrison</h2>
            <p className='artist__more'>more</p>
          </Link>
        </li>
        <li className='artist__li'
            onMouseEnter={(e) => mouseEnter('ringo', e)}
            onMouseLeave={(e) => mouseLeave('ringo', e)}
        >
          <img className='artist__img' src={process.env.PUBLIC_URL + '/img/4.ringo.png'} alt="ringo" />
          <Link className={linkState.ringo ? 'artist__link active' : 'artist__link'} to='/artist/4'>
            <h2 className='artist__name'>Ringo Starr</h2>
            <p className='artist__more'>more</p>
          </Link>
        </li>
      </ul>
      <Nav></Nav>
    </main>
  )
}