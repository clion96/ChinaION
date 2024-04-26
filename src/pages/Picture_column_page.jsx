import React from 'react'
import Header from '../recruit/HeaderAboutus'
import Picture_column from '../recruit/Picture_column'
import Parameter from '../widgets/Parameter'

function Picture_column_Page() {
  return (
    <div>
    <Header/>
    <main >
      <div >
        <Picture_column />
      </div>
     
      <div >
        <Parameter />
      </div>
         
    </main>
  </div>   

  )
}

export default Picture_column_Page