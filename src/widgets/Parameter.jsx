import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ion_logo_white.svg';

import 'typeface-oxanium';

function Parameter() {
  return (
    <div className='relative font-Oxanium flex flex-col'>
      <footer className="bg-[#030303] body-font flex-grow" style={{fontSize:'18px'}}>
        <div className="container px-5 -mb-20 mt-20 md:-mb-20 mx-auto flex md:flex-row flex-col">
          <div className="md:-ml-5 -my-2">
            <Link to="/" className="flex items-center justify-center">
              <img src={Logo}  className="h-12 md:h-14 w-auto" alt="Logo"/>
            </Link>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-72 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-100 tracking-widest text-1xl mb-5">探索</h2>
              <nav className="list-none mt-5">
                <div className="my-5">
                  <ListItemLink to="/?Title=homepage" text="首页"/>
                </div>
                <div className="my-5">
                  <ListItemLink to="/AboutUs?Title=AboutUs&" text="关于我们"/>
                </div>
                <div className="my-5">
                  <ListItemLink to="/NewsPage?Title=newsPage" text="新闻"/>
                </div>
                <div className="my-5">
                  <ListItemLink to="/employment?Title=recruit&" text="招聘"/>
                </div>
                <div className="my-5">
                  <ListItemLink to="/contact-us?Title=Contact-us&" text="联系我们"/>
                </div>
              </nav>

            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-100 tracking-widest text-1xl mb-3">媒体</h2>
              <nav className="list-none mt-5">
                <div className="my-5">
                  <ListItemLink to="/media-kit" text="媒体资料包"/>
                </div> 
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-100 tracking-widest text-1xl mb-5">法律</h2>
              <nav className="list-none mt-5" style={{ whiteSpace: 'nowrap' }}>
                <ListItemLink to="/terms-and-conditions" text="服务条款与数据保护条款"/>
              </nav>

            </div>
          </div>
        </div>
        <div className="text-[#090909] mt-72">
          <div className="px-3 md:px-[115px]">
            <div className="border-b border-solid border-[#373737] "></div>
          </div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
            <p className="text-gray-100 text-sm text-center sm:text-left md:mt-5">Copyright © 2023 ION Mobility. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ListItemLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-gray-100 hover:text-[#65E8E8] group relative">
      {text}
      <svg className="text-[#65E8E8] ml-2  my-[2px] opacity-0 absolute group-hover:opacity-100 transition-opacity duration-300 hidden lg:inline-block" viewBox="0 0 1024 1024" width="22" height="22" fill="#65E8E8">
        <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z"></path>
      </svg>
    </Link>
  </li>
);

export default Parameter;
