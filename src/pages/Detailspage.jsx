import React from 'react'
import Header from '../recruit/HeaderAboutus'
import Detail from '../recruit/Detail'
import Parameter from '../widgets/Parameter'

function DetailsPage() {
  return (
    <div>
    <Header/>
    <main >
      <div >
        <Detail />
      </div>
     
      <div >
        <Parameter />
      </div>
         
    </main>
  </div>   

  )
}

export default DetailsPage