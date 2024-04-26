import { useState, useEffect } from "react";
import Logo from '../assets/ion_logo_white.svg';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [isNavBarVisible, setIsNavBarVisible] = useState(true);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const location = useLocation();
    const Title = new URLSearchParams(location.search).get('Title');
    const [activeTab, setActiveTab] = useState(Title);
    

    let prevScrollPos = window.scrollY; // 将其移到 useEffect 之外

    useEffect(() => {
      const handleScroll = () => {
        const sixThirdsPoint = (window.innerHeight * 1) / 3; // 将计算调整为视口高度的 2/3
        const isScrolledSixThirds = window.scrollY > sixThirdsPoint;

        const currentScrollPos = window.scrollY;
        const isScrollingUp = currentScrollPos < prevScrollPos;

        setIsScrollingUp(isScrollingUp);
        setIsNavBarVisible(isScrollingUp || !isScrolledSixThirds); // 调整了条件，以便在滚动超过 2/3 时隐藏导航栏of the viewport height

        // eslint-disable-next-line react-hooks/exhaustive-deps
        prevScrollPos = currentScrollPos;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isScrollingUp]);

    return (
      <header className={`fixed w-full top-0 z-50 transition-transform transform duration-1000 ease-in-out ${
        isNavBarVisible ? 'translate-y-0 ': '-translate-y-full shadow'
      }`}
    >
        <nav className="w-full bg-black">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                      <Link to={`/?Title=homepage`}>
                            <img className="h-12 md:h-14 w-auto" src={Logo} alt="" />
                      </Link>
                      <div className="md:hidden">
                          <button
                              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                              onClick={() => setNavbar(!navbar)}
                          >
                              {navbar ? (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-white"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              ) : (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-white"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M4 6h16M4 12h16M4 18h16"
                                      />
                                  </svg>
                              )}
                          </button>
                      </div>
                  </div>
              </div>
              <div className="md:px-4">
                  <div
                      className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0  md:mt-0 ${
                          navbar ? "block" : "hidden"
                      }`}
                  >
                      <ul className="items-center font-bold justify-center space-y-8 md:flex md:space-x-8 md:space-y-0" style={{fontSize:'18px'}}>
                          <li className="text-white  hover:text-[#65E8E8]">
                            <Link
                                to={`/?Title=homepage`}
                                className={` ${activeTab === 'homepage' ? 'text-[#65E8E8]' : 'text-gray-100'
                                  } hover:text-[#65E8E8]`}
                                onClick={() => setActiveTab('homepage')}
                            >
                                首页
                            </Link>
                          </li>
                          <li className="text-white hover:text-[#65E8E8]">
                            <Link
                              to={`/AboutUs?Title=AboutUs&`}
                              className={` ${activeTab === 'AboutUs' ? 'text-[#65E8E8]' : 'text-gray-100'
                              } hover:text-[#65E8E8]`}
                              onClick={() => setActiveTab('AboutUs')}
                              >
                              关于我们
                            </Link>
                          </li>
                          <li className="text-white hover:text-[#65E8E8]">
                            <Link
                              to={`/NewsPage?Title=newsPage`}
                              className={` ${activeTab === 'newsPage' ? 'text-[#65E8E8]' : 'text-gray-100'
                              } hover:text-[#65E8E8]`}
                              onClick={() => setActiveTab('newsPage')}
                              >
                              新闻
                            </Link>
                          </li>
                          <li className="text-white hover:text-[#65E8E8]">
                            <Link
                              to={`/employment?Title=recruit&`}
                              className={`${activeTab === 'recruit' ? 'text-[#65E8E8]' : 'text-gray-100'
                              } hover:text-[#65E8E8]`}
                              onClick={() => setActiveTab('recruit')}
                              >
                              职位
                            </Link>
                          </li>
                          <li className="text-white hover:text-[#65E8E8]">
                            <Link
                              to={`/contact-us?Title=Contact-us&`}
                              className={`${activeTab === 'Contact-us' ? 'text-[#65E8E8]' : 'text-gray-100'
                              } hover:text-[#65E8E8]`}
                              onClick={() => setActiveTab('Contact-us')}
                            >
                              联系我们
                            </Link>
                          </li>
                      </ul>
                  </div>
              </div>             
          </div>
        </nav>
      </header>
        
    );
}
