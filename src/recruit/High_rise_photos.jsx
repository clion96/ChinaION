import React, { useEffect } from 'react';
import CEO from '../assets/James_Chan_CEO_and_Founder_ION_Mobility_fafc623956.webp';
import Chief_Product_and_Design_Officer from '../assets/Wu_Xianyi_Chief_Product_and_Design_Officer_ION_Mobility_ae8542e9e9.webp';

import 'typeface-oxanium';

function High_rise_photos() {
    useEffect(() => {
        // 在组件挂载和更新时滚动到页面顶部
        window.scrollTo(0, 0);
      }, []);
      return (

        <div className="px-3 md:px-7 py-[40px] md:py-[80px] bg-white mt-[50px] md:mt-[104px]">
            <a className="flex items-center text-base group mb-[40px] md:mb-[60px]" href="/media-kit">
                <span className="icon-arrow-right text-base1 group-hover/item:w-[24px] md:hidden text-[#111] mr-[10px] rotate-180 cursor-pointer"></span>
            </a>
            <h1 className="font-bold text-3xl md:text-5xl mb-[24px] md:mb-[80px] uppercase">Leadership Headshots</h1>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-3 mb-4">
                    <div className="relative overflow-hidden group">
                        <img
                            alt=""
                            src={CEO}
                            width="1334"
                            height="2000"
                            decoding="async"
                            data-nimg="1"
                            className="group-hover:scale-105 transition-all duration-300"
                            loading="lazy"
                            style={{ color: 'transparent' }}
                        />
                        <span className="absolute top-[0] left-[0] h-[100%] w-full block z-30"></span>
                        <span className="group-hover:opacity-40 opacity-0 absolute top-[0] left-[0] h-[100%] w-full block bg-black transition-all duration-300 z-40"></span>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-3 mb-4">
                <div className="relative overflow-hidden group">
                        <img
                            alt=""
                            src={Chief_Product_and_Design_Officer}
                            width="1334"
                            height="2000"
                            decoding="async"
                            data-nimg="1"
                            className="group-hover:scale-105 transition-all duration-300"
                            loading="lazy"
                            style={{ color: 'transparent' }}
                        />
                        <span className="absolute top-[0] left-[0] h-[100%] w-full block z-30"></span>
                        <span className="group-hover:opacity-40 opacity-0 absolute top-[0] left-[0] h-[100%] w-full block bg-black transition-all duration-300 z-40"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default High_rise_photos