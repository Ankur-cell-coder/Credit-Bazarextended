import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import Footer from "../pages/Footer";
import NavbarsideFinance from "../pages/NavbarsideFinance";

function FinanceSettlementDetail() {
    const navigate=useNavigate();
  return (
    <>
    <Navbarfinancer/>
    <NavbarsideFinance/>
    <Finance1>
        
      <div className="content">
        <div className="disbursement-details">
          <h2>Settlement Details</h2>
          <div className="details">
            <p>Settlement Amount: INR ,727,808</p>
          </div>
          <div className="actions">
            <button className="btn" >
              ok
            </button>
            <button className="btn" onClick={()=>{navigate('/financesdashboard')}}>
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    
    </Finance1>
    <div style={{marginTop:"20vh"}}>
    <Footer/>
    </div>
    </>
  );
}

export default FinanceSettlementDetail;

const Finance1 = styled.div`

display:flex;
justify-content:center;


margin-left: 5vh;

.content {
    display: flex;
    justify-content: center;
    align-items: center;
margin-top:20vh;
     height: 80vh;
}
.disbursement-details {
    background-color: #F8F9FA;
    padding: 20px;
    margin-top: 200px;
    margin-bottom: auto;
    text-align: center;
    width: 500px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.disbursement-details h2 {
    margin-top: 0;
    color: orange;
}
.disbursement-details .details {
    color: #666;
    margin-top: 20px;
}
.actions {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.btn {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin: 0 5px;
    transition: background-color 0.3s ease;
}
.btn:hover {
    background-color: #0056b3;
}
`;
