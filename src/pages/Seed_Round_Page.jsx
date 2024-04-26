import React from 'react'
import Header from '../recruit/HeaderAboutus'
import Seed_Round from '../recruit/Seed_Round'
import Parameter from '../widgets/Parameter'

function Seed_Round_Page() {
  return (
    <div>
    <Header/>
    <main >
      <div >
        <Seed_Round />
      </div>
      <div >
        <Parameter />
      </div>
         
    </main>
  </div>   

  )
}

export default Seed_Round_Page