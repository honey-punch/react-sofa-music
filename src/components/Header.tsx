import 'components/css/Header.css';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <h1 className='logo'>
        <Link className='link-btn' to='/react-sofa-music'><img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo"/></Link>
      </h1>
    </header>
  )
}