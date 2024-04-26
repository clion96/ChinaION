import React, { useEffect, useState  } from 'react';
import 'typeface-oxanium';

function Terms() {

    const [isTermsOfService, setIsTermsOfService] = useState(true);
    const handleClick = () => {
        setIsTermsOfService(!isTermsOfService);
    };
    useEffect(() => {
        // 在组件挂载和更新时滚动到页面顶部
        window.scrollTo(0, 0);
      }, []);
  return (
     <div className="bg-white lg:pt-[200px] pt-[100px]" style={{ fontFamily: 'Oxanium' }}>      
        <div className="px-4 max-w-[1024px] mx-auto">
            <div className="md:pb-8 pb-6">
                <div className="text-[#111]">
                    <div className="lg:flex items-center md:mb-[27px]"> 
                        <p className="uppercase ml-auto cursor-pointer flex justify-end lg:justify-start items-center lg:order-1 lg:mb-0 mb-[48px] md:mb-[0] font-medium text-base hover:text-[#65E8E8]" onClick={handleClick}>
                                {isTermsOfService ? "数据保护条款" : "服务条款"}
                            <span className="icon-arrow-right-solid ml-2 lg:hidden"></span>
                        </p>

                        <h1 className="uppercase text-3xl md:text-4xl text-[#111] font-semibold mb-[27px] md:mb-[0]">
                            {isTermsOfService ? "服务条款" : "数据保护条款"}
                        </h1>

                    </div>
                    {isTermsOfService ? (
                        <div>
                            <p className="text-xs">最后更新日期：2023 年 2 月 1 日，请在使用我们的服务之前仔细阅读这些条款和条件。</p>
                            <div className="term-content">
                                <div className="item mt-20">
                                    <h4 className="uppercase mb-5 text-2xl">解释</h4>
                                    <p>首字母大写的单词具有在以下条件下定义的含义。 下列定义无论以单数还是复数形式出现，均具有相同的含义。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item  mb-5 my-5">
                                    <h4 className="uppercase mb-5 text-2xl">定义</h4>

                                    <p className='mb-5'> 就这些条款和条件而言：</p>

                                    <p className='mb-5'><strong>附属机构</strong> 是指控制一方、受一方控制或与一方共同控制的实体，其中“控制”是指拥有 50% 或以上有权投票选举董事或其他管理机构的股份、股权或其他证券。</p>

                                    <p className='mb-5'><strong>国家</strong> 指的是：新加坡</p>

                                    <p className='mb-5'><strong>公司</strong> （在本协议中称为“公司”、“我们”、“我们”或“我们的”）是指 ION MOBILITY PTE。 有限公司 (201932713K)，亚逸拉惹弯第 67 座，#01-05，新加坡 139950。</p>

                                    <p className='mb-5'><strong>设备</strong> 指可以访问服务的任何设备，例如计算机、手机或数字平板电脑。</p>

                                    <p className='mb-5'><strong>服务</strong> 指本网站。</p>

                                    <p className='mb-5'><strong>条款和条件</strong> （也称为“条款”）是指构成您与公司之间有关使用服务的完整协议的这些条款和条件。</p>

                                    <p className='mb-5'><strong>第三方社交媒体服务</strong> 指第三方提供的、可能由服务显示、包含或提供的任何服务或内容（包括数据、信息、产品或服务）。</p>

                                    <p className='mb-5'><strong>网站</strong> 指 ION Mobility，可从 https://ionmobility.com/ 访问 </p>

                                    <p className='mb-5'><strong>You</strong> 指访问或使用服务的个人，或代表该个人访问或使用服务的公司或其他法律实体（如果适用）。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">致谢</h4>

                                <p  className='mb-5'>这些是管理本服务使用的条款和条件以及您与公司之间签订的协议。 这些条款和条件规定了所有用户在使用服务方面的权利和义务。</p>

                                <p  className='mb-5'>您访问和使用服务的条件是您接受并遵守这些条款和条件。 这些条款和条件适用于所有访问者、用户和访问或使用服务的其他人。</p>

                                <p  className='mb-5'>通过访问或使用服务，您同意受这些条款和条件的约束。 如果您不同意这些条款和条件的任何部分，则您不得访问该服务。</p>

                                <p  className='mb-5'>您声明您已年满 18 岁。公司不允许 18 岁以下的人士使用本服务。</p>

                                <p  className='mb-5'>您访问和使用本服务的前提是您接受并遵守公司的隐私政策。 我们的隐私政策描述了我们在您使用应用程序或网站时收集、使用和披露您的个人信息的政策和程序，并告诉您您的隐私权以及法律如何保护您。 在使用我们的服务之前，请仔细阅读我们的隐私政策。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">其他网站的链接</h4>

                                <p className='mb-5'> 我们的服务可能包含非公司拥有或控制的第三方网站或服务的链接。</p>

                                <p className='mb-5'>公司无法控制任何第三方网站或服务的内容、隐私政策或做法，也不承担任何责任。 您进一步承认并同意，对于因使用或依赖任何此类内容、商品或服务而造成或声称造成的任何损害或损失，公司不承担直接或间接的责任。 或通过任何此类网站或服务。</p>

                                <p className='mb-5'>我们强烈建议您阅读您访问的任何第三方网站或服务的条款和条件以及隐私政策。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">终止</h4>

                                <p className='mb-5'>我们可以出于任何原因（包括但不限于您违反这些条款和条件）立即终止或暂停您的访问，恕不另行通知或承担责任。</p>

                                <p className='mb-5'>终止后，您使用服务的权利将立即终止。</p>
                                </div>
                                <hr className='mt-5' />

                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">责任限制</h4>

                                <p className='mb-5'>尽管您可能遭受任何损害，公司及其任何供应商根据本条款的任何规定承担的全部责任以及您对上述所有内容的唯一补救措施应仅限于您通过服务实际支付的金额或 100 美元 如果您尚未通过本服务购买任何东西。</p>

                                <p className='mb-5'>在适用法律允许的最大范围内，在任何情况下，公司或其供应商均不对任何特殊、偶然、间接或后果性损害（包括但不限于利润损失、数据丢失或 其他信息，用于因使用或无法使用服务、与服务一起使用的第三方软件和/或第三方硬件而引起或以任何方式与之相关的业务中断、人身伤害、隐私损失，或 与本条款任何规定相关的其他情况），即使公司或任何供应商已被告知发生此类损害的可能性，即使补救措施未能达到其基本目的。</p>

                                <p className='mb-5'>某些州不允许排除默示保证或偶发或间接损害的责任限制，这意味着上述某些限制可能不适用。 在这些州，各方的责任将受到法律允许的最大范围的限制。</p>
                                </div>
                                <hr className='mt-5' />

                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">“按现状”和“按可用”免责声明</h4>

                                <p className='mb-5'>本服务按“原样”和“可用”方式向您提供，且包含所有错误和缺陷，不提供任何形式的保证。 在适用法律允许的最大范围内，公司代表其自身、其关联公司及其各自的许可方和服务提供商，明确否认与 服务，包括适销性、特定用途适用性、所有权和不侵权的所有默示保证，以及交易过程、履行过程、使用或贸易实践中可能产生的保证。 在不限于前述规定的情况下，公司不提供任何保证或承诺，也不以任何形式表示服务将满足您的要求、实现任何预期结果、与任何其他软件、应用程序、系统或服务兼容或协同工作、运行 不间断，满足任何性能或可靠性标准，或者没有错误，或者任何错误或缺陷可以或将被纠正。</p>

                                <p className='mb-5'>在不限制前述规定的情况下，公司或公司的任何提供商均不做出任何形式的明示或暗示的陈述或保证：(i) 关于服务或信息、内容和材料或产品的操作或可用性 包括在其中； (ii) 服务不会中断或没有错误； (iii) 通过服务提供的任何信息或内容的准确性、可靠性或时效性； (iv) 本服务、其服务器、内容或由公司或代表公司发送的电子邮件不存在病毒、脚本、特洛伊木马、蠕虫、恶意软件、定时炸弹或其他有害组件。</p>

                                <p className='mb-5'>某些司法管辖区不允许排除某些类型的保证或对消费者适用法定权利的限制，因此上述部分或全部排除和限制可能不适用于您。 但在这种情况下，本节规定的排除和限制应在适用法律可强制执行的最大范围内适用。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">适用法律</h4>

                                <p className='mb-5'>本条款以及您对服务的使用应受国家/地区法律（不包括法律冲突规则）管辖。 您对应用程序的使用还可能受到其他地方、州、国家或国际法律的约束。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">争议解决</h4>

                                <p className='mb-5'>如果您对服务有任何疑虑或争议，您同意首先尝试通过联系公司以非正式方式解决争议。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className='mb-5'>对于欧盟 (EU) 用户</h4>

                                <p className='mb-5'>如果您是欧盟消费者，您将受益于您所居住国家法律的任何强制性规定。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">美国法律合规性</h4>

                                <p className='mb-5'>您声明并保证 (i) 您所在的国家/地区不受美国政府禁运，或已被美国政府指定为“支持恐怖主义”的国家/地区，并且 (ii) 您不位于 被列入任何美国政府禁止或限制方名单。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">可分割性</h4>

                                <p className='mb-5'>如果这些条款的任何规定被认为不可执行或无效，则该规定将被更改和解释，以根据适用法律最大程度地实现该规定的目标，并且其余规定将继续完全有效。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">放弃</h4>

                                <p className='mb-5'>除本条款另有规定外，未能行使本条款项下的权利或要求履行本条款中的义务，不应影响一方在此后任何时间行使此类权利或要求履行此类权利的能力，放弃违约行为也不构成放弃 任何后续违规行为。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">翻译 口译</h4>

                                <p className='mb-5'>如果我们已通过我们的服务向您提供这些条款和条件，则这些条款和条件可能已翻译。</p>

                                <p className='mb-5'>您同意如有争议，以英文原文为准。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">这些条款和条件的变更</h4>

                                <p className='mb-5'>我们保留自行决定随时修改或替换这些条款的权利。 如果修订内容重大，我们将尽合理努力在任何新条款生效之前至少提前 30 天发出通知。 什么构成重大变更将由我们自行决定。</p>

                                <p className='mb-5'>在这些修订生效后继续访问或使用我们的服务，即表示您同意受修订条款的约束。 如果您不同意全部或部分新条款，请停止使用本网站和服务。</p>
                                </div>
                                <hr className='mt-5' />
                                <div className="item">
                                <h4 className="uppercase mb-5 my-5 text-2xl">联系我们</h4>

                                <p className='mb-5'>如果您对这些条款和条件有任何疑问，您可以联系我们：</p>

                                <ul>
                                    <li>通过电子邮件: <a href="mailto:hello@ionmobility.com" className='text-[#65E8E8]'>hello@ionmobility.com</a></li>
                                </ul>
                                </div>
                                <hr className='mt-5' />

                            </div>      
                        </div>
                            
                            
                        ) : (
                            <div>
                                <p className="text-xs mb-5">最后更新：2023 年 2 月 1 日 / 生效日期：2021 年 5 月 10 日</p>
                                <p className="text-xs">本数据保护声明（“声明”）规定了 ION MOBILITY PTE. 的依据。 有限公司 (201932713K)（“我们”、“我们”或“我们的”）可以根据《个人数据保护法》（“PDPA”）收集、使用、披露或以其他方式处理我们客户的个人数据。 本声明适用于我们拥有或控制下的个人数据，包括我们委托为我们的目的收集、使用、披露或处理个人数据的组织所拥有的个人数据。</p>
                                <div className="term-content">
                            <div className="item">
                            <h4 className='mt-20 text-3xl'>个人资料</h4>

                            <ol>
                            <li className="flex items-start mt-5">
                                <span className="number text-2xl">1</span>
                                <p className="ml-10 ">
                                    如本通知中所用： <br />
                                    “客户”是指 (a) 通过任何方式联系我们以了解有关我们提供的任何商品或服务的更多信息，或 (b) 可能或已经与我们签订供应任何商品或服务的合同的个人，或 我们的服务； “个人数据”是指可以通过以下方式识别客户身份的数据（无论真实与否）： (a) 根据该数据； (b) 来自我们已经或可能访问的数据和其他信息。
                                </p>
                            </li>

                            </ol>
                            <ol start="2">
                                <li  className="flex items-start mt-5">
                                    <span className="number text-2xl">2</span>
                                    <p className="ml-10">根据您与我们互动的性质，我们可能向您收集的个人数据的一些示例包括电子邮件地址。</p>
                                </li>
                                <li  className="flex items-start mt-5">
                                    <span className="number text-2xl">3</span>
                                    <p className="ml-10">本通知中使用的其他术语应具有 PDPA 中给出的含义（在上下文允许的情况下）。</p>
                                </li>
                                <hr className='mt-5' />
                            </ol>
                        </div>

                        <div className="item">
                            <h4 className='text-3xl'>个人数据的收集、使用和披露</h4>

                            <ol start="4">
                            <li  className="flex items-start mt-5">
                                <span className="number text-2xl">4</span>
                                <p className="ml-10">我们通常不会收集您的个人数据，除非 (a) 由您直接或通过您正式授权向我们（您的“授权代表”）披露您的个人数据的第三方在（i ) 您（或您的授权代表）已被告知收集数据的目的，并且 (ii) 您（或您的授权代表）已书面同意为这些目的收集和使用您的个人数据，或 (b) PDPA 或其他法律允许或要求未经同意收集和使用个人数据。 在收集任何其他个人数据之前以及将您的个人数据用于未通知您的目的之前（法律允许或授权的情况除外），我们将征求您的同意。</p>
                            </li>

                            <li className="flex items-start mt-5">
                                <span className="number text-2xl">5</span>
                                <div className="ml-3"> 
                                    <p className="ml-5">我们可能出于以下任何或所有目的收集和使用您的个人数据：</p>
                                    <div className="ml-5">
                                        <ol start="1">
                                            <li className="flex items-start mt-3"> 
                                                <span className="number text-1xl">1</span>
                                                <p className="ml-3">在我们提供您所要求的商品和/或服务的过程中或与之相关的义务；</p>
                                            </li>
                                            <li className="flex items-start mt-3"> 
                                                <span className="number text-1xl">2</span>
                                                <p className="ml-3">回应、处理和处理您的查询、请求、申请、投诉和反馈；</p>
                                            </li>
                                            <li className="flex items-start mt-3"> 
                                                <span className="number text-1xl">3</span>
                                                <p className="ml-3">管理您与我们的关系；</p>
                                            </li>
                                            <li className="flex items-start mt-3"> 
                                                <span className="number text-1xl">4</span>
                                                <p className="ml-3">您提供信息的任何其他目的； 和</p>
                                            </li>
                                            <li className="flex items-start mt-3"> 
                                                <span className="number text-1xl">5</span>
                                                <p className="ml-3">任何其他与上述相关的附带商业目的。</p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </li>

                            <li className="flex items-start mt-5">
                                <span className="number text-2xl">6</span>
                                <div className="ml-3"> 
                                    <p className="ml-5">我们可能会披露您的个人数据：</p>
                                    <ol start="1">
                                        <li className="flex items-start mt-5 ml-5">
                                            <span className="number text-xxl">1</span>
                                            <div className="ml-3"> 
                                                <p >在我们提供您所要求的商品和服务的过程中或与我们提供您所要求的商品和服务相关的义务时，需要进行此类披露。</p>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </li>

                            <li className="flex items-start mt-5">
                            <span className="number text-2xl">7</span>
                                <p className='ml-10'>即使您与我们的关系（例如，根据合同）已终止或以任何方式改变，上述条款中列出的目的可能会继续适用，在此后一段合理的时间内（包括，如适用，一段时间） 使我们能够根据与您签订的合同行使我们的权利）。</p></li>
                            </ol>
                            <hr className='mt-5' />
                        </div>
                        
                        <div className="item">
                            <h4 className='text-3xl'>撤回您的同意</h4>

                            <ol start="8">
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">8</span>
                            <p className='ml-10'>您对收集、使用和披露您的个人数据所提供的同意将一直有效，直到您以书面形式撤回同意为止。 您可以撤回同意并要求我们停止出于上述任何或所有目的收集、使用和/或披露您的个人数据，只需按照下面提供的联系方式以书面形式或通过电子邮件向我们的数据保护官提交请求即可。</p></li>
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">9</span>
                            <p className='ml-10'>收到您撤回同意的书面请求后，我们可能需要合理的时间（取决于请求的复杂程度及其对我们与您的关系的影响）来处理您的请求，并通知您我们的后果 同意该协议，包括可能影响您对我们的权利和责任的任何法律后果。 一般来说，我们将尽力在收到您的请求后十 (10) 个工作日内处理您的请求。</p></li>
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">10</span>
                            <p className='ml-10'>虽然我们尊重您撤回同意的决定，但请注意，根据您请求的性质和范围，我们可能无法继续向您提供我们的商品或服务，在这种情况下，我们将提前通知您 完成您的请求的处理。 如果您决定取消撤回同意，请按照上述第 8 条所述的方式以书面形式通知我们。</p></li>
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">11</span>
                            <p className='ml-10'>请注意，撤回同意并不影响我们继续收集、使用和披露个人数据的权利，前提是适用法律允许或要求未经同意收集、使用和披露个人数据。</p></li>
                            </ol>
                            <hr className='mt-5' />
                        </div>
                        
                        <div className="item">
                            <h4 className='text-3xl'>个人数据的访问和更正</h4>

                            <ol start="12">
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">12</span>
                            <p className='ml-10'>如果您希望 (a) 提出访问请求，获取我们持有的有关您的个人数据的副本或有关我们使用或披露您的个人数据的方式的信息，或 (b) 更正请求以更正或 更新我们持有的有关您的任何个人数据，您可以通过书面形式或通过电子邮件向我们的数据保护官提交请求，具体联系方式如下。</p></li>
                            <li className='flex items-start mt-5'><span className="number text-2xl">13</span>
                            <p className='ml-10'>请注意，访问请求可能会收取合理的费用。 如果是这样，我们会在处理您的请求之前告知您费用。</p></li>
                            <li className='flex items-start mt-5'><span className="number text-2xl">14</span>
                            <p className='ml-10'>我们将尽快回复您的请求。 一般来说，我们将在十 (10) 个工作日内做出答复。 如果我们无法在收到您的请求后三十 (30) 天内回复您的请求，我们将在能够回复您的请求后的三十 (30) 天内以书面形式通知您。 如果我们无法向您提供任何个人数据或进行您要求的更正，我们通常会告知您我们无法这样做的原因（除非 PDPA 没有要求我们这样做）。</p></li>
                            </ol>
                            <hr className='mt-5' />
                        </div>
                        
                        <div className="item">
                            <h4 className='text-3xl'>个人数据的保护</h4>

                            <ol start="15">
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">15</span>
                            <p className='ml-10'>为了保护您的个人数据免遭未经授权的访问、收集、使用、披露、复制、修改、处置或类似风险，我们采取了适当的管理、物理和技术措施，例如尽量减少个人数据的收集、身份验证和访问控制（例如良好的管理、物理和技术措施） 密码实践、数据披露的必要性等）、数据加密、数据匿名化、最新的防病毒保护、定期修补操作系统和其他软件、在处置前安全地擦除设备中的存储介质、网络 针对风险的安全措施，使用一次性密码（otp）/二因素身份验证（2fa）/多重身份验证（MFA）来确保访问安全，并定期进行安全审查和测试。</p></li>
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">16</span>
                            <p className='ml-10'>但是，您应该意识到，没有一种互联网传输方法或电子存储方法是完全安全的。 尽管无法保证安全，但我们会努力保护您的信息安全，并不断审查和增强我们的信息安全措施。</p></li>
                            </ol>
                            <hr className='mt-5' />
                        </div>
                        
                        <div className="item">
                            <h4 className='text-3xl'>个人数据的准确性</h4>

                            <ol start="17">
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">17</span>
                            <p className='ml-10'>我们通常依赖您（或您的授权代表）提供的个人数据。 为了确保您的个人数据是最新的、完整的和准确的，如果您的个人数据发生变化，请通过书面或通过电子邮件（联系方式如下）通知我们的数据保护官来更新我们。</p></li>
                            </ol>
                            <hr className='mt-5' />
                        </div>
                        
                        <div className="item">
                            <h4 className='text-3xl'>个人数据的保留</h4>

                            <ol start="18">
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">18</span>
                            <p className='ml-10'>我们可能会在实现收集目的所必需的期限内，或者根据适用法律的要求或允许的期限内保留您的个人数据。</p></li>
                            <li className='flex items-start mt-5'><span className="number text-2xl">19</span>
                            <p className='ml-10'>一旦有合理理由认为此类保留不再用于收集个人数据的目的，并且不再适用，我们将停止保留您的个人数据，或删除可与您关联的数据的方式。 出于法律或商业目的不再需要。</p>
                            </li>
                            </ol>
                            <hr className='mt-5' />
                        </div>
                       
                        <div className="item">
                            <h4 className='text-3xl'>在新加坡境外传输个人数据</h4>

                            <ol start="20">
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">20</span>
                            <p className='ml-10'>我们通常不会将您的个人数据传输到新加坡以外的国家。 但是，如果我们这样做，我们将征得您的同意以进行传输，并且我们将采取措施确保您的个人数据继续获得至少与 PDPA 规定的保护标准相当的保护标准。</p></li>
                            </ol>
                            <hr className='mt-5' />
                        </div>
                       
                        <div className="item">
                            <h4 className='text-3xl'>通知的效力和通知的变更</h4>

                            <ol start="21">
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">21</span>
                            <p className='ml-10'>本通知与适用于我们收集、使用和披露您的个人数据的任何其他通知、合同条款和同意条款一起适用。</p></li>
                            <li className='flex items-start mt-5'>
                            <span className="number text-2xl">22</span>
                            <p className='ml-10'>我们可能会不时修改本通知，恕不另行通知。 您可以通过参考本声明最后更新的日期来确定是否发生过任何此类修订。 您继续使用我们的服务即表示您承认并接受此类更改。</p></li>
                            </ol>

                            <p className='mt-5'>生效日期：2021 年 5 月 10 日</p>

                            <p className='mt-5'>最后更新：2021 年 5 月 10 日</p>
                            <hr className='mt-5' />
                        </div>
                       
                



                                </div>
                            </div>
                        )}

                </div>
               



            </div> 
                
        </div>

    </div>

     
  )
}

export default Terms