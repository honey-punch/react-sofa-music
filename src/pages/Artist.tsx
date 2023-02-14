import Nav from "components/Nav";
import 'pages/css/Artist.css';
import { Link } from 'react-router-dom';
import john from 'pages/img/1.john.png'
import paul from 'pages/img/2.paul.png'
import george from 'pages/img/3.george.png'
import ringo from 'pages/img/4.ringo.png'

export default function MainController() {
  return (
    <main className='main'>
      <ul className='artist__ul'>
        <li className='artist__li'>
          <img className='artist__img' src={john} alt="john" />
          <Link className='artist__link' to='/artist/1'></Link>
        </li>
        <li className='artist__li'>
          <img className='artist__img' src={paul} alt="paul" />
          <Link className='artist__link' to='/artist/2'></Link>
        </li>
        <li className='artist__li'>
          <img className='artist__img' src={george} alt="george" />
          <Link className='artist__link' to='/artist/3'></Link>
        </li>
        <li className='artist__li'>
          <img className='artist__img' src={ringo} alt="ringo" />
          <Link className='artist__link' to='/artist/4'></Link>
        </li>
      </ul>
      <Nav></Nav>
    </main>
  )
}