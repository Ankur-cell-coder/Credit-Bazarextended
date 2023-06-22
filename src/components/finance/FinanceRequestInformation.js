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
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_view_request");
            }}
          >
           View Request
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
          <div className="main-content">
            <div className="record-summary">
              <h2>Request information</h2>
            </div>
            <div className="record-details">
              <table>
                <tbody>
                  <tr>
                    <th>Request ID</th>
                    <td>123456</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td> 20/06/2023 </td>
                  </tr>
                  <tr>
                    <th> Requested Amount</th>
                    <td> INR 10,00,000</td>
                  </tr>
                  <tr>
                    <th> Status</th>
                    <td> In Progress</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 align="left"> Trades</h2>
            <div className="record-details">
              <table>
                <tbody>
                  <tr>
                    <th>Seller GST</th>
                    <th>Buyer Name</th>
                    <th>Buyer GST</th>
                    <th>Trade Amount</th>
                    <th>Invoice ID</th>
                  </tr>
                  <tr>
                    <td>GST123</td>
                    <td>Buyer 1</td>
                    <td>GST456</td>
                    <td>INR 60,000</td>
                    <td>INV001</td>
                  </tr>
                  <tr>
                    <td>GST123</td>
                    <td>Buyer 2</td>
                    <td>GST012</td>
                    <td>INR 60,000</td>
                    <td>INV002</td>
                  </tr>
                </tbody>
              </table>
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
margin-top: -540px;
.btn {
  color: white;
  background-color: #007bff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin-left: 20px;
  font-size: 20px;
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
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.top-bar {
  background-color: #007bff;
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
.profile-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: 10px;
  background-color: #ffffff;
}
.content {
  display: flex;
  margin-top: 20px;
}
.side-nav {
  background-color: #f8f9fa;
  width: 150px;
  padding: 20px;
}
.side-nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.side-nav li {
  margin-bottom: 10px;
}
.side-nav a {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.side-nav a:hover {
  background-color: #007bff;
  color: #ffffff;
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
.btn {
  color: white;
  background-color: #007bff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
}
.btn:hover {
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