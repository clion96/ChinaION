import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "../assets/CN_Website_About_Us.jpg";
import Image2 from "../assets/CN_Website_News.jpg";
import Image3 from "../assets/CN_Website_Career.jpg";
import 'typeface-oxanium';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


const images = [Image1, Image2, Image3];

const slideContent = [
  {
    text1: "推动更清洁、更绿色的流动性",
    text2: "我们是一个致力于引领不可避免的电动出行转型的团队",
    text3: "",
    button: "关于我们",
    link: '/AboutUs?Title=AboutUs&'
  },
  {
    text1: "走向移动的未来",
    text2: "更多关于ION Mobility推动创新和设计边界的信息",
    text3: "", 
    button: "新闻",
    link: '/NewsPage?Title=newsPage'
  },
  {
    text1: "加入US的电力革命",
    text2: "寻找接受重大挑战的非传统敬业的个体",
    text3: "", 
    button: "加入我们",
    link: '/employment?Title=recruit&'
  },
 
];

const arrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: '1',
  background: 'rgba(0, 0, 0, 0.3)', 
  padding:'10px',
  opacity: '0', 
  transition: 'opacity 0.3s', 

};
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="slick-arrow right-arrow"
      onClick={onClick}
      style={{ ...arrowStyles, right: '10px', transform: 'translateY(-50%) rotate(180deg)' }} // 从右侧开始调整位置
    >
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiAwTDQuNCAxOCAyMiAzNmgtNC40TDAgMTggMTcuNiAwSDIyeiIgZmlsbD0iIzY2NiIvPjwvc3ZnPg=="
        alt="Next"
        style={{ width: '22px', height: '36px' }} // Set arrow size
      />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
    className="slick-arrow left-arrow"
    onClick={onClick}
    style={{ ...arrowStyles, left: '10px', transform: 'translateY(-50%)',  }} // Adjust the position from the left
  >
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiAwTDQuNCAxOCAyMiAzNmgtNC40TDAgMTggMTcuNiAwSDIyeiIgZmlsbD0iIzY2NiIvPjwvc3ZnPg=="
        alt="Previous"
        style={{ width: '22px', height: '36px' }}
      />
    </div>
  );
};

function Slideshow() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if (isMobile) {
    return (
      <div className="mobile-slideshow" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {slideContent.map((content, index) => (
          <div key={index} style={{ position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
            <img src={images[index]} alt={`Slide ${index + 1}`} style={{ height: '100vh', objectFit: 'cover' }} />
            <div className="slide-overlay" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 60%)', color: 'white', zIndex: 1 }}>
              <div style={{ padding: '20px' }}> {/* Adjust padding as needed */}
                <h2 className='text-xl md:text-4xl my-5' style={{ letterSpacing: '0.1em' }}>{content.text1}</h2>
                <p className="text-xs md:text-sm my-5" style={{ letterSpacing: '0.1em' }}>{content.text2}</p>
                <p>{content.text3}</p>
                <Link to={content.link}>
                  <button className="flex w-[120px] ml-32 justify-center items-center hover-bg text-white py-2 px-4 border my-[20px] rounded relative button-wrapper">
                    <span className="button-content">
                      {content.button}  <span>&#8594;</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  
  
  
  
  
  
  

  return (
    <div className="carousel-wrapper" style={{ fontFamily: 'Oxanium'}}>
      <div className="carousel" style={{ overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
        onMouseEnter={e => {
          //当鼠标进入轮播图时，使箭头可见
          e.currentTarget.querySelectorAll('.slick-arrow').forEach(arrow => arrow.style.opacity = '1');
        }}
        onMouseLeave={e => {
          // 当鼠标离开轮播图时，隐藏箭头
          e.currentTarget.querySelectorAll('.slick-arrow').forEach(arrow => arrow.style.opacity = '0');
        }}
      >
        <div className="slider-container">
        <Slider
          infinite
          speed={800}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={3000}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          >
            {slideContent.map((content, index) => (
              <div key={index} style={{ position: 'relative'}}>
                <img src={images[index]} alt={`Slide ${index + 1}`} 
                />
                <div className="flex top-1/2 flex-col ml-32 md:ml-0 md:translate-x-28 -translate-y-1/2 absolute" 
                    style={{ color: 'white', zIndex: 1 }}>
                  <h2 className='text-xl md:text-4xl'> {content.text1}</h2>
                  <p className="text-xs md:text-sm">{content.text2}</p>
                  <p>{content.text3}</p>
                  <Link to={content.link}>
                    <button className="flex w-auto justify-center items-center hover-bg text-white py-2 px-4 border my-[20px] rounded relative button-wrapper">
                      <span className="button-content">
                        {content.button}  <span>&#8594;</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
