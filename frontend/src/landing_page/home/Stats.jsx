import React from 'react'

const Stats = () => {
  return (
   <div className='container'>
      <div className='row mt-5 p-3'>
        <div className='col-6 p-5'>
          <h1 className='mb-5 fs-2'>Trust With Confidence</h1>

          <h2 className='fs-4'>Customer-first always</h2>
          <p className='mb-4 text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crores worth of equity investments.</p>

          <h2 className='fs-4'>No spam or gimmicks</h2>
          <p className='mb-4 text-muted'>No gimmicks,spam,"gamification",or annoying push notification.High quality apps that you use at your pace,the way you like.</p>

          <h2 className='fs-4'>The Zerodha universe</h2>
          <p className='mb-4 text-muted'>Not just an app,but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h2 className='fs-4'>Do better with money</h2>
          <p className='mb-4 text-muted'>With initiatives like Nudge and kill Switch,we don't just facilitate transaction,but actively help you de better with your money.</p>


        </div>
        <div className='col-6 p-5'>
            <img style={{width:"100%"}} src="/media/ecosystem.png" alt="" />
            <div className='text-center'>
              <a href="#" className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              <a href="#"  style={{textDecoration:"none"}}>Try Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>
   </div>
  )
}

export default Stats