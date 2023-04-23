import React, { useEffect, useState } from 'react';
import 'components/css/Main.css';
import Nav from 'components/Nav'
import { log } from 'console';

type ActiveInfo = {
  id: number;
  src: string;
  title: string;
  isActive: boolean;
}

export default function Main() {
  const [imgBox, setImgBox] = useState<Array<ActiveInfo>>([
    {
      id: 1,
      src: '/img/jacket1.jpg',
      title: "The Beatles - REVOLVER",
      isActive: true,
    },
    {
      id: 2,
      src: '/img/jacket2.jpg',
      title: "The Beatles - Let It Be",
      isActive: false,
    },
    {
      id: 3,
      src: '/img/jacket3.jpg',
      title: "The Beatles - BEATLES'65",
      isActive: false,
    }
  ])

  useEffect(() => {
    const id = setInterval(() => {
      setImgBox((array) => {
        const currentIndex = array.findIndex(item => item.isActive);
        const nextIndex = currentIndex < array.length -1 ? currentIndex + 1 : 0;
        const newList = array.map((item, index) => {
          return {
            ...item,
            isActive: nextIndex === index,
          };
        });

        return newList;
      });
    }, 4000);

    return () => {
      clearInterval(id);
    };
  }, [])


  return (
    <main className='main'>
        {imgBox.map((item) => (
          <div key={item.id} className={item.isActive ? 'img-box current' : 'img-box'}>
            <a href="#" className='img-box__a'>
              <img className='img-box__img' src={process.env.PUBLIC_URL + item.src} alt="img" />
            </a>
            <p className='title'>{item.title}</p>
          </div>
        ))}
        <Nav></Nav>
    </main>
    
  )
}