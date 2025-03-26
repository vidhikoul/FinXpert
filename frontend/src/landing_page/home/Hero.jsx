import React from 'react'

const Hero = () => {
  return (
   <div className='container p-5 mb-5'>
    <div className='row text-center'>
        <img src="/media/homeHero.png" alt="Hero Image" className='mb-5'/>
        <h1 className='mt-3'>Invest in everything</h1>
        <p>Online platform to invest in stocks,derivatives,mutual funds,amd more</p>
        <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"15%",margin:"0 auto" ,}}>Signup Now</button>
    </div>
   </div>
  )
}

export default Hero