import React from 'react'
import Header from '../recruit/Header'
import News from '../recruit/News'
import Parameter from '../widgets/Parameter'


function NewsPage() {
  return (
    <div>
    <Header/>
    <main >
      <div >
        <News />
      </div>
      <div >
        <Parameter />
      </div>
      
         
    </main>
  </div>   

  )
}

export default NewsPage