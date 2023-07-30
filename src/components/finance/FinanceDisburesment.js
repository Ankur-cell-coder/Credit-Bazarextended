import React from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function FinanceDisburesment() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarfinancer />
      <NavbarsideFinance />
      <Finance1>
        <div className="button">
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_request_information");
            }}
          >
            Request Information
          </button>
         
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_offers");
            }}
          >
            Offers
          </button>
          <button
            className="btn1"
            onClick={() => {
              navigate("/finance_disbursement");
            }}
          >
            Disbursement
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_shipment");
            }}
          >
            Shipment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_settlement");
            }}
          >
            Settlement
          </button>
        </div>

<div id="Disbursement" className="tabcontent">
  <div className="main-content">
    <div id="container">
      <div className="disbursement-details">
        <h1>Disbursement Details</h1>
        <div className="details">
          <p>Offered Amount: INR 7,50,000</p>
          <p>Margin (7.89%): INR 2,50,000</p>
          <p>Interest (10%): INR 22,191.78</p>
          <p>Term: 40 days</p>
         
        </div>
        <div style={{marginTop:"20px",fontSize:"20px"}}>
          <h2>Payment gateway</h2>
          <form>
            <div className="form-group">
              <label htmlFor="amount">Payment Amount</label>
              <input type="number" id="amount" placeholder="Enter the Payment Amount" />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" placeholder="Enter the Card Number" />
            </div>
            <div className="form-group">
              <label htmlFor="expiry">Expiry Date</label>
              <input type="text" id="expiry" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="password" id="cvv" placeholder="Enter the CVV" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="actions">
      <a className="btn2" href="#">Make payment</a>
      <a className="btn2" href="#">Back to Dashboard</a>
    </div>
  </div>
</div>

                  
      </Finance1>
      <div style={{ marginTop: "30vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default FinanceDisburesment;

const Finance1 = styled.div`
  margin-left: 28vh;

 
 
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
    font-size: 20px;
    margin-top:20vh;
  }
  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
  }
  .btn:hover {
    background-color: #0056b3;
  }



  .main-content {
    padding: 20px;
}
.table-container {
    margin-top: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
}
th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #dddddd;
}
th {
    background-color: #F8F9FA;
    font-weight: bold;
}

.btn2{
    color: white;
    background-color: #007BFF;
     padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-left:20px;
}
.btn2:hover {
    background-color: #0056b3;
}

  .disbursement-details {
      border:2px solid green;
      background-color: #F8F9FA;
      padding: 20px;
      margin-top: 50px;
      margin-bottom: auto;
      text-align: center;
      width: 100vh;
      height:65vh;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .disbursement-details h2 {
      margin-top: 0;
      color: #007BFF;
  }
  .disbursement-details .details {
      color: #666;
      margin-top: 20px;
  }
  .form-group {
      margin-bottom: 15px;
  }
  .form-group label {
      display: flex;
      font-weight: bold;
      margin-bottom: 5px;
  }
  .form-group input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  .actions{
      margin-left:35vh;
      margin-top: 20px;
  }

  .tabcontent{
    //  border:2px solid red;
     display:flex;
     justify-content:center;
  }

`;
