import React from 'react';
import Explore from '../assets/explore_careers.webp';
import News from '../assets/news.webp';
import { Link } from 'react-router-dom';
import 'typeface-oxanium';

function Synopsis() {
  return (
    <div className="bg-black px-3 md:pb-[100px] relative" style={{ fontFamily: 'Oxanium'}}> {/* Added relative class */}
      <div className="md:flex md:gap-[40px] md:max-w-[864px] md:justify-center md:mx-auto">
        <Link to={`/employment?Title=recruit&`} className="w-full md:grid md:content-between z-10">
          <img
            alt="About Us"
            src={Explore}
            width="2974"
            height="2974"
            decoding="async"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
          <h2 className="font-semibold text-xxl md:text-4xl text-white uppercase my-[24px]">
            探索 ION Mobility 的职业生涯
          </h2>

          <div className="flex-none flex items-center text-base leading-10 uppercase 2xs:max-md:mx-[auto] group">
            <label className="text-white group-hover:text-[#65E8E8] mt-[3px]">
              职业
              <svg className="text-[#65E8E8] ml-2 mt-2 opacity-0 absolute group-hover:opacity-100 transition-opacity duration-300 hidden lg:inline-block" viewBox="0 0 1024 1024" width="22" height="22" fill="#65E8E8">
                <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z"></path>
            </svg>
            </label>
            <span className="icon-arrow-right text-base1 group-hover/item:w-[24px] md:text-[transparent] text-white ml-[10px] group-hover:text-[#65E8E8]">
            </span>
          </div>
        </Link>

=
        <Link to={`/NewsPage?Title=newsPage`} className="w-full xs:max-md:mt-[40px] md:grid md:content-between"> {/* Added z-10 class */}
          <img
            alt="About Us"
            src={News}
            width="2974"
            height="2974"
            decoding="async"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
          <h2 className="font-semibold text-xxl md:text-4xl text-white uppercase my-[24px]">ION 新闻</h2>
          <div className="flex-none flex items-center text-base leading-10 uppercase 2xs:max-md:mx-[auto] group">
            <label className="text-white group-hover:text-[#65E8E8] mt-[3px]">编辑部
            <svg className="text-[#65E8E8] ml-2 mt-2 opacity-0 absolute group-hover:opacity-100 transition-opacity duration-300 hidden lg:inline-block" viewBox="0 0 1024 1024" width="22" height="22" fill="#65E8E8">
                <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z"></path>
            </svg></label>
            <span className="icon-arrow-right text-base1 group-hover/item:w-[24px] md:text-[transparent] text-white ml-[10px] group-hover:text-[#65E8E8]"></span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Synopsis;
