import React, { useEffect  } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ION_Mobius_1 from '../assets/ION_Mobius_1.webp';
import ION_Mobius_2 from '../assets/ION_Mobius_2.webp';
import ION_Mobius_3 from '../assets/ION_Mobius_3.webp';
import ION_Mobius_4 from '../assets/ION_Mobius_4.webp';
import ION_Mobius_5 from '../assets/ION_Mobius_5.webp';
import ION_Mobius_6 from '../assets/ION_Mobius_6.webp';
import ION_Mobius_7 from '../assets/ION_Mobius_7.webp';
import ION_Mobius_8 from '../assets/ION_Mobius_8.webp';
import ION_Mobius_9 from '../assets/ION_Mobius_9.webp';
import ION_Mobius_10 from '../assets/ION_Mobius_10.webp';

function Picture_column() {

  useEffect(() => {
    // 在组件挂载和更新时滚动到页面顶部
    window.scrollTo(0, 0);
  }, []);
  
  const images = [
    { src: ION_Mobius_1, title: 'ION_Mobius-1.jpg' },
    { src: ION_Mobius_2, title: 'ION_Mobius-2.jpg' },
    { src: ION_Mobius_7, title: 'ION_Mobius-7.jpg', tall: true },
    { src: ION_Mobius_5, title: 'ION_Mobius-5.jpg' },
    { src: ION_Mobius_10, title: 'ION_Mobius-10.jpg' },
    { src: ION_Mobius_3, title: 'ION_Mobius-3.jpg' },
    { src: ION_Mobius_4, title: 'ION_Mobius-4.jpg' },
    { src: ION_Mobius_8, title: 'ION_Mobius-8.jpg', tall: true },
    { src: ION_Mobius_9, title: 'ION_Mobius-9.jpg' },
    { src: ION_Mobius_6, title: 'ION_Mobius-6.jpg' },
  ];
  
  // 下载图片
  const downloadImage = (imageUrl) => {
    // 创建一个锚点元素
    const anchor = document.createElement('a');
    anchor.href = imageUrl;
    anchor.download = 'image.jpg'; // 设置文件名
    anchor.click();
  };
  
  return (
    <PhotoProvider
      toolbarRender={({ rotate, onRotate, onScale, scale, index }) => {
        return (
          <>
            {/* 旋转图片 */}
            <svg
              className="PhotoView-PhotoSlider__toolbarIcon"
              onClick={() => onRotate(rotate + 90)}
              width="44"
              height="44"
              fill="white"
              viewBox="0 0 768 768"
            >
              <path d="M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z" />
            </svg>
            {/* 放大图片 */}
            <svg
              className="PhotoView-PhotoSlider__toolbarIcon"
              width="44"
              height="44"
              viewBox="0 0 768 768"
              fill="white"
              onClick={() => onScale(scale + 0.2)}
            >
              <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z" />
            </svg>
            {/* 缩小图片 */}
            <svg
              className="PhotoView-PhotoSlider__toolbarIcon"
              width="44"
              height="44"
              viewBox="0 0 768 768"
              fill="white"
              onClick={() => onScale(scale - 0.2)}
            >
              <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v63h-321v-63z" />
            </svg>
            {/* 下载图片 */}
            <svg 
             className="PhotoView-PhotoSlider__toolbarIcon"
             viewBox="0 0 1024 1024" 
             width="44" 
             height="44"
             onClick={() => downloadImage(images[index].src)}
             >
              <path d="M512 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v494.336l183.168-183.168a42.666667 42.666667 0 1 1 60.330666 60.330667l-256 256a42.666667 42.666667 0 0 1-60.330666 0l-256-256a42.666667 42.666667 0 1 1 60.330666-60.330667L469.333333 707.669333V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" fill="#ffffff" p-id="10465">
              </path>
            </svg>
 
          </>
        );

      }}    
    >
      <div className="px-3 md:px-7 py-10 md:py-20 bg-white mt-12 md:mt-26">
          <a href="/media-kit" className="flex items-center text-base group mb-10 md:mb-15">
            <span className="icon-arrow-right text-base1 group-hover:item:w-6 md:hidden text-black mr-2.5 rotate-180 cursor-pointer"></span>
          </a>
          <h1 className="font-bold text-3xl md:text-5xl mb-6 md:mb-20 uppercase">[2021 年 12 月] ION Mobility 首款电动摩托车亮相</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  auto-rows-auto">
            {images.map((image, index) => (
              <PhotoView key={index} src={image.src}>
                <div className={`bg-cover bg-no-repeat cursor-pointer group ${image.tall ? 'row-span-2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img src={image.src} alt="" className="group-hover:scale-105 transition-all duration-300" loading="lazy" />
                    <span className="absolute top-0 left-0 h-full w-full block z-30"></span>
                    <span className="group-hover:opacity-40 opacity-0 absolute top-0 left-0 h-full w-full block bg-black transition-all duration-300 z-40"></span>
                  </div>
                </div>
              </PhotoView>
            ))}

          </div> 
      </div>
    </PhotoProvider> 
  );
}

export default Picture_column;
