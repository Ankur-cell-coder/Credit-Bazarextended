import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import Footer from "../pages/Footer";
import NavbarSide from "../pages/NavbarSide";

function SellerSettlements() {
  const navigate = useNavigate();

  return (
    <>
      <Navbarseller />
      <NavbarSide/>
      <Seller1>
        <div>
          <div className="content">
            <h2>Settlement Information</h2>
            <table className="details-table">
              <tbody>
                <tr>
                  <th>Transaction ID</th>
                  <td>[Transaction ID]</td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <td>$[Amount]</td>
                </tr>
                <tr>
                  <th>Payment Date</th>
                  <td>[Payment Date]</td>
                </tr>
                <tr>
                  <th>Payment Method</th>
                  <td>[Payment Method]</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>[Status]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="content">
            <h2>Invoice Details</h2>
            <table className="details-table">
              <tbody>
                <tr>
                  <th>Invoice ID</th>
                  <td>[Invoice ID]</td>
                </tr>
                <tr>
                  <th>Supplier</th>
                  <td>[Supplier Name]</td>
                </tr>
                <tr>
                  <th>Due Date</th>
                  <td>[Due Date]</td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <td>$[Invoice Amount]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="content">
            <h2>Transaction Details</h2>
            <table className="details-table">
              <tbody>
                <tr>
                  <th>Transaction ID</th>
                  <td>[Transaction ID]</td>
                </tr>
                <tr>
                  <th>Buyer</th>
                  <td>[Buyer Name]</td>
                </tr>
                <tr>
                  <th>Supplier</th>
                  <td>[Supplier Name]</td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <td>$[Transaction Amount]</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>[Transaction Date]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="button" onClick={() => navigate("/sellerspayment")}>
            Make Payment
          </button>
        </div>
      </Seller1>
      <div style={{marginTop:"25vh"}}> 
      <Footer/>
      </div>
      
    </>
  );
}

export default SellerSettlements;

const Seller1 = styled.div`
width: 160vh;
margin-left: 320px;
margin-top: -420px;
@media only screen and (min-width: 1800px) {
  margin-top: -560px;
}
  body {
    font-family: Arial, sans-serif;
  }
  #container {
    width: 100%;
    margin: auto;
  }
  .header {
    text-align: center;
    padding: 20px;
    color: #333;
  }
  .content {
    background-color: #f8f9fa;
    padding: 100px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .details-table {
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
  }
  .details-table th,
  .details-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  .details-table th {
    background-color: #f2f2f2;
  }
  .center {
    text-align: center;
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
  .button{
   
    margin-top:40px;
    width:300px;
    margin-left:540px;
    height:50px;
    font-size:20px;
    background:orange;
    border:2px solid orange;
    @media only screen and (min-width: 1800px){
      margin-left:640px;
    }
  }
`;
