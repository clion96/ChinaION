import React, { useEffect } from 'react';
import About from '../assets/About.png';
import 'typeface-oxanium';
import { Link } from 'react-router-dom';



function JobInfo() {
  useEffect(() => {
    // 在组件挂载和更新时滚动到页面顶部
    window.scrollTo(0, 0);
  }, []);

  return (
   
    <div style={{ fontFamily: 'Oxanium' }}>
      <img src={About} alt="CAREERS" className='mt-16 w-full'/>
      <div className="flex justify-center h-full">
        <div className="w-[760px] bg-white p-20">
          <div className="mb-4">           
            <h1 className='text-[#09CECE] text-xl'>加入团队</h1>
            <p className="mt-2 text-gray-600">
                我们在 ION 的多元化团队超越了我们的重量级。我们相信，每个人都有能力为我们的产品寻找创新解决方案做出重大贡献，并为我们的环境带来对这个世界的影响。我们正在寻找非常规的、敬业的人才，他们接受重大挑战，打造卓越的产品和服务，并在我们应对气候变化的斗争中发挥重要作用。 
            </p>
          </div>
          <div className="flex mb-4 my-20">
            <h1 className='text-xl'>R&D</h1>
          </div>
          <div>
            <span style={{ fontSize: '12px' }}>
              软件工程师
            </span>
            <div className="flex justify-between">
              <p className='text-[#979797]' style={{ fontSize: '12px' }}>
                新加坡
              </p>
              <Link to={`/job_information?jobTitle=软件工程师&location=新加坡`} className="text-white rounded">             
                <svg className="text-[#65E8E8]" viewBox="0 0 1024 1024" width="18" height="15" fill="#65E8E8">
                  <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z">  
                  </path>
                </svg>
              </Link>
            </div>
     
            <div className="flex-1 border-b border-gray-300 my-2"></div>
          </div>
          <div>
            <span className='' style={{ fontSize: '12px' }}>
              UI设计师
            </span>
            <div className="flex justify-between">
              <p className='text-[#979797]' style={{ fontSize: '12px' }}>
                深圳龙华
              </p> 
              <Link to={`/job_information?jobTitle=UI设计师&location=深圳龙华`} className="text-white rounded">             
                  <svg className="text-[#65E8E8]" viewBox="0 0 1024 1024" width="18" height="15" fill="#65E8E8">
                    <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z">  
                    </path>
                  </svg>
              </Link>     
            </div>
                  
            <div className="flex-1 border-b border-gray-300 my-2"></div>
          </div>

          <div className="flex items-center mb-4 my-20">
            <h1 className='text-xl'>市场营销</h1>
          </div>
          <div>
            <span className='' style={{ fontSize: '12px' }}>
              嵌入式测试工程师
            </span>
            <div className="flex justify-between">
              <p className='text-[#979797]' style={{ fontSize: '12px' }}>
                印度尼西亚     
              </p>
              <Link to={`/job_information?jobTitle=嵌入式测试工程师&location=印度尼西亚`} className="text-white rounded">             
                    <svg className="text-[#65E8E8]" viewBox="0 0 1024 1024" width="18" height="15" fill="#65E8E8">
                      <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z">  
                      </path>
                    </svg>
              </Link>      
            </div>
                   
            <div className="flex-1 border-b border-gray-300 my-2"></div>
          </div>
          <div>
            <span className='' style={{ fontSize: '12px' }}>
              嵌入式开发工程师
            </span>
            <div className="flex justify-between">
              <p className='text-[#979797]' style={{ fontSize: '12px' }}>
                新加坡
              </p> 
              <Link to={`/job_information?jobTitle=嵌入式开发工程师&location=新加坡`} className="text-white rounded">             
                    <svg className="text-[#65E8E8]" viewBox="0 0 1024 1024" width="18" height="15" fill="#65E8E8">
                      <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z">  
                      </path>
                    </svg>
              </Link>      
            </div>
                     
            <div className="flex-1 border-b border-gray-300 my-2"></div>
          </div>
 
          <div>
            <span className='' style={{ fontSize: '12px' }}>
              营销主管
            </span>
            <div className="flex justify-between">
              <p className='text-[#979797]' style={{ fontSize: '12px' }}>
                新加坡
              </p>
              <Link to={`/job_information?jobTitle=营销主管&location=新加坡`} className="text-white rounded">             
                    <svg className="text-[#65E8E8]" viewBox="0 0 1024 1024" width="18" height="15" fill="#65E8E8">
                      <path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z">  
                      </path>
                    </svg>
              </Link>      
            </div>
                      
            <div className="flex-1 border-b border-gray-300 my-2"></div>
          </div>

          <div className="flex-1 items-center mb-4 my-20">
            <h1 className='text-xxl font-bold '>没有看到合适的位置？</h1>
            <p className='text-[#010101]' style={{ fontSize: '12px' }}>
            我们一直在寻找有动力、有才华的人加入我们的团队。如果您没有找到适合您经验的职位，您仍然可以将您的简历发送给我们{' '}
          <a href="mailto:careers@ionmobility.com" style={{ textDecoration: 'underline', color: '#09CECE' }}>
            careers@ionmobility.com
          </a>
        </p>
          </div>
       </div>
        
      </div>
      
    </div> 
  )
}

export default JobInfo
