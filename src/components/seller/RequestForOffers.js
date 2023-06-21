import React, { useState } from "react";
import { styled } from "styled-components";
import Footer from "../pages/Footer";
import NavbarSide from "../pages/NavbarSide";
import Navbarseller from "../pages/Navbarseller";
import { useNavigate } from "react-router-dom";

function RequestForOffers() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <>
      <Navbarseller />
      <NavbarSide />
      <Request1>
        <div className="buttoncontainer">
          <button
            className="btn"
            style={{ background: "orange", marginRight: "30px" }}
          >
            New Request For Finance
          </button>
          <button className="btn">Finance Request</button>
        </div>

        {display ? (
          <>
            <div>
              <input type="text" className="search-input" />
              <button className="search-button" onClick={handleClick}>
                Search
              </button>
            </div>

            <div className="header">
              <h1>Request for finance</h1>
            </div>
            <div className="state-item">
              <div className="state-label">Requested Amount:</div>
              <div className="state-value">INR 10,00,000</div>
            </div>
            <div className="record-details">
              <table>
                <tr>
                  <th>Seller GST</th>
                  <th>Buyer Name</th>
                  <th>Buyer GST</th>
                  <th>Trade Amount</th>
                  <th>Invoice Number</th>
                  <th>Trade</th>
                </tr>
                <tr>
                  <td>GST123</td>
                  <td>Buyer 1</td>
                  <td>GST456</td>
                  <td>INR 60,000</td>
                  <td>INV001</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>GST123</td>
                  <td>Buyer 2</td>
                  <td>GST012</td>
                  <td>INR 60,000</td>
                  <td>INV002</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>GST123</td>
                  <td>Buyer 3</td>
                  <td>GST678</td>
                  <td>INR 5,00,000</td>
                  <td>INV003</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>GST123</td>
                  <td>Buyer 4</td>
                  <td>GST456</td>
                  <td>INR 1,00,000</td>
                  <td>INV001</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>GST123</td>
                  <td>Buyer 5</td>
                  <td>GST012</td>
                  <td>INR 4,80,000</td>
                  <td>INV002</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>GST123</td>
                  <td>Buyer 6</td>
                  <td>GST678</td>
                  <td>INR 15,000</td>
                  <td>INV003</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </table>
              <div className="content">
                <button
                  className="btn"
                  onClick={() => {
                    navigate("/sellersofferdetails");
                  }}
                >
                  Accept
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <input className="search-input" />
            <button className="search-button" onClick={handleClick}>
              Search
            </button>
          </div>
        )}
      </Request1>
      <div style={{ marginTop: "65vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default RequestForOffers;

const Request1 = styled.div`
  width: 100vh;
  margin-left: 320px;
  margin-top: -420px;
  @media only screen and (min-width: 1800px) {
    margin-top: -560px;
  }

  .content {
    display: flex;
    margin-top: 20px;
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
  .search-bar {
    display: flex;
    margin-bottom: 20px;
    margin-right: 10px;
  }
  .state-item {
    display: flex;
    justify-content: space-between;
    width: 330px;
    font-size: 22px;
    margin-bottom: 20px;
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
    margin-top: 30px;
    background-color: orange;
    color: #ffffff;
    width: 120px;
    height: 40px;
    margin-left: 20px;
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
