import React from 'react'
import Header from '../widgets/Header'
import HonePage from '../widgets/HonePage'
import Slideshow from '../widgets/Slideshow'
import SpotNews from '../widgets/SpotNews'
import Parameter from '../widgets/Parameter'

// 添加具有滚动卡扣类型和溢出属性的包装器div
// const wrapperStyle = {
//   scrollSnapType: 'y mandatory', // 启用垂直咬合
//   overflow: 'auto', // 启用滚动
//   height: '100vh', // 设置包装器的高度
// };

// // 为每个子div添加scroll-snap-align属性
// const snapStyle = {
//   scrollSnapAlign: 'start', // 捕捉到父元素的起始边缘
// };


function Index() {
  return (
    <div>
      <Header/>
      <main >
        <div  >
          <HonePage />
        </div>
        <div  >
          <Slideshow />
        </div>
        <div  >
          <SpotNews />
        </div>
        <div  >
          <Parameter />
        </div>       
      </main>
    </div>   
    
  )
}

export default Index
