import React, { useEffect, useState } from 'react';
import 'css/Main.css';
import jacket1 from 'components/img/jacket1.jpg';
import jacket2 from 'components/img/jacket2.jpg';
import jacket3 from 'components/img/jacket3.jpg';
import Nav from 'components/Nav'

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
      src: jacket1,
      title: "The Beatles - REVOLVER",
      isActive: true,
    },
    {
      id: 2,
      src: jacket2,
      title: "The Beatles - Let It Be",
      isActive: false,
    },
    {
      id: 3,
      src: jacket3,
      title: "The Beatles - BEATLES'65",
      isActive: false,
    }
  ])

  useEffect(() => {
    const id = setInterval(() => {
      setImgBox((prev) => {
        const currentIndex = prev.findIndex((item) => item.isActive);
        const nextIndex = currentIndex < prev.length -1 ? currentIndex + 1 : 0;
        const newList = prev.map((item, index) => {
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
            <a href="#" className='main-img'>
              <img  src={item.src} alt="img" />
            </a>
            <p className='title'>{item.title}</p>
          </div>
        ))}
        <Nav></Nav>
    </main>
    
  )
}