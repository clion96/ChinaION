import React, { useEffect } from 'react';
import NEWSROOM from '../assets/NEWSROOM.png';
import { Link } from 'react-router-dom';
import Frame7 from '../assets/Frame7.png';
import Frame9 from '../assets/Frame9.webp';
import Frame10 from '../assets/Frame10.webp';
import Frame11 from '../assets/Frame11.webp';
import Frame12 from '../assets/Frame12.webp';
import Frame13 from '../assets/Frame13.webp';

function News() {
    useEffect(() => {
        // 在组件挂载和更新时滚动到页面顶部
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{ fontFamily: 'Oxanium' }}>
      <img src={NEWSROOM} alt="CAREERS" className='mt-16 w-full'/>
      <div className="px-3 md:px-7 -mt-7 bg-white  md:mt-[20px]">
        <div className="mt-[40px] sm:mt-[24px]">
            <div className="flex items-center justify-end">
                <label className="flex text-base uppercase group">
                    <Link to={`/media-kit`} className="text-[#111] hover:text-[#65E8E8]" >媒体工具包
                        <svg className="text-[#65E8E8] mt-0 opacity-0 absolute group-hover:opacity-100 transition-opacity duration-300 hidden lg:inline-block" viewBox="0 0 1024 1024" width="22" height="22" fill="#65E8E8">
                        <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z"></path>
                        </svg>
                    </Link>
                    <span className="icon-arrow-right text-base1 group-hover/item:w-[24px] md:hidden text-[#111] ml-[10px]"></span>
                </label>
            </div>

            <div className='mt-5' style={{height: 'auto', overflow: 'auto'}}>
                <div className="grid grid-cols-6 gap-[20px] sm:gap-[54px]">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Link className="group" to={`/ION-Mobility-signs-MoU-with-PLN-on-EV-Motorcycle-Charging-Solutions-and-Servicesg`}>
                            <div className="relative overflow-hidden">
                                <span className="pt-[64%] block"></span>
                                <img
                                    alt="article-thumbnail"
                                    sizes="100vw"
                                    src={Frame7}
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover grayscale-0 transition-transform duration-300 transform scale-100 hover:scale-105"
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        color: 'transparent'
                                    }}
                                />
                            </div>
                            <div className="mt-[24px] text-xs text-gray-500">2022 年 11 月 2 日星期三</div>
                            <div className="mt-[16px] text-base-1 md:text-xl font-medium text-black group-hover:underline">
                                ION Mobility 与 PLN 就电动摩托车充电解决方案和服务签署谅解备忘录
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Link className="group" to={`/ION-Mobility-Introduces-M1-S-Electric-Motorcycle-at-IMOS-2022`}>
                            <div className="relative overflow-hidden">
                                <span className="pt-[64%] block"></span>
                                <img
                                    alt="article-thumbnail"
                                    sizes="100vw"
                                    src={Frame9}
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover grayscale-0 transition-transform duration-300 transform scale-100 hover:scale-105"
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        color: 'transparent'
                                    }}
                                />
                            </div>
                            <div className="mt-[24px] text-xs text-gray-500">2022 年 11 月 2 日星期三</div>
                            <div className="mt-[16px] text-base-1 md:text-xl font-medium text-black group-hover:underline">
                            ION Mobility 在 IMOS 2022 上推出 M1-S 电动摩托车
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Link className="group" to={`/ION-Mobility's-First-Electric-Motorbike-to-Hit-the-Roads-in-Indonesia-Next-Year`}>
                            <div className="relative overflow-hidden">
                                <span className="pt-[64%] block"></span>
                                <img
                                    alt="article-thumbnail"
                                    sizes="100vw"
                                    src={Frame10}
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover grayscale-0 transition-transform duration-300 transform scale-100 hover:scale-105"
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        color: 'transparent'
                                    }}
                                />
                            </div>
                            <div className="mt-[24px] text-xs text-gray-500">2021 年 12 月 2 日，星期四</div>
                            <div className="mt-[16px] text-base-1 md:text-xl font-medium text-black group-hover:underline">
                            ION Mobility 首款电动摩托车将于明年在印度尼西亚上路
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Link className="group" to={`/ION-Mobility-completes-US$6.8-million-Seed-Round`}>
                            <div className="relative overflow-hidden">
                                <span className="pt-[64%] block"></span>
                                <img
                                    alt="article-thumbnail"
                                    sizes="100vw"
                                    src={Frame11}
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover grayscale-0 transition-transform duration-300 transform scale-100 hover:scale-105"
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        color: 'transparent'
                                    }}
                                />
                            </div>
                            <div className="mt-[24px] text-xs text-gray-500">2021 年 10 月 14 日星期四</div>
                            <div className="mt-[16px] text-base-1 md:text-xl font-medium text-black group-hover:underline">
                            ION Mobility 在智能电动摩托车推出前完成 680 万美元种子轮融资
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Link className="group" to={`/ION-Mobility-Announces-Changes-to-Senior-Leadership`}>
                            <div className="relative overflow-hidden">
                                <span className="pt-[64%] block"></span>
                                <img
                                    alt="article-thumbnail"
                                    sizes="100vw"
                                    src={Frame12}
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover grayscale-0 transition-transform duration-300 transform scale-100 hover:scale-105"
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        color: 'transparent'
                                    }}
                                />
                            </div>
                            <div className="mt-[24px] text-xs text-gray-500">2021 年 7 月 12 日星期一</div>
                            <div className="mt-[16px] text-base-1 md:text-xl font-medium text-black group-hover:underline">
                            ION Mobility 宣布高层领导层变动
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Link className="group" to={`/ION-Mobility-Raises-US$3.3-Million-Seed-Round`}>
                            <div className="relative overflow-hidden">
                                <span className="pt-[64%] block"></span>
                                <img
                                    alt="article-thumbnail"
                                    sizes="100vw"
                                    src={Frame13}
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover grayscale-0 transition-transform duration-300 transform scale-100 hover:scale-105"
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        color: 'transparent'
                                    }}
                                />
                            </div>
                            <div className="mt-[24px] text-xs text-gray-500">2020 年 10 月 16 日星期五</div>
                            <div className="mt-[16px] text-base-1 md:text-xl font-medium text-black group-hover:underline">
                                ION Mobility 筹集 330 万美元种子轮资金推出智能电动摩托车
                            </div>
                        </Link>
                    </div>
                   
                    <div />
            </div>
            </div>
        
        </div>
      </div>
      
      
      
    </div>
  );
}

export default News;
