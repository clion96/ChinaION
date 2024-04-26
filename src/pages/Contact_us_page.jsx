import React from 'react'
import Header from '../recruit/HeaderAboutus'
import Contact_us from '../recruit/Contact_us'
import Parameter from '../widgets/Parameter'

function Contact_us_page() {
  return (
    <div>
    <Header/>
    <main >
      <div >
        <Contact_us />
      </div>
     
      <div >
        <Parameter />
      </div>
         
    </main>
  </div>   

  )
}

export default Contact_us_page