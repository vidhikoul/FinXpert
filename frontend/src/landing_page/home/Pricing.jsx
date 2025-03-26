import React from 'react'

const Pricing = () => {
  return (
    <div className='container'>
        <div className='row mt-5 p-5'>
            <div className='col-4'>
              <h1  className='mb-5 fs-1'>Unbeatable pricing</h1>
              <p  className='mb-4 text-muted'>We pioneered the concept of discount broking and price transparency in India.Flat fees and not hidden charges.</p>
              <a href="#"  style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='col-2'>

            </div>
            <div className='col-6'>
                <div className='row text-center'>
                  <div className='col-6 p-2 border'>
                      <h1 className='text-center p-3 mb-4'>&#8377; 0</h1>
                      <p className='text-muted text-center'>Free equity delivery and <br />direct mutual funds</p>
                  </div>
                  <div className='col-6 p-2 border'>
                  <h1 className=' text-center p-3 mb-4'>&#8377; 20</h1>
                  <p className='text-muted text-center'>Intraday and F&Q</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing