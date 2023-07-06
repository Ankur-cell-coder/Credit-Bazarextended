import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Navbarfinancer from '../pages/Navbarfinancer';
import Footer from '../pages/Footer';
import NavbarsideFinance from '../pages/NavbarsideFinance';


function  FinanceDisburenmentAcknowledgement() {
    const navigate=useNavigate();

  return (
    <>
    <Navbarfinancer/>
    <NavbarsideFinance/>
   <Acko1>
    <div>
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

    <button onClick={()=>{navigate('/financesdashboard')}} className='button'>
        Back To Dashboard
    </button>
    </div>
   </Acko1>
   <div style={{marginTop:"35vh"}}>
   <Footer/>
   </div>
   
   </>
  )
}

export default  FinanceDisburenmentAcknowledgement

const Acko1=styled.div`
  
display:flex;
justify-content:center;
margin-left: 5vh;


  .content1{
    display:flex;
justify-content:center;
    font-size:35px;
    margin-top:20vh;
  
  }
  .wrapper{
    width:600px;
    height:150px;
    margin-top:60px;
    border:2px solid black;
    display:flex;
justify-content:center;
flex-direction:column;
    background:#e5e4e2;
  }
  .internalcontent{
    font-size:24px;
    display:flex;
    justify-content:center;
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
    display:flex;
justify-content:center;
  }
  .thankyou{
    display:flex;
    justify-content:center;
    margin-top:40px;
  }
  .button{
   
    margin-top:40px;
    width:300px;
    margin-left:160px;
    height:50px;
    font-size:20px;
    background:orange;
    border:2px solid orange;
  }
`;

