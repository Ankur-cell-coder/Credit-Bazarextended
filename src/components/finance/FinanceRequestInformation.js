import React from 'react'
import { styled } from 'styled-components'
import Navbarfinancer from '../pages/Navbarfinancer';
import NavbarsideFinance from '../pages/NavbarsideFinance';
import Footer from '../pages/Footer';
import { useNavigate } from 'react-router-dom';

function FinanceRequestInformation() {
  const navigate=useNavigate();
  return (
    <>
    <Navbarfinancer/>
    <NavbarsideFinance/>
   <Finance1>

   <div className="button">
          <button
            className="btn1"
            onClick={() => {
              navigate("/finance_request_information");
            }}
          >
            Request Information
          </button>
          {/* <button
            className="btn"
            onClick={() => {
              navigate("/finance_view_request");
            }}
          >
           View Request
          </button> */}
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_offers");
            }}
          >
          Offers
          </button>
          <button
            className="btn"
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
        <div className="content">
<div id="RequestInformation" className="tabcontent">
  <div className="main-content">
    <div className="record-summary">
    </div>
    <div id="container">
      <div className="header">
        <h2 align="center">Finance requests</h2>
      </div>
      <div className="offer-card">
        <div className="lender-details">
          <h2>Request for Finance 1</h2>
          <p><strong>Prime Textiles</strong></p>
          <p><strong>Offered Amount:</strong>INR 4,00,000</p>
        </div>
        <div className="select-btn-container">
          <button className="btn5"  onClick={() => {
              navigate("/finance_view_request");
            }}>View requests</button>
        </div>
      </div>
      <div className="offer-card">
        <div className="lender-details">
          <h2>Request for Finance 2
</h2>
          <p><strong>Seller B</strong></p>
          <p><strong>Requested Amount:</strong> INR 1,40,000</p>
        </div>
        <div className="select-btn-container">
          <button className="btn5"  onClick={() => {
              navigate("/finance_view_request");
            }}>View requests</button>
        </div>
      </div>
      <div className="offer-card">
        <div className="lender-details">
          <h2>Request for Finance 3</h2>
          <p><strong>Seller C</strong></p>
          <p><strong>Offered Amount:</strong> INR 1,80,000</p>
        </div>
        <div className="select-btn-container">
          <button className="btn5"  onClick={() => {
              navigate("/finance_view_request");
            }}>View requests</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      
      

   </Finance1>
   <div style={{ marginTop: "30vh" }}>
       <Footer/>
      </div>
   </>
  )
}


export default FinanceRequestInformation

const Finance1=styled.div`

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
  margin-top: 20vh;
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

.content {
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
 
}
.offer-card{
  border:2px solid black;
  width:170%;
  margin-bottom:20px;
 
}
.lender-details{
  margin-left:40px;
}


.header{
  margin-left:60vh;
  font-size:25px;
}

.table-container {
  margin-top: 20px;
}
table {
  width: 300%;
  border-collapse: collapse;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
}
th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #dddddd;
}
th {
  background-color: #f8f9fa;
  font-weight: bold;
}
.search-bar {
  display: flex;
  margin-bottom: 20px;
  margin-right: 10px;
}
.search-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #dddddd;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  align-items: center;
}
.search-button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 8px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.search-button:hover {
  background-color: #0056b3;
}
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.popup .popuptext {
  width: 700px;
  visibility: hidden;
  background-color: #fff;
  color: #000;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  left: 50%;
  margin-left: -80px;
  overflow-y: auto;
  border-width: 3px;
  border-style: solid;
  border-color: #000;
}
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}
.popup .popuptext .btn {
  visibility: hidden;
}
.btn5 {
  color: white;
  background-color: #007bff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin-left:65vh;
  margin-bottom:15px;
}
.btn5:hover {
  background-color: #0056b3;
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

`;