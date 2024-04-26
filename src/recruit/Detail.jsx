import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'typeface-oxanium';
import Frame1 from '../assets/Frame1.jpg';


function Detail() {
    useEffect(() => {
        // 在组件挂载和更新时滚动到页面顶部
        window.scrollTo(0, 0);
      }, []);
      
  return (
    <div className="bg-white py-[40px] md:py-[80px] mt-[50px] md:mt-[104px]" style={{ fontFamily: 'Oxanium'}}>
        <div className="px-3 md:px-20">
            <h1 className="font-semibold text-3xl md:text-4xl mb-[20px] md:mb-[40px] uppercase text-[#111111]">ION Mobility 在 IMOS 2022 上推出 M1-S 电动摩托车</h1>
            <p className="text-base2 font-medium mb-[20px] md:mb-[40px] text-[#111111]">M1-S在印度尼西亚最大的摩托车贸易展上首次亮相并开始预订</p>
            <div className="text-xs font-normal text-[#838383] mb-[20px] md:mb-[40px]">2022 年 11 月 2 日星期三</div>

        </div>
        <div className="mb-[20px] md:mb-[40px] px-2">
            <span style={{
                        backgroundImage: `url(${Frame1})`,                     
                        backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', display: 'block'
                        }}>
                <span style={{ content: '&quot;&quot', display: 'block', paddingTop: '36.25%' }}>
                </span>
            </span>
        </div>
        <div className="px-3 md:px-20">
            <div className="ck-content prose text-base">
                <p style={{textAlign: 'justify'}}>ION Mobility 是一家智能电动摩托车公司，致力于设计和制造为可持续出行提供无缝用户体验的产品，该公司将于 11 月 2 日至 6 日在雅加达举行的 2022 年印度尼西亚摩托车展上首次亮相其首款电动智能摩托车 M1-S 会议中心。
                </p>
                <p style={{textAlign: 'justify'}}>“我们很高兴在 IMOS 2022 上展示 M1-S。印度尼西亚是我们的一个重要市场，我们一直在准备最终向印度尼西亚的客户展示这款自行车。”
                <strong>ION Mobility 创始人兼首席执行官 James Chan 说道。</strong> “我们创造了 M1-S，以满足日益增长的电动摩托车需求。 在 M1-S 中，我们将为印度尼西亚客户带来一款理想的创新电动摩托车，预计于 2023 年交付。”
                </p>
                <figure className="image image_resized" style={{width: '50%'}}>
                    <img src="https://storage.googleapis.com/ioncms-p-files/images/image_7187fbf291/image_7187fbf291.png" />
                </figure>
                <p style={{textAlign: 'justify'}}>
                    <strong>提升骑行体验</strong>
                </p>
                <p style={{textAlign: 'justify'}}>M1-S 的设计既具有未来感又实用，平衡了强度和时尚感，其独特、大胆的设计使其在印度尼西亚的城市街道上脱颖而出。 M1-S 拥有 5kW 电动机，峰值功率为 12.5kW，可为骑手提供从 0 到 50km/h 3.7 秒的快速加速，最高时速可达 105km/h。 M1-S 的客户最初可以从两种车载防风雨电池组配置（48Ah 或 60Ah）中进行选择，充电后的多日通勤续航里程为 120 公里至 150 公里。
                </p>
                <p style={{textAlign: 'justify'}}>“M1-S 是专为印度尼西亚打造的。 自 2020 年以来，我们一直在与印度尼西亚消费者交谈，并设计了 M1-S，通过提供快速的加速、大范围的行驶以及理想且实用的外形来提升他们的骑行体验。”
                <strong>ION Mobility 首席产品和设计官 Xianyi Wu 说道。</strong>
                </p>
                <p style={{textAlign: 'justify'}}>M1-S 专为日常通勤而设计，跨步式设计还配备 26 升座下储物空间，以及内置充电线，允许用户使用任何墙壁插座或 SPLU 充电器充电，为用户提供了灵活性 在家或外出时充电。
                </p>
                <p style={{textAlign: 'justify'}}>M1-S 配备超亮 7 英寸 LCD 显示屏，采用先进的多核处理器和传感器套件，内置无钥匙安全系统，并可通过 ION 移动应用程序与用户的智能手机智能配对。
                </p>
                <p>&nbsp;</p>
                <p style={{textAlign: 'justify'}}><strong>“你好印度尼西亚”活动</strong></p>
                <p style={{textAlign: 'justify'}}>为了纪念这一特殊时刻，并欢迎、接触和接触他们的印度尼西亚粉丝、客户和影响者，ION Mobility 还宣布了一项为期三期的为期数月的促销活动<sup>[1]</sup> 通过Instagram<sup>[2]</sup> 和抖音<sup>[3]</sup> 赠送价值超过 30 亿盾的奖品，包括免费的 M1-S 电动摩托车、现金奖励、旅行套餐、M1-S 购买折扣、在线媒体曝光和免费为 M1-S 充电的电力。</p>
                <p style={{textAlign: 'justify'}}>&nbsp;</p>
                <p style={{textAlign: 'justify'}}><strong>ION APEX 俱乐部</strong></p>
                <p style={{textAlign: 'justify'}}>除了 M1-S 及其“Hello Indonesia”活动之外，该公司还为其客户推出了 APEX Club 计划。 ION APEX 俱乐部是该公司的旗舰客户忠诚度计划，为客户提供专属福利和福利。 该计划不仅是 ION 对客户的品牌承诺、产品和售后承诺的体现，也是一个平台，可以帮助那些对从汽油摩托车转向电动摩托车仍犹豫不决的用户。 加入 ION APEX 俱乐部将为会员和客户提供额外的生活方式奖励和特权，例如优先交付 M1-S 订单、参加特别活动、促销和其他尚未公布的福利。 爱好者只需下载 ION 移动应用程序即可注册 ION APEX Club。</p>
                <p>&nbsp;</p>
                <p style={{textAlign: 'justify'}}><strong>移动出行向前发展</strong></p>
                <p style={{textAlign: 'justify'}}>“这只是我们在印度尼西亚扩大零售和售后市场业务的第一步。 我们的产品设计和开发渠道中有一系列令人兴奋的电动摩托车车型，我们迫不及待地想向大家展示。 我们还宣布与 PLN 就电动摩托车充电解决方案和服务建立合作伙伴关系。 请查看我们的社交媒体渠道和 ionmobility.com，了解我们的最新动态。” <strong>詹姆斯说道。</strong></p>
                <p style={{textAlign: 'justify'}}>&nbsp;</p>
                <p style={{textAlign: 'justify'}}>
                    <i><sup>[1]</sup> </i>
                    <a href="https://ionmobility.substack.com/p/hello-jakarta-nice-to-meet-you-indonesia" className='text-[#4aabfa] hover:text-[#09CECE]'><i>https://ionmobility.substack.com/p/hello-jakarta-nice-to-meet-you-indonesia/</i></a>
                    <br />
                    <i><sup>[2]</sup> </i>
                    <a href="https://www.instagram.com/ionmobility_id/" className='text-[#4aabfa] hover:text-[#09CECE]'><i>https://www.instagram.com/ionmobility_id/</i></a>
                    <i>&nbsp;</i>
                    <br />
                    <i><sup>[3]</sup> </i>
                    <a href="https://www.tiktok.com/@ionmobility_id/" className='text-[#4aabfa] hover:text-[#09CECE]'><i>https://www.tiktok.com/@ionmobility_id/</i></a>
                    <i>&nbsp;</i>
                    <span style={{textAlign: 'justify'}}>&nbsp;</span>
                </p>
                <p>&nbsp;</p>
                <p style={{textAlign: 'justify'}}><strong>关于 ION Mobility</strong></p>
                <p style={{textAlign: 'justify'}}>ION Mobility 是一家技术和汽车原始设备制造商，其使命是为每个人创造和提供价格实惠、理想且可持续的移动和能源解决方案。 我们致力于为客户创造出色的产品和无缝的用户体验。 我们的产品将先进的硬件和软件技术与以人为本的设计相结合，提供适合每个人使用的智能电动摩托车以及能源充电和存储解决方案。 我们的愿景是成为东南亚顶尖的科技公司，从 ION M1-S 开始，引领整个东南亚地区向低碳经济转型。</p>
                <p style={{textAlign: 'justify'}}>欲了解更多信息，请访问我们的网站<a href="http://www.ionmobility.com" className='text-[#4aabfa] hover:text-[#09CECE]'>www.ionmobility.com</a>&nbsp;</p>
                <p style={{textAlign: 'justify'}}><u>媒体联系</u></p>
                <p style={{textAlign: 'justify'}}>创始人兼首席执行官詹姆斯·陈 (James Chan)<a href="mailto:james@ionmobility.com" className='text-[#4aabfa] hover:text-[#09CECE]'>james@ionmobility.com</a>&nbsp;</p>
            </div>

        </div>
    </div>
  )
}

export default Detail