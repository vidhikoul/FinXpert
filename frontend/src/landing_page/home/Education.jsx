import React from 'react'

const Education = () => {
  return (
   <div className='container'>
      <div className='row p-5'>
        <div className='col-6'>
          <img src="/media/education.svg" alt="" style={{width:"70%"}} />
        </div>
        <div className='col-6 p-5'>
          <h1 className='fs-2 mb-4'>Free and open market education</h1>
          <p className='text-muted'>Varsity,the largest online stock market education book in the world <br />convering everything from the basics to advanced trading.</p>
          <a href="#"  style={{textDecoration:"none"}}>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

          <p  className='text-muted mt-5'>Trading Q&A,the most active trading and investment community in<br />India for all your market related queries</p>
          <a href="#"  style={{textDecoration:"none"}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
   </div>
  )
}

export default Education