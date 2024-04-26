import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/news_photo1.png';
import img2 from '../assets/news_photo2.png';
import img3 from '../assets/news_photo3.png';
import img4 from '../assets/news_photo4.png';
import defaultImage from '../assets/happy_new_year.webp';
import 'typeface-oxanium';
import { Link } from 'react-router-dom';

function SpotNews() {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagHover = (tag) => {
    setSelectedTag(tag);
  };

  const tagsData = [
    {
      date: '星期四, 二月 2 2023',
      title: 'ION Mobility 完成1870万美元的A轮融资',
      description: "TVS汽车公司作为战略投资者加入，为生态系统提供支持和共同发展机会",
      image: img1,
      link:'/ION-Mobility-closes-US18-7-m-in-Series-A-funding'
    },
    {
      date: '星期三, 十一月 2 2022',
      title: 'ION Mobility 在IMOS1上推出M2022-S电动摩托车',
      description: "M1-S 在印度尼西亚最大的摩托车贸易展上首次亮相并开始预订",
      image: img2,
      link:'/ION-Mobility-Introduces-M1-S-Electric-Motorcycle-at-IMOS-2022'
    },
    {
      date: '星期三, 十一月 2 2022',
      title: 'ION Mobility 与PLN签署关于电动汽车摩托车充电解决方案和服务的谅解备忘录',
      description: '旨在扩大 Stasiun Pengisian Listrik Umum （SPLU） 网络的合作伙伴关系',
      image: img3,
      link:'/ION-Mobility-signs-MoU-with-PLN-on-EV-Motorcycle-Charging-Solutions-and-Servicesg'
    },
    {
      date: '星期四, 十二月 2 2021',
      title: "ION Mobility的首款电动摩托车将于明年在印度尼西亚上路",
      description: '尽管面临大流行带来的挑战，新加坡初创公司今天提前推出了 ION Mobius',
      image: img4,
      link:"/ION-Mobility's-First-Electric-Motorbike-to-Hit-the-Roads-in-Indonesia-Next-Year"
    },
  ];

  return (
    <div className="p-4 md:p-20" style={{fontFamily: 'Oxanium'}}>
      <h2 className="text-xxl md:text-3xl mb-[0]">最新消息</h2>
      <div className="mt-[40px] md:flex md:gap-[30px] md:justify-between md:relative md:flex-initial">
        <div>
          {tagsData.map((tag, index) => (
            <div
              key={index}
              className={`py-[24px] first:pt-[0] last:pb-[0] border-b border-solid border-[#e8dede] last:border-[0] ${
                selectedTag === index ? 'selected' : 'not-selected'
              }`}
              onMouseEnter={() => handleTagHover(index)}
              onMouseLeave={() => handleTagHover(null)}
            >
              <Link className={`flex flex-1 justify-between gap-[16px] ${selectedTag === index ? 'selected-link' : ''}`} to={tag.link}>
                <div>
                  <div className={`text-xs md:text-base ${selectedTag === index ? 'text-gray-900' : 'text-gray-400'}`}>
                    {tag.date}
                  </div>
                  <div className={`text-base md:text-base font-medium ${selectedTag === index ? 'text-gray-900' : 'text-gray-900'} mt-[16px]`}>
                    <span className="highlight-text">{tag.title}</span> {/* 在移动端时，标题总是高亮显示 */}
                  </div>
                  <div className={`text-xs mt-[16px] ${selectedTag === index ? 'text-gray-900' : 'text-gray-400'} font-medium`}>
                    <span className="highlight-text">{tag.description}</span> {/* 在移动端时，描述总是高亮显示 */}
                  </div>
                </div>
                <div className="w-[155px] h-[145px] mobile-img"> 
                  <img src={tag.image} alt={`Thumbnail ${index + 1}`} className="object-cover w-full h-full highlight-image" /> {/* 在移动端时，图片总是高亮显示 */}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden md:block md:min-w-[150px] lg:min-w-[316px]">
          {selectedTag !== null ? (
            <img src={tagsData[selectedTag].image} alt={`Thumbnail ${selectedTag + 1}`} className="object-cover w-[400px] h-[530px]" />
          ) : (
            <img src={defaultImage} alt="Default image" className="object-cover w-[400px] h-[530px]" /> // 当没有标签被选中时，显示默认图片
          )}
        </div>
      </div>
    </div>
  );
}

export default SpotNews;
        