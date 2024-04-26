import React, { useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

function Contact_us() {
    
  useEffect(() => {
    // 在组件挂载和更新时滚动到页面顶部
    window.scrollTo(0, 0);
    // 创建一个变量用来存储地图对象
    let map = null;
    // 使用 JS API Loader 加载高德地图 JS API
    AMapLoader.load({
      key: 'fcafd93c37dc874829ff7cb663431510', // 你申请的 web 平台（JS API）的 key 和安全密钥
      version: '2.0', // 指定要加载的 JSAPI 的版本
      plugins: ['AMap.Scale', 'AMap.ToolBar'], // 需要使用的的插件列表
    }).then((AMap) => {
      // 创建地图对象
      map = new AMap.Map('container', {
        viewMode: '3D', // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [114.02162, 22.64159], // 初始化地图中心点位置
        mapStyle: 'amap://styles/normal', //设置地图的显示样式
      });
      // 以下是添加标记点的代码
    const locations = [
    [114.02162, 22.64159], // 位置

  ];
  const markers = [];
  locations.forEach((location) => {
    const marker = new AMap.Marker({
      position: location,
      icon: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
      offset: new AMap.Pixel(-13, -30),
    });
    markers.push(marker);
  });
  map.add(markers);
  map.setFitView();
    }).catch((e) => {
      console.log(e);
    });
    // 在组件卸载时销毁地图对象
    return () => {
      map?.destroy();
    };
  }, []);
  return (
    <div style={{ fontFamily: 'Oxanium' }}>
      {/* 设置地图容器的 id 和样式 */}
      <div id="container" style={{ height: '500px' }}></div>
      <div className="flex justify-center items-center h-full">
        <div className="bg-white mt-8 p-4">
          <div className="mb-4">           
            <h1 className='text-2xl'>艾昂动力科技（深圳）有限公司</h1>
            <p className="mt-2 text-gray-600">
                地址：广东省深圳市龙华区民治街道上芬社区西头工业区3号506 
            </p>
            <p className="mt-2 text-gray-600">
                企业邮箱：
                <a href="mailto:careers@ionmobility.com" style={{ textDecoration: 'underline', color: '#09CECE' }}>
                    careers@ionmobility.com
                </a>
            </p>
            <p className="mt-2 text-gray-600">
                联系电话：13813811110
            </p>
        </div>
    </div>
      </div>
    </div>
  );
}

export default Contact_us;  
