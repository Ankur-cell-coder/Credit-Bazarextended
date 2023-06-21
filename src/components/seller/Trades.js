import React from "react";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import Footer from "../pages/Footer";
import NavbarSide from "../pages/NavbarSide";

function Trades() {
  return (
    <>
      <NavbarSide />
      <Trade1>
        <Navbarseller />
        <div className="container">
          <div className="search-container">
            <div>
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
              <button className="search-btn">🔍</button>
            </div>
            <div className="button">
              <button className="btn">Add New Trades</button>
            </div>
          </div>
          <div className="header">
            <h1>Trades</h1>
            <p>Lists Of Trades.</p>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Seller GST</th>
                <th>Buyer Name</th>
                <th>Buyer GST</th>
                <th>Trade Amount</th>
                <th>Interest</th>
                <th>Invoice Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GST123</td>
                <td>Buyer 1</td>
                <td>GST456</td>
                <td>INR 10,000</td>
                <td>5%</td>
                <td>INV001</td>
              </tr>
              <tr>
                <td>GST123</td>
                <td>Buyer 2</td>
                <td>GST012</td>
                <td>INR 8,000</td>
                <td>3%</td>
                <td>INV002</td>
              </tr>
              <tr>
                <td>GST123</td>
                <td>Buyer 3</td>
                <td>GST678</td>
                <td>INR 15,000</td>
                <td>4%</td>
                <td>INV003</td>
              </tr>
              <tr>
                <td>GST123</td>
                <td>Buyer 4</td>
                <td>GST456</td>
                <td>INR 10,000</td>
                <td>5%</td>
                <td>INV001</td>
              </tr>
              <tr>
                <td>GST123</td>
                <td>Buyer 5</td>
                <td>GST012</td>
                <td>INR 8,000</td>
                <td>3%</td>
                <td>INV002</td>
              </tr>
              <tr>
                <td>GST123</td>
                <td>Buyer 6</td>
                <td>GST678</td>
                <td>INR 15,000</td>
                <td>4%</td>
                <td>INV003</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "40vh" }}>
          <Footer />
        </div>
      </Trade1>
    </>
  );
}

export default Trades;

const Trade1 = styled.div`
  margin-top: -710px;
  margin-left: 10vh;
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  .top-bar {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
  .notification-bell {
    margin-left: auto;
    margin-right: 20px;
    font-size: 18px;
  }
  .container {
    width: 80%;
    margin: auto;
    padding: 20px;
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
  .header {
    text-align: center;
    padding: 20px;
    color: #333;
    margin-top: 10px; /* Adjust the margin-top value to decrease or increase the space */
  }
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  .table th,
  .table td {
    border: 1px solid #ccc;
    padding: 5px;
  }
  .table th {
    background-color: #f7f7f7;
    font-weight: bold;
  }
  .table td {
    text-align: center;
  }
  .btn {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  .search-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 40px;
  }
  .search-input {
    padding: 10px;
    width: 350px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  .search-btn {
    color: white;
    background-color: orange;
    padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .search-btn:hover {
    background-color: #0056b3;
  }
`;
