import React from 'react';
import 'css/Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <ul className="sns-btns">
        <li className="sns-btn">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="sns-btn">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li className="sns-btn">
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li className="sns-btn">
          <a href="#">
            <i className="fa-solid fa-comment"></i>
          </a>
        </li>
        <li className="sns-btn">
          <a href="#">
            <i className="fa-brands fa-google-drive"></i>
          </a>
        </li>
      </ul>
      <p className='copyright'>copyright reserve</p>
    </footer>
  )
}