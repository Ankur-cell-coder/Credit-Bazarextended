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
        <h2>Disbursement Details</h2>
        <div className="details">
          <p>Offered Amount: INR 7,50,000</p>
          <p>Margin (25%): INR 2,50,000</p>
          <p>Interest (12%): INR 22,191.78</p>
          <p>Term: 90 days</p>
          <p>Payment loyality (2%): INR 4,932</p>
          <p>Technology charge (2%): INR 4,932 </p>
          <p>Disbursement value: INR 7,27,808</p>
        </div>
        <div>
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
    background-color: #007BFF;
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
@-webkit-keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}
.accept-btn-container {
      display: flex;
      justify-content: center;
      margin-top: 30px;
  }
  .accept-btn {
      color: #fff;
      background-color: #007BFF;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 5px;
      display: inline-block;
      transition: background-color 0.3s;
      font-weight: bold;
      border: none;
      cursor: pointer;
      outline: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  .accept-btn:hover {
      background-color: #0056b3;
  }
  .disbursement-details {
      background-color: #F8F9FA;
      padding: 20px;
      margin-top: 50px;
      margin-bottom: auto;
      text-align: center;
      width: 500px;
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
      margin-left: 80px;
      margin-top: 20px;
  }

  .tabcontent{
     margin-left:48vh;
  }

`;
