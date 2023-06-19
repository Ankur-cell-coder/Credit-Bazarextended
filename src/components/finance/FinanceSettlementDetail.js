import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";

function FinanceSettlementDetail() {
    const navigate=useNavigate();
  return (
    <Finance1>
        <Navbarfinancer/>
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
  );
}

export default FinanceSettlementDetail;

const Finance1 = styled.div`

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
.top-bar {
    background-color: #007BFF;
    color: #ffffff;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.logo {
    font-size: 24px;
    font-weight: bold;
    margin-right: auto;
}
.notification-bell {
    font-size: 20px;
    cursor: pointer;
    margin-left: auto;
    margin-right: 10px;
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 100vh;
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