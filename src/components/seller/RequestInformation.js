import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import NavbarSide from "../pages/NavbarSide";
import Footer from "../pages/Footer";

function RequestInformation() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarseller />
      <NavbarSide />
      <Request1>
        <div className="button">
          <button
            className="btn1"
            onClick={() => {
              navigate("/request_information");
            }}
          >
            Request Information
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/offers");
            }}
          >
            Offers
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/disbursement");
            }}
          >
            Disbursement
          </button>
          {/* <button
            className="btn"
            onClick={() => {
              navigate("/shipment");
            }}
          >
            Shipment
          </button> */}
          <button
            className="btn"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/settlement");
            }}
          >
            Settlement
          </button>
        </div>
        <div className="content">
          <div class="main-content">
            <div class="record-summary">
              <h2>Request information</h2>
            </div>
            <div class="record-details">
              <table>
                <tbody>
                  <tr>
                    <th>Request ID</th>
                    <td>1580147</td>
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
                    <td> Raised </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              style={{ fontSize: "34px", marginLeft: "90%", marginTop: "30px" }}
            >
              {" "}
              Trades
            </div>
            <div class="record-details">
              <table>
                <tbody>
                  <tr>
                    <th>Trade Document</th>
                    <th>Subgroup ID</th>
                    <th>Seller GST</th>
                    <th>Buyer Name</th>
                    <th>Buyer GST</th>
                    <th>Trade Amount</th>
                    
                  </tr>
                  <tr>
                    <td>Trade Document 1</td>
                    <td>Subgroup 1</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Appolo Hospital</td>
                    <td>36AAACA5443N2ZI</td>
                    <td>4,50,00</td>
                  
                  </tr>
                  <tr>
                    <td>Trade Document 2</td>
                    <td>Subgroup 2</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Renova Hospitals</td>
                    <td>36ABCCS4959C1Z9</td>
                    <td>3,00,000</td>
                 
                  </tr>
                  <tr>
                    <td>Trade Document 3</td>
                    <td>Subgroup 3</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Renova Hospitals</td>
                    <td>36ABCCS4959C1Z9</td>
                    <td>3,50,000</td>
                  
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Request1>
      <div style={{ marginTop: "40vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default RequestInformation;

const Request1 = styled.div`
  margin-left: 28vh;

  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    display: inline-block;
    width: 250px;
  }
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-top: 20vh;
    width: 250px;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .content {
    display: flex;
    margin-top: 20px;
  }

  .main-content {
    display: flex;
    padding: 20px;
    flex-direction: column;
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
  .record-details {
    border: 2px solid black;
    width: 190%;
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
