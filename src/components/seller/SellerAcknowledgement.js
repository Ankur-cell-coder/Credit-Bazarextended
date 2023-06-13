import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Navbarseller from '../pages/Navbarseller';

function  SellerAcknowledgement() {
    const navigate=useNavigate();

  return (
    <>
    <Navbarseller/>
   <Acko1>
    <div className='content1'>
    Request for offer Acknowledgment
    </div>
    <div className='wrapper'>
       <div className='internalcontent'>
       The request for has been placed Successfully
       </div>
       <div className='internal'>
       The lender will be notified about the request for offer.
       </div>
    </div>

    <div className='status'>
       <div style={{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"green",border:"2px solid green",marginRight:"20px"}}>
       </div>
       <div>Status : Successfull</div>
    </div>

    <div className='thankyou'>
    Thank you for using our services!
    </div>

    <button onClick={()=>{navigate('/sellersdashboard')}} className='button'>
        Back To Dashboard
    </button>

   </Acko1>
   </>
  )
}

export default  SellerAcknowledgement

const Acko1=styled.div`

  .content1{
    font-size:35px;
    margin-top:80px;
    margin-left:650px;
  }
  .wrapper{
    width:600px;
    height:150px;
    margin-top:60px;
    border:2px solid black;
    margin-left:620px;
    background:#e5e4e2;
  }
  .internalcontent{
    font-size:24px;
    margin-left:50px;
    margin-top:30px;
  }
  .internal{
    font-size:16px;
    margin-left:54px;
    margin-top:30px;
    background:#e5e4e2;
  }
  
  .status{
    display:flex;
    margin-top:40px;
    margin-left:830px;
  }
  .thankyou{
    margin-left:810px;
    margin-top:40px;
  }
  .button{
    margin-left:780px;
    margin-top:40px;
    width:300px;
    height:50px;
    font-size:20px;
    background:orange;
    border:2px solid orange;
  }
`;