import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbarseller from "../pages/Navbarseller";

function SellerOffer() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarseller />

    <Boffer1>
    
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="button"
      >
        Go Back
      </button>
      
      <div className="content1">
        Request For Offer
      </div>



    <div className="content2">
        Select the Trade and request for Offer
    </div>

  <table>
    <thead>
      <tr>
        <th>Seller Name</th>
        <th>Seller GST</th>
        <th>Buyer Name</th>
        <th>Buyer GST</th>
        <th>Trade Amount</th>
        <th>Interest</th>
        <th>Invoice Number</th>
        <th>Request Finance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Seller A</td>
        <td>GST123</td>
        <td>Buyer 1</td>
        <td>GST456</td>
        <td>$10,000</td>
        <td>5%</td>
        <td>INV001</td>
        <td><button type="button" onClick={()=>{navigate('/sellersofferdetails')}}>Request Finance</button></td>
      </tr>
      <tr>
        <td>Seller B</td>
        <td>GST789</td>
        <td>Buyer 2</td>
        <td>GST012</td>
        <td>$8,000</td>
        <td>3%</td>
        <td>INV002</td>
        <td><button type="button" onClick={()=>{navigate('/sellersofferdetails')}}>Request Finance</button></td>
      </tr>
      <tr>
        <td>Seller C</td>
        <td>GST345</td>
        <td>Buyer 3</td>
        <td>GST678</td>
        <td>$15,000</td>
        <td>4%</td>
        <td>INV003</td>
        <td><button type="button" onClick={()=>{navigate('/selersofferdetails')}}>Request Finance</button></td>
      </tr>
      <tr>
        <td>Seller D</td>
        <td>GST123</td>
        <td>Buyer 4</td>
        <td>GST456</td>
        <td>$10,000</td>
        <td>5%</td>
        <td>INV001</td>
        <td><button type="button" onClick={()=>{navigate('/sellersofferdetails')}}>Request Finance</button></td>
      </tr>
      <tr>
        <td>Seller E</td>
        <td>GST789</td>
        <td>Buyer 5</td>
        <td>GST012</td>
        <td>$8,000</td>
        <td>3%</td>
        <td>INV002</td>
        <td><button type="button" onClick={()=>{navigate('/sellersofferdetails')}}>Request Finance</button></td>
      </tr>
      <tr>
        <td>Seller F</td>
        <td>GST345</td>
        <td>Buyer 6</td>
        <td>GST678</td>
        <td>$15,000</td>
        <td>4%</td>
        <td>INV003</td>
        <td><button type="button" onClick={()=>{navigate('/sellersofferdetails')}}>Request Finance</button></td>
      </tr>
    </tbody>
  </table>






    </Boffer1>
    </>
  );
}

export default SellerOffer;

const Boffer1 = styled.div`
margin-left:300px;
margin-top:80px;
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
  }

  .button {
    background-color: orange;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    width:200px;
    height:50px;
    font-size:24px;
  }

  .content1 {
    font-size: 28px;
    margin-top: 30px;
    margin-left:490px;
  }

  .content2 {
    font-size: 18px;
    margin-top: 30px;
    margin-left:450px;
    margin-bottom:30px;
  }

  table {
    width: 80%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #ddd;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  button[type="button"] {
    background-color: orange;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
`;
