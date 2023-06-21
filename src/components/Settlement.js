import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

function Settlement() {
  const navigate=useNavigate();
  return (
     <Request1>
        <div className='button'>
          <button onClick={()=>{navigate('/request_information')}}>Request Information</button>
          <button onClick={()=>{navigate('/offers')}}>Offers</button>
          <button onClick={()=>{navigate('/disbursement')}}>Disbursement</button>
          <button onClick={()=>{navigate('/shipment')}}>Shipment</button>
          <button onClick={()=>{navigate('/payment')}}>Payment</button>
          <button onClick={()=>{navigate('/settlement')}}>Settlement</button>
        </div>
        <div>
          This is Settlement Page!....
        </div>
     </Request1>
  )
}

export default Settlement

const Request1=styled.div`

   

`;
