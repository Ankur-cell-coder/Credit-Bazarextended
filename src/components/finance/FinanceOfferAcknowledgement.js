import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";

function FinanceOfferAcknowledgement() {
    const navigate=useNavigate();
  return (
    <Finance1>
      <Navbarfinancer/>
     
    <div id="container">
        <div className="header">
            <h1>Place an offer Acknowledgement</h1>
            <p>Your Request for Finance has been successfully placed an offer! See the details below.</p>
        </div>
        <div className="content">
            <p>Lender Name: Suresh</p>
            <p>Offered Amount: INR 7,50,000</p>
            <p>Margin (25%): INR 2,50,000</p>
            <p>Interest (12%): INR 22,191.78</p>
            <p>Term: 90 days</p>
        </div>
        <div className="content center">
            <p>We will notify you soon, Thank you for using our platform!</p>
            <button className="btn" onClick={()=>{navigate('/financesdashboard')}}>
            OK
          </button>
        </div>
    </div>



     
    </Finance1>
  );
}

export default FinanceOfferAcknowledgement;

const Finance1 = styled.div`

body {
  font-family: Arial, sans-serif;
}
#container {
  width: 80%;
  margin: auto;
}
.header {
  text-align: center;
  padding: 20px;
  color: #333;
}
.content {
  background-color: #F8F9FA;
  padding: 20px;
  margin-bottom: 20px;
}
.btn {
  color: white;
  background-color: orange;
  padding: 10px 40px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
}
.btn:hover {
  background-color: #0056b3;
}
.center {
  text-align: center;
}
`;
