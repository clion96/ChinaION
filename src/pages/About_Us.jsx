import React from 'react'
import Header from '../recruit/HeaderAboutus'
import ABoutUs from '../recruit/Aboutus'
import Synopsis from '../recruit/Synopsis'
import Parameter from '../widgets/Parameter'

function AboutUs() {
  return (
    <div>
    <Header/>
    <main >
      <div >
        <ABoutUs />
      </div>
      <div >
        <Synopsis />
      </div>
      <div >
        <Parameter />
      </div>
         
    </main>
  </div>   

  )
}

export default AboutUs