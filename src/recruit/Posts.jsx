import React, { useState, useEffect} from 'react';
import About from '../assets/About.png';
import 'typeface-oxanium';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import COS from 'cos-js-sdk-v5'; // 首先，您需要安装并导入腾讯云的 SDK

function Posts() {
  useEffect(() => {
    // 在组件挂载和更新时滚动到页面顶部
    window.scrollTo(0, 0);
  }, []);

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  // 添加一个新的状态变量来跟踪是否正在提交
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();
  const jobTitle = new URLSearchParams(location.search).get('jobTitle');
  const Location = new URLSearchParams(location.search).get('location');
  console.log(location, jobTitle, Location)
  const allowedTypes = [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
  ];


  const Recruitment_text = [
    {
      jobTitle: "软件工程师",
      text1: "招聘软件工程师",
      text2: "M1-S 让您的骑行体验充满电感 ",
      text3: "#被迫搬家",
      text4: "#被迫搬家",
      text5: "#被迫搬家",
      text6: "#被迫搬家",
      text7: "#被迫搬家",
      text8: "#被迫搬家",
      text9: "#被迫搬家",
      text10: "#被迫搬家",

    },
    {
      jobTitle: "UI设计师",
      text1: "招聘UI工程师",
      text2: "M1-S 招聘UI工程师 ",
      text3: "#招聘UI工程师",
      text4: "#被迫搬家",
      text5: "#被迫搬家",
      text6: "#被迫搬家",
      text7: "#被迫搬家",
      text8: "#被迫搬家",
      text9: "#被迫搬家",
      text10: "#被迫搬家",

    },
    {
      jobTitle: "嵌入式测试工程师",
      text1: "招聘嵌入式测试工程师",
      text2: "M1-S 招聘嵌入式测试工程师",
      text3: "#招聘嵌入式测试工程师",
      text4: "#被迫搬家",
      text5: "#被迫搬家",
      text6: "#被迫搬家",
      text7: "#被迫搬家",
      text8: "#被迫搬家",
      text9: "#被迫搬家",
      text10: "#被迫搬家",

    },
    {
      jobTitle: "嵌入式开发工程师",
      text1: "招聘嵌入式开发工程师",
      text2: "M1-S 招聘嵌入式开发工程师 ",
      text3: "#招聘嵌入式开发工程师",
      text4: "#被迫搬家",
      text5: "#被迫搬家",
      text6: "#被迫搬家",
      text7: "#被迫搬家",
      text8: "#被迫搬家",
      text9: "#被迫搬家",
      text10: "#被迫搬家",

    },
    {
      jobTitle: "营销主管",
      text1: "招聘营销主管",
      text2: "M1-S 招聘营销主管 ",
      text3: "#招聘营销主管",
      text4: "#被迫搬家",
      text5: "#被迫搬家",
      text6: "#被迫搬家",
      text7: "#被迫搬家",
      text8: "#被迫搬家",
      text9: "#被迫搬家",
      text10: "#被迫搬家",

    },
  ]
  const jobDetails = Recruitment_text.find(job => job.jobTitle === jobTitle);
 
  const cos = new COS({
    SecretId: 'AKIDbMFLSjAyty4DaxRHA1meZRfdXVisxupx',
    SecretKey: 'b6kG1rhHoKpO4lv6EDIORXqNB86U7rdY',
  });

  const handleFileChange = (e) => {
    let selectedFile = e.target.files[0];


    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setMessage('文件上传成功！');
    } else {
      setFile(null);
      setMessage('仅支持 PDF、docx 和 doc 文件！');
    }
  };
  const [form, setForm] = useState({
    lastName: '',
    gender: '',
    email: '',
    address: '',
    phone: '',
    website: '',
    hobbies: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const currentTime = new Date().toLocaleString();


const handleSubmit = (e) => {
  e.preventDefault();

  // 验证 lastName 最多包含4个中文字符
  const reg = /^[\u4e00-\u9fa5]{1,4}$/;
  if (!reg.test(form.lastName)) {
    alert('姓名最多可以包含4个中文字符');
    return;
  }

  // 验证 email 的规则性
  const emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  if (!emailReg.test(form.email)) {
    alert('请输入有效的邮箱地址');
    return;
  }

  // 验证 gender 必须选择
  if (form.gender !== "男" && form.gender !== "女") {
    alert('请选择性别');
    return;
  }

  // 验证 address 必须填写
  if (!form.address) {
    alert('请填写地址');
    return;
  }

  // 验证 phone 的规则性
  const phoneReg = /^1[3456789]\d{9}$/;
  if (!phoneReg.test(form.phone)) {
    alert('请输入有效的电话号码');
    return;
  }

  // 添加对文件上传的检查
  if (!file) {
    alert('请先上传简历附件！');
    return;
  }

  if (!allowedTypes.includes(file.type)) {
    alert('仅支持 PDF、docx 和 doc 文件！');
    return;
  }

  // 在开始提交时将 isSubmitting 设置为 true
  setIsSubmitting(true);

   // 上传文件到 COS
   cos.putObject({
    Bucket: 'kali001-1305577010',
    Region: 'ap-guangzhou',
    Key: file.name,
    Body: file,
  }, (err, data) => {
    if (err) {
      alert.error('上传文件到 COS 失败:', err);
      setIsSubmitting(false);
      return;
    }
    // 构建文件在 COS 中的访问链接
    const fileLink = `https://${data.Location}`;
    // 所有验证通过后，发送邮件
    const serviceID = 'service_guuyy83';
    const templateID = 'template_ytgpbc9';
    const userID = 'IgI6Z7eRWHlmSfZHb';
    // 发送邮件包含文件链接
    emailjs.send(serviceID, templateID, {
      name: form.lastName,
      email: form.email,
      gender: form.gender,
      address: form.address,
      phone: form.phone,
      website: form.website, 
      hobbies: form.hobbies,
      fileLink: fileLink, 
      times: currentTime,
      }, userID)
      .then((response) => {
        setIsSubmitting(false);
        // console.log('SUCCESS!', response.status, response.text);
        alert('提交成功！');
        
      })
      .catch((err) => {
        setIsSubmitting(false);
        // console.error('发送邮件失败:', err);
        alert('提交失败，请稍后再试！\n', err);
 
      });
  });

};

  

  return (
    <div style={{ fontFamily: 'Oxanium'}}>
      <img src={About} alt="CAREERS" className='mt-16 '/>
      <div className='md:-ml-3 md:mx-20' style={{padding:'2.2em'}}>
        职业-<span className='text-[#09CECE]'>{jobTitle}</span> 
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="w-auto bg-white p-9 md:p-0">
          <div className="mb-4">           
            <h1 className='flex text-[#0a0a0a] text-xxl'>{jobTitle}
            <button 
              className='border border-[#09CECE] text-black w-[60px]  h-6 text-xs hover-bg button-wrapper ml-[195px] md:ml-[546px] '
              onClick={() => {
                const applicationSection = document.getElementById("applicationSection"); 
                if (applicationSection) {
                  applicationSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="button-content">
                立即申请
              </span>
            </button>

            </h1>
            <p className="mt-2 text-gray-400 text-sm my-10">{Location}</p>
            <p className="mt-2 text-[#0a0a0a] text-sm my-5">
                {jobDetails.text1}
            </p>
            <p className='flex text-sm my-10'>
                {jobDetails.text2}
            </p>
            <h1 className='text-black text-xxl font-bold my-2'>责任</h1>
            <p className='mx-auto text-left text-xs'>
              <li >
                {jobDetails.text3}
              </li>
              <li>
                {jobDetails.text4} 
              </li>
              <li>
                {jobDetails.text5}
              </li>
              <li>
                {jobDetails.text6}
              </li>
              <li >
                {jobDetails.text7}
              </li>
            </p>
            <h1 className='text-black text-xxl font-bold my-2'>要求</h1>
            <p className='mx-auto text-left text-xs'>
              <li >
                {jobDetails.text8}
              </li>
              <li>
                {jobDetails.text9}
              </li>
            </p>
            <h1 className='text-black text-xxl font-bold my-2'>技能组合</h1>
            <p className='mx-auto text-left text-xs'>
              <li >
                {jobDetails.text10}
              </li>
            </p>
          </div>
          <div id="applicationSection" className="flex border-b border-gray-300 my-16"></div>
          <div className='my-20'>
            <div className=' bg-[#F6F6F6] p-10 my-20' >
              <form onSubmit={handleSubmit} >
                <span className='flex font-bold my-2' style={{ fontSize: '13px' }}>
                  申请这份工作
                </span>
                <label className='flex text-[#979797] mt-3' style={{ fontSize: '12px' }}>
                  姓名 <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  required name="lastName"
                  className="flex border-b-2 border-[#d3cccc] text-sm bg-black w-[325px] md:w-[720px] focus:outline-none text-black bg-opacity-0"
                  style={{width:'100%'}}
                  onChange={handleInputChange}
                />
                <label className='flex text-[#979797] mt-3' style={{ fontSize: '12px' }}>
                  性别 <span style={{ color: 'red' }}>*</span>
                </label>
                <select
                  defaultValue="" name="gender"
                  className="flex border-b-2 border-[#d3cccc] text-sm bg-black w-[325px] md:w-[720px] focus:outline-none text-black bg-opacity-0"
                  style={{width:'100%'}}
                  onChange={handleInputChange}

                >
                  <option disabled value="">请选择性别</option>
                  <option>男</option>
                  <option>女</option>
                </select>
                <label className='flex text-[#979797] mt-3' style={{ fontSize: '12px' }}>
                  邮箱 <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  required name="email"
                  className="flex border-b-2 border-[#d3cccc] text-sm bg-black focus:outline-none text-black bg-opacity-0"
                  style={{width:'100%'}}
                  onChange={handleInputChange}
                />
                <label className='flex text-[#979797] mt-3' style={{ fontSize: '12px' }}>
                  地址 <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  required name="address"
                  className="flex border-b-2 border-[#d3cccc] text-sm bg-black focus:outline-none text-black bg-opacity-0"
                  style={{width:'100%'}}
                  onChange={handleInputChange}
                />
                <label className='flex text-[#979797] mt-3' style={{ fontSize: '12px' }}>
                  电话 <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  required name="phone"
                  className="flex border-b-2 border-[#d3cccc] text-sm bg-black focus:outline-none text-black bg-opacity-0"
                  style={{width:'100%'}}
                  onChange={handleInputChange}
                />
                <label className='flex text-[#979797] mt-3' style={{ fontSize: '12px' }}>
                  个人技能
                </label>
                <input
                   name="website"
                  className="flex border-b-2 border-[#d3cccc] text-sm bg-black focus:outline-none text-black bg-opacity-0"
                  style={{width:'100%'}}
                  onChange={handleInputChange}
                />
                <label className='flex text-[#979797] mt-3' style={{ fontSize: '12px' }}>
                  兴趣爱好
                </label>
                <input
                   name="hobbies"
                  className="flex border-b-2 border-[#d3cccc] text-sm bg-black  focus:outline-none text-black bg-opacity-0"
                  style={{width:'100%'}}
                  onChange={handleInputChange}
                />
                <label className='block my-3 text-[#979797]' style={{ fontSize: '12px' }}>
                  请上传简历附件
                </label>
                <input
                    name="my_file"
                    type="file" 
                    style={{width:'100%'}}
                    
                    onChange={handleFileChange}
                  />
                {message && <span>{message}</span>}
                <button type="submit" className='text-center block border my-7 border-[#09CECE] w-[100px] h-8 text-xs hover-bg button-wrapper mx-auto'>
                  <span className="button-content">
                    {isSubmitting ? (
                      <div className="loader-container">
                        <span>提交中</span>
                        <div className="loader"></div>
                      </div>
                    ) : (
                      '立即提交'
                    )}
                  </span>
                </button>

              </form>
            </div>
            
          </div>
          <div className=''>
              <h1 className='block text-xxl font-bold'>没有看到合适的位置？</h1>
              <p className='block my-3 ' style={{ fontSize: '12px' }}>
                  我们一直在寻找有动力、有才华的人加入我们的团队。如果您没有找到适合您经验的职位，您仍然可以将您的简历发送给我们{' '}
                <a href="mailto:careers@ionmobility.com"  style={{ textDecoration: 'underline', color: '#09CECE' }}>
                  careers@ionmobility.com 
                </a>
              </p>
          </div>
          <div className='my-20'>
          </div>
        </div>
        
    </div>
      
    </div>
  )
}

export default Posts