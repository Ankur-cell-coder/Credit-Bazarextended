import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
import BuyerSide from "../pages/BuyerSide";

function BuyersRequestInformation() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <BuyerSide />

      <Buyers1>
        <div className="button">
          <button
            className="btn1"
            onClick={() => {
              navigate("/buyersrequestinformation");
            }}
          >
            Request Information
          </button>

          <button
            className="btn"
            onClick={() => {
              navigate("/buyers_offers");
            }}
          >
            Offers
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/buyers_disbursement");
            }}
          >
            Disbursement
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/buyers_shipment");
            }}
          >
            Shipment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/buyers_payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/buyers_settlement");
            }}
          >
            Settlement
          </button>
        </div>

        <div id="RequestInformation" className="tabcontent">
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
                    <td> INR 4,00,000</td>
                  </tr>
                  <tr>
                    <th> Status</th>
                    <td> In Progress</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 align="center"> Trades</h2>
            <div className="record-details">
              <table>
                <tbody>
                  <tr>
                    <th>Trade Document</th>
                    <th>Subgroup ID</th>
                    <th>Seller GST</th>
                    <th>Buyer Name</th>
                    <th>Buyer GST</th>
                    <th>Trade Amount</th>
                    <th>Invoice ID</th>
                  </tr>
                  <tr>
                    <td>Trade Document 1</td>
                    <td>Subgroup 3</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Hospital3</td>
                    <td>123-45-5373</td>
                    <td>₹90,000.00</td>
                    <td>INV001</td>
                  </tr>
                  <tr>
                    <td>Trade Document 2</td>
                    <td>Subgroup 3</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Hospital3</td>
                    <td>123-45-5373</td>
                    <td>₹20,000.00</td>
                    <td>INV002</td>
                  </tr>
                  <tr>
                    <td>Trade Document 3</td>
                    <td>Subgroup 3</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Hospital3</td>
                    <td>123-45-5373</td>
                    <td>₹30,000.00</td>
                    <td>INV003</td>
                  </tr>
                  <tr>
                    <td>Trade Document 4</td>
                    <td>Subgroup 4</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Medical Univ. 1</td>
                    <td>123-45-2486</td>
                    <td>₹40,000.00</td>
                    <td>INV004</td>
                  </tr>
                  <tr>
                    <td>Trade Document 5</td>
                    <td>Subgroup 4</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Medical Univ. 1</td>
                    <td>123-45-2486</td>
                    <td>₹50,000.00</td>
                    <td>INV005</td>
                  </tr>
                  <tr>
                    <td>Trade Document 7</td>
                    <td>Subgroup 4</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Medical Univ. 1</td>
                    <td>123-45-2486</td>
                    <td>₹30,000.00</td>
                    <td>INV006</td>
                  </tr>
                  <tr>
                    <td>Trade Document 8</td>
                    <td>Subgroup 4</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Medical Univ. 1</td>
                    <td>123-45-2486</td>
                    <td>₹40,000.00</td>
                    <td>INV007</td>
                  </tr>
                  <tr>
                    <td>Trade Document 6</td>
                    <td>Subgroup 1</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Hospital 1</td>
                    <td>123-45-5454</td>
                    <td>₹20,000.00</td>
                    <td>INV008</td>
                  </tr>
                  <tr>
                    <td>Trade Document 9</td>
                    <td>Subgroup 2</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Hospital 2</td>
                    <td>123-45-5919</td>
                    <td>₹50,000.00</td>
                    <td>INV009</td>
                  </tr>
                  <tr>
                    <td>Trade Document 10</td>
                    <td>Subgroup 2</td>
                    <td>36AAIFP3688H1ZS</td>
                    <td>Hospital 2</td>
                    <td>123-45-5919</td>
                    <td>₹90,000.00</td>
                    <td>INV0010</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </Buyers1>
      <div style={{ marginTop: "30vh" }}>
          <Footer />
        </div>
    </>
  );
}

export default BuyersRequestInformation;

const Buyers1 = styled.div`
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

  .content {
    display: flex;
    margin-top: 20px;
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
`;
