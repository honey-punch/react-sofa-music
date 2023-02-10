import React, {useState} from 'react';
import 'css/Nav.css';

export default function Nav() {

  const [scrollState, setScrollState] = useState(false);
  const openScroll = (): void => {
    setScrollState(true);
  }
  const closeScroll = (): void => {
    setScrollState(false)
  }

  return (
    <nav className='nav'>
      <ul className="nav__ul nav__aside">
        <li className="aside__li"><button onClick={openScroll}>FULL MENU</button></li>
        <li className="aside__li"><button>ARTIST</button></li>
        <li className="aside__li"><button>SOFA TV</button></li>
      </ul>
      <ul className={scrollState ? "nav__ul nav__scroll active" : 'nav__ul nav__scroll'}>
        <li className='close-btn'>
          <button onClick={closeScroll}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li className='scroll__li'><a href="#">SOFA ENTERTAINMENT</a></li>
        <li className='scroll__li'><a href="#">ARTIST</a></li>
        <li className='scroll__li'><a href="#">RELEASES</a></li>
        <li className='scroll__li'><a href="#">VIDEOS</a></li>
        <li className='scroll__li'><a href="#">CONCERT</a></li>
        <li className='scroll__li'><a href="#">NEWS</a></li>
        <li className='scroll__li'><a href="#">AUDITION</a></li>
        <li className='info-sns-wrap'>
          <div className="info">
            <p>EDITION OF SOFA ENTERTAINMENT</p>
            <br />
            <p>서울특별시 마포구 행복회로 77번길 123</p>
            <br />
            <p>02 1234 5678 | info@sofa-ent.com</p>
          </div>
          <div className="sns">
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-comment"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-google-drive"></i>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  )
}