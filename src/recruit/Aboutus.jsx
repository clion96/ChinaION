import React, { useEffect, useState } from 'react'
import About from '../assets/about-min.webp'
import About_mb from '../assets/mb.webp'
import 'typeface-oxanium'

function ABoutUs() {
    // 定义一个状态变量，用于存储滚动位置
    const [scrollPosition, setScrollPosition] = useState(0)

    // 定义一个函数，用于获取滚动位置和图片的偏移量
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }
  
    // 使用useEffect钩子，监听滚动事件，并在组件卸载时移除监听器
    useEffect(() => {
      window.scrollTo(0, 0);
      window.addEventListener("scroll", handleScroll, { passive: true })
 
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])
  
  
    // 定义一个函数，用于计算图片的透明度，根据滚动位置的百分比，从1降低到0.5
    const getOpacity = () => {
      const percentage = scrollPosition / window.innerHeight
      return 1 - percentage * 0.5
    };
  
    return (
      <div className="bg-[#000000]" style={{ fontFamily: "Oxanium" }}>
        <section className="relative overflow-hidden bg-black">
          <div className="imgWrap w-full overflow-hidden bg-black hidden md:contents">
            <div
              className="pin-spacer"
              style={{
                order: 0,
                placeSelf: "auto",
                gridArea: "auto",
                zIndex: "auto",
                float: "none",
                flexShrink: 1,
                display: "block",
                margin: "0px",
                inset: "auto",
                position: "relative",
                flexBasis: "auto",
                overflow: "visible",
                boxSizing: "border-box",
                width: "1273px",
                height: "1828px",
                padding: "0px 0px 1000px",
              }}
            >
              <img
                alt="About Us"
                src={About}
                width="2880"
                height="1800"
                decoding="async"
                data-nimg="1"
                loading="lazy"
                style={{
                    color: "transparent",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    // 使用scroll-smooth类，实现平滑滚动
                    // 使用transition-all类，实现过渡效果
                    // 使用getScale函数，动态计算缩放比例
                    // 使用getOpacity函数，动态计算透明度
                    // 使用scrollOffset状态变量，实现图片的垂直移动
                    opacity: getOpacity(),
                    left: "0px",
                    top: "0px",
                    margin: "0px",
                    width: "100vw", // 修改为100vw
                    height: "100vh", // 修改为100vh
                    padding: "0px",
                    boxSizing: "border-box",
                    position: "fixed",
                    className: "scroll-smooth transition-all",
                }}
                />

            </div>
            </div>
        <div className="imgWrap w-full overflow-hidden bg-black md:hidden">
          <img
            alt="About Us"
            src={About_mb}
            width="750"
            height="1286"
            decoding="async"
            data-nimg="1"
            loading="lazy"
            style={{
              color: "transparent",
              translate: "none",
              rotate: "none",
              scale: "none",

              className: "scroll-smooth transition-all",
            }}
          />
        </div>
            <div className="wrap xs:max-md:px-3 p-5 md:absolute md:bottom-[450px] xs:max-sm:-mt-[300px] sm:max-md:-mt-[600px] md: w-full">
                <div className="-mt-64 md:max-w-[864px] md:mx-[auto]">  
                    <h2 className="text-4xl font-semibold text-white uppercase mb-[40px] md:mb-[160px]">关于我们</h2>
                    <h3 className=" text-lg md:text-xxl font-medium text-white uppercase">可持续交通的未来</h3>
                    <div className="content mt-[40px] text-white">
                        <div>
                            <p className="text-2lg md:text-[26px] md:leading-[32px] font-medium">我们是一个由企业家、设计师和工程师组成的充满活力的团队，他们致力于将先进技术和以人为本的设计相结合，引领向电动摩托车的过渡，以实现更清洁、更环保的出行方式。</p>
                            <br />
                            <p className="text-2lg md:text-[26px] md:leading-[32px] font-medium">我们正在通过开发理想的产品作为城市用户的清洁替代品，以减轻城市空气污染，并引领整个东南亚地区不可避免的向电动汽车的过渡，从而推动可能的前沿。</p>  <br />
                            <p className="text-2lg md:text-[26px] md:leading-[32px] font-medium">我们的团队不断突破创新和设计的界限，以创造不影响质量或风格的电动骑行体验。</p>  <br />
                            <p className="text-2lg md:text-[26px] md:leading-[32px] font-medium">加入电动革命，今天就和我们一起体验移动出行的未来。 <br /><br />#铅充电</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
       
  )
}

export default ABoutUs