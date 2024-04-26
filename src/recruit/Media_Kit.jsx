import React, { useEffect } from 'react';
import 'typeface-oxanium';
import { Link } from 'react-router-dom';
import Frame4 from '../assets/Frame4.jpg';
import Frame5 from '../assets/Frame5.jpg';

function Media_Kit() {
  useEffect(() => {
    // 在组件挂载和更新时滚动到页面顶部
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-3 md:px-7 py-[40px] md:py-[60px] bg-white mt-[50px] md:mt-[64px]" style={{ fontFamily: 'Oxanium' }}>
      <div className="md:flex md:justify-between md:mb-[80px] md:flex-row-reverse md:items-center">
        <label className="flex items-center justify-end text-base uppercase group" >
          <Link to={`/NewsPage`} className="text-[#111] mt-[3px] hover:text-[#65E8E8]">
            编辑部
            <svg className="text-[#65E8E8] mt-0 opacity-0 absolute group-hover:opacity-100 transition-opacity duration-300 hidden lg:inline-block" viewBox="0 0 1024 1024" width="22" height="22" fill="#65E8E8">
              <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z"></path>
            </svg>
          </Link>
          <span className="icon-arrow-right text-base1 group-hover/item:w-[24px] md:hidden text-[#111] ml-[10px]"></span>
        </label>

      </div>
      <div className="max-w-[1450px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[40px] gap-y-[40px]"> 
              <div className="group col-span-3 relative ">
                <div className="relative overflow-hidden md:-mt-16">
                  <div className="transform transition duration-300 absolute bg-cover bg-no-repeat top-[0] left-[0] w-full h-[100%] group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${Frame4})`,                     
                    backgroundPosition: 'center center'
                    }}>
                  

                  </div>
                  <span className="block pt-[120%] md:pt-[56.25%]"></span>
                  <div className="absolute top-6 right-6 text-white text-right">
                    <div className="mb-4">
                      <p className="text-xs mb-1 mt-[0]">Pictures</ p>
                      <p className="font-medium text-4xl">2</p>
                    </div>
                  </div>
                 
                </div>
                <h3 className="mt-4 text-xxl uppercase text-gray-900 mb-[0] lg:text-4xl font-semibold ">Leadership Headshots</h3>
                  <Link className="absolute w-full h-[100%] top-[0] left-[0]" to={`/media-kit/1`}></Link>
              </div>
              <div className="group col-span-3 md:col-span-2 lg:col-span-1 relative ">
                <div className="relative overflow-hidden">
                  <div className="transform transition duration-300 absolute bg-cover bg-no-repeat top-[0] left-[0] w-full h-[100%] group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${Frame5})`,                     
                    backgroundPosition: 'center center'
                    }}>

                  </div>
                  <span className="block pt-[120%] md:pt-[100%]"></span>
                  <div className="absolute top-6 right-6 text-white text-right">
                      <div className="mb-4">
                        <p className="text-xs mb-1 mt-[0]">Pictures</p>
                        <p className="font-medium text-4xl">10</p>
                      </div>

                  </div>
                  
                </div>
                <h3 className="mt-4 text-3xl uppercase text-gray-900 mb-[0] font-medium">[2021 年 12 月] ION Mobility 首款电动摩托车亮相</h3>
                  <Link className="absolute w-full h-[100%] top-[0] left-[0]" to={`/media-kit/2`}></Link>
              </div>
          </div>
      </div>

    </div>
  )
}

export default Media_Kit