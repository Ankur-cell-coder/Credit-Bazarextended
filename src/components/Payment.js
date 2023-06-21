import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import Navbarseller from './pages/Navbarseller';
import NavbarSide from './pages/NavbarSide';
import Footer from './pages/Footer';

function Payment() {
  const navigate=useNavigate();
  return (
    <>
    <Navbarseller/>
   <NavbarSide/>
    <Request1>
    
       <div className='button'>
         <button className='btn' onClick={()=>{navigate('/request_information')}}>Request Information</button>
         <button className='btn' onClick={()=>{navigate('/offers')}}>Offers</button>
         <button className='btn' onClick={()=>{navigate('/disbursement')}}>Disbursement</button>
         <button className='btn' onClick={()=>{navigate('/shipment')}}>Shipment</button>
         <button className='btn1' onClick={()=>{navigate('/payment')}}>Payment</button>
         <button className='btn' onClick={()=>{navigate('/settlement')}}>Settlement</button>
       </div>
       <div className='content'>
          This is Payment Page!....
        </div>
     </Request1>
     <div style={{marginTop:"65vh"}}>
      <Footer/>
     </div>
     </>
  )
}

export default Payment

const Request1=styled.div`

margin-left:28vh;
margin-top:-540px;
.btn {
 color: white;
 background-color: #007bff;
 padding: 10px 20px;
 text-decoration: none;
 border-radius: 5px;
 display: inline-block;
 margin-left:20px;
 font-size:20px;
}
.btn1 {
 color: white;
 background-color: orange;
 padding: 10px 20px;
 text-decoration: none;
 font-size:20px;
 border-radius: 5px;
 display: inline-block;
 margin-left:20px;
}
.btn:hover {
 background-color: #0056b3;
}

.content{
 margin-left:20px;
 margin-top:20px;
}


`;
