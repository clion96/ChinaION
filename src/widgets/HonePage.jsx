import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Video from '../assets/Web_Hompage_12s_Video_030223.mp4';
import Logo from "../assets/m1slogo.webp"; 
import 'typeface-oxanium';

const videoStyle = {
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
  position: 'relative',
};

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    handleResize(); // 初始化时调用以设置初始状态

    window.addEventListener('resize', handleResize); // 添加窗口调整大小事件监听

    return () => {
      window.removeEventListener('resize', handleResize); // 组件卸载时移除事件监听
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // 在这里将宽度小于等于768px的设备判定为移动设备
  };

  return (
    <div style={{ fontFamily: 'Oxanium' }}>
      <video autoPlay muted loop style={videoStyle}>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-0 w-full md:px-6.21 -translate-y-1/2 z-10 text-center">
        <div className={`mx-${isMobile ? 'auto' : '0'}`} style={{ paddingRight: isMobile ? '0' : '0', marginLeft: isMobile ? '0' : '100px', textAlign: isMobile ? 'center' : 'left' }}>
          <img
            alt="M1-S"
            src={Logo}
            width={isMobile ? '150' : '367'}
            height={isMobile ? '28' : '52'}
            decoding="async"
            className={isMobile ? 'mx-auto' : ''}
            loading="lazy"
            style={{ color: 'transparent', marginBottom: isMobile ? '20px' : '0' }}
          />
        </div>
        <p
          className={`text-white ${isMobile ? 'text-2xl' : 'text-xxl md:text-5xl'} my-[40px] font-semibold leading-[40px] uppercase ${isMobile ? 'text-center' : '2xs:max-md:mx-[auto] 2xs:max-md:text-center'}`}
          style={{whiteSpace: window.innerWidth <= 380 ? 'nowrap' : 'normal', marginLeft: isMobile ? '0' : '100px', textAlign: isMobile ? 'center' : 'left' }}
        >
          REFINING THE ART OF MOBILITY
        </p>
      </div>
      <div className="flex flex-col items-center absolute bottom-[24px] left-1/2 -ml-[10px]">
        {/* SVG arrow icon */}
        <svg
          className="arrow-icon"
          width="40"
          height="50"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13L20 21.5L28 13L30.5 15.5L20 25.5L9.5 15.5L12 13Z"
            fill="white"
          />
          <path
            d="M12 24L20 32.5L28 24L30.5 26.5L20 36.5L9.5 26.5L12 24Z"
            fill="white"
          />
          {/* Second layer of arrow */}
        </svg>

      </div>
    </div>
  );
}

export default HomePage;
