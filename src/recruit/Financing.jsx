import React, { useEffect } from 'react';
import Frame6 from '../assets/Frame6.jpg';
import 'typeface-oxanium';

function Financing() {
    useEffect(() => {
        // 在组件挂载和更新时滚动到页面顶部
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="bg-white py-[40px] md:py-[80px] mt-[50px] md:mt-[104px]" style={{ fontFamily: 'Oxanium'}}>
        <div className="px-3 md:px-20">
            <h1 className="font-semibold text-3xl md:text-5xl mb-[20px] md:mb-[40px] uppercase text-[#111111]">ION Mobility 完成 1870 万美元 A 轮融资
            </h1>
            <p className="text-base2 font-medium mb-[20px] md:mb-[40px] text-[#111111]">引入 TVS Motor Company 作为战略投资者，以获得生态系统支持和共同发展机会
            </p>
            <div className="text-xs font-normal text-[#838383] mb-[20px] md:mb-[40px]">2023 年 2 月 2 日，星期四
            </div>
        </div>
        
        <div className="mb-[20px] md:mb-[40px] px-1">
            <span style={{
                        backgroundImage: `url(${Frame6})`,                     
                        backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', display: 'block'
                        }}>
                <span style={{ content: '&quot;&quot', display: 'block', paddingTop: '36.25%' }}>

                </span>
            </span>
        </div>
        <div className="px-3 md:px-20">
            <div className="ck-content prose text-base">
                <p className='mt-5' style={{textAlign:'justify'}}>ION Mobility (ION) 今天宣布在 A 轮融资中获得 1870 万美元的新投资。 此外，公司还带来 
                    <a href="https://www.tvsmotor.com/" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#3390dce0]'>TVS电机公司</a> 
                    通过 TVS Motor 的新加坡子公司 TVS Motor（新加坡）作为其战略投资者。 作为该投资协议的一部分，TVS Motor 将为 ION 提供必要的生态系统支持，以在新加坡和印度尼西亚的电动两轮车市场取得成功。
                </p>
                <figure style={{width: '40%',margin:' 0 auto', paddingTop: '20px'}}>
                    <img src="https://storage.googleapis.com/ioncms-p-files/images/3d5660b7_8c51_4826_ab86_1a5c90cfa72d_1280x854_18075c944a/3d5660b7_8c51_4826_ab86_1a5c90cfa72d_1280x854_18075c944a.jpg" />

                </figure>
                <p className='mt-5' style={{textAlign:'justify'}}>ION 最新的融资以及与 TVS Motor 的合作是为了支持其从印度尼西亚开始打造东南亚领先的电动汽车解决方案公司的愿景。 其他投资者包括 
                    <a href="https://acv.vc/about-us/people/acv-malaysia/" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#40bcffee]'>马来西亚 AC 创投</a>, 
                    <a href="https://www.tatlerasia.com/people/michael-joseph-sampoerna" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#40bcffee]'>迈克尔·桑波纳</a> 和 ION 首席制造官 Ng Ho Sen 以及现有投资者，例如
                    <a href="https://tnbaura.vc/" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#40bcffee]'>国能光环</a>,
                    <a href="https://www.questventures.com/" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#40bcffee]'>探索创投</a>, 
                    <a href="https://www.monkshill.com/" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#40bcffee]'>蒙克山风险投资公司</a>,
                    <a href="https://www.villageglobal.vc/" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#40bcffee]'>环球村</a>, 
                    <a href="https://www.gdpventure.com/" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#40bcffee]'>GDP风险投资</a> 和 
                    <a href="https://www.enterprisesg.gov.sg/financial-assistance/investments/investments/seeds-capital/overview" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#40bcffee]'>种子资本</a> 
                    也参加了本轮比赛。
                </p>
                <p className='mt-5' style={{textAlign:'justify'}}>
                    <strong>创始人兼首席执行官 James Chan 表示，</strong> “我很高兴我和我的团队通过我们的融资轮和合作伙伴关系从 TVS Motor 获得了信任票。 我们很高兴能够利用 TVS Motor 在两轮车领域数十年的全球专业知识来加速我们的“Mobius”M1-S 生产准备工作以及其他车型的设计和开发。 我们期待共同引领电动和可持续两轮车的未来。”
                </p>
                <p className='mt-5' style={{textAlign:'justify'}}>新一轮融资使 ION 自 2020 年以来筹集的总资金超过 2550 万美元。该公司将把这笔资金投资到印度尼西亚，以发展其当地团队、运营和能力。 这包括其在印度尼西亚的销售和营销存在、本地供应链网络、生产工具和制造能力，以实现至少 50% 的本地含量<sup>[1]</sup>.</p>
                <p className='mt-5' style={{textAlign:'justify'}}><strong>值此之际发表讲话时， </strong>
                    <a href="https://www.tvsmotor.com/about-us/board-of-directors/sudarshan-venu" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#3390dce0]'><strong>Mr. Sudarshan Venu</strong></a>
                    <strong>TVS 电机公司董事总经理表示，</strong> “TVS Motor 致力于为全球市场的消费者开发令人兴奋的产品。 我们很高兴与 ION Mobility 合作，这是一家全栈电动汽车公司，在新加坡拥有强大的工程师团队和技术基础，推动该地区优质电动两轮车的增长。 我们有着共同的愿景，并渴望作为战略投资者来支持他们。”
                </p>
                <figure style={{width: '40%',margin:' 0 auto', paddingTop: '20px'}}>
                    <img src="https://storage.googleapis.com/ioncms-p-files/images/cc2a7624_e018_44c2_b817_95251b990960_1280x960_74577dc4b5/cc2a7624_e018_44c2_b817_95251b990960_1280x960_74577dc4b5.jpg" />
                </figure>
                <p style={{textAlign:'justify'}} className='mt-5'>该公告是在 ION Mobility 发布 
                    <a href="https://ionmobility.substack.com/p/hello-jakarta-nice-to-meet-you-indonesia" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#3390dce0]'>推出 M1-S 电动滑板车</a> 2022 年 11 月在雅加达，该公司也见证了
                    <a href="https://ionmobility.com/newsroom/ION-Mobility-signs-MoU-with-PLN-on-EV-Motorcycle-Charging-Solutions-and-Services" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#3390dce0]'>与印度尼西亚国家电网运营商 PT Perusahaan Perusahaan Perusahaan PLN (PLN) 签署广泛的谅解备忘录 (MOU)</a> 除了两轮车快速充电技术研究以及用户推广和教育之外，还扩大 PLN 的充电网络。 该谅解备忘录由印度尼西亚工业部部长 Agus Gumiwang Kartasasmita 在 2022 年印度尼西亚摩托车展上主持，新加坡驻印度尼西亚大使郭福成先生也出席了会议。
                </p>
                <p>&nbsp;</p>
                <p style={{textAlign:'justify'}}><i><sup>[1]</sup> 国产元件级，简称TKDN</i></p>
                <p style={{textAlign:'justify'}}>&nbsp;</p>
                <hr />
                <p style={{textAlign:'justify'}}>&nbsp;</p>
                <p style={{textAlign:'justify'}}><strong>关于 ION Mobility</strong></p>
                <p style={{textAlign:'justify'}} className='mt-5'>ION Mobility 是一家技术和汽车原始设备制造商，其使命是为每个人创造和提供理想的可持续移动和能源解决方案。 我们致力于为客户创造出色的产品和无缝的用户体验。 我们的产品将先进的硬件和软件技术与以人为本的设计相结合，提供适合每个人使用的智能电动摩托车以及能源充电和存储解决方案。 我们的愿景是成为东南亚顶尖的科技公司，从 ION M1-S 开始，引领整个东南亚地区向低碳经济转型。 欲了解更多信息，请访问
                <a href="http://www.ionmobility.com" className='text-[#4aabfa] hover:text-[#3390dce0]'>www.ionmobility.com</a> 和
                <a href="https://ionmobility.substack.com/" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#3390dce0]'>ionmobility.substack.com</a></p>
                <p style={{textAlign:'justify'}} className='mt-5'><i>获取更多资讯，请联系： </i>
                <a href="mailto:hello@ionmobility.com" className='text-[#4aabfa] hover:text-[#3390dce0]'><i>hello@ionmobility.com</i></a><i>&nbsp;</i></p>
                <p style={{textAlign:'justify'}}>&nbsp;</p>
                <p style={{textAlign:'justify'}}><strong>关于TVS电机公司</strong></p>
                <p style={{textAlign:'justify'}} className='mt-5'>
                    <a href="https://en.wikipedia.org/wiki/TVS_Motor_Company" target="_blank" rel="noopener noreferrer" className='text-[#4aabfa] hover:text-[#3390dce0]'>TVS Motor Company</a> 是全球知名的两轮和三轮车制造商，在印度的霍苏尔、迈索尔和那拉加尔以及印度尼西亚的卡拉旺拥有四个最先进的制造工厂，通过可持续交通推动进步。 植根于我们 100 年来对客户的信任、价值、热情和精确性的传统，我们为通过创新和可持续的流程制造国际上理想的最高品质产品而感到自豪。 我们是唯一一家获得著名的戴明奖的两轮车公司。 我们的产品在 J.D. Power IQS 和 APEAL 调查中在各自类别中处于领先地位。 我们连续四年在J.D. Power客户服务满意度调查中排名第一。 我们的诺顿摩托车集团公司总部位于英国，是世界上最具情感的摩托车品牌之一。 我们在个人电动汽车领域的子公司瑞士电动汽车集团 (SEMG) 和 EGO Movement 在瑞士电动自行车市场处于领先地位。 TVS Motor Company 致力于在我们开展业务的 80 个国家/地区提供最卓越的客户体验。 欲了解更多信息，请访问
                    <a href="http://www.tvsmotor.com" className='text-[#4aabfa] hover:text-[#3390dce0]'>www.tvsmotor.com</a></p>
                <p style={{textAlign:'justify'}} className='mt-5'>
                    <i>获取更多资讯，请联系：</i></p>
                    <p>
                        <li style={{textAlign:'justify'}} className='mt-5'>
                            <i>KS Harini – </i>
                            <a href="mailto:ks.harini@tvsmotor.com"><i>ks.harini@tvsmotor.com</i></a></li>
                            <li style={{textAlign:'justify'}}>
                                <i>Nikita Verma – </i>
                                <a href="mailto:nikita.verma@tvsmotor.com" className='text-[#4aabfa] hover:text-[#3390dce0]'>
                                    <i>nikita.verma@tvsmotor.com</i></a>
                                    <i>&nbsp;</i>
                            </li>
                     </p>
            </div>

        </div>

    </div>
  )
}

export default Financing