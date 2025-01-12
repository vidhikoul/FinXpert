import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src="/media/largestBroker.svg" alt="" />
        </div>
        <div className='col-6 mt-3 p-5'>
          <h1>Largest stock broker in India</h1>
          <p className='mt-3'>2+ million Zerodha clients to over 15% of all retail order volumes
            in India daily by trading and investing in:
          </p>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <ul>
                    <li>
                      <p>Futures and Options</p>
                    </li>
                    <li>
                      <p>Commodity derivatives</p>
                    </li>
                    <li>
                      <p>Currency derivatives</p>
                    </li>
                </ul>
              </div>
              <div className='col-6'>
                  <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Goverment Securities</p>
                  </li>
                  </ul>
              </div>
            </div>
          
          </div>
          <img style={{width:"95%"}} src="/media/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Awards