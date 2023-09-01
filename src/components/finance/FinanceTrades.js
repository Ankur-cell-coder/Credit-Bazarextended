import React from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FinanceTrades() {
  const navigate = useNavigate();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToogle = () => {
    setOpen1(!open1);
  };

  const handleToogle2 = () => {
    setOpen2(!open2);
  };

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
              navigate("/finance_trades");
            }}
          >
            Trades
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

        <div>
          <div className="content">
            {!open1 ? (
              <div className="mainheading" style={{ background: "gray" }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle}
                    style={{ background: "gray", border: "2px solid gray" }}
                  >
                    🔽
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mainheading" style={{ background: "blue" }}>
                  <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                  <div>
                    <button
                      className="btnn"
                      onClick={handleToogle}
                      style={{ background: "blue", border: "2px solid blue" }}
                    >
                      🔽
                    </button>
                  </div>
                </div>
                <div className="content" style={{ display: "block" }}>
                  <h3> Trade Documents</h3>
                  <div className="record-details">
                    <table>
                      <tbody>
                        <tr>
                          <th>Invoice Number</th>
                          <th>Seller Name</th>
                          <th>Seller GST</th>
                          <th>Buyer Name</th>
                          <th>Buyer GST</th>
                        </tr>
                        <tr>
                          <td>INV001</td>
                          <td>Prime Textiles</td>
                          <td>36AAIFP3688H1ZS</td>
                          <td>Apollo Hospitals</td>
                          <td>36AAACA5443N2ZI</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="content">
            {!open2 ? (
              <div className="mainheading" style={{ background: "gray" }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle2}
                    style={{ background: "gray", border: "2px solid gray" }}
                  >
                    🔽
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mainheading" style={{ background: "blue" }}>
                  <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                  <div>
                    <button
                      className="btnn"
                      onClick={handleToogle2}
                      style={{ background: "blue", border: "2px solid blue" }}
                    >
                      🔽
                    </button>
                  </div>
                </div>

                <div className="content" style={{ display: "block" }}>
                  <h3> Trade Documents</h3>
                  <div className="record-details">
                    <table>
                      <tbody>
                        <tr>
                          <th>Invoice Number</th>
                          <th>Seller Name</th>
                          <th>Seller GST</th>
                          <th>Buyer Name</th>
                          <th>Buyer GST</th>
                        </tr>
                        <tr>
                          <td>INV002</td>
                          <td>Prime Textiles</td>
                          <td>36AAIFP3688H1ZS</td>
                          <td>Renova Hospitals</td>
                          <td>36ABCCS4959C1Z9</td>
                        </tr>
                        <tr>
                          <td>INV003</td>
                          <td>Prime Textiles</td>
                          <td>36AAIFP3688H1ZS</td>
                          <td>Renova Hospitals</td>
                          <td>36ABCCS4959C1Z9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Finance1>
      <div style={{ marginTop: "65vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default FinanceTrades;

const Finance1 = styled.div`
  margin-left: 28vh;

  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    // border-radius: 5px;
    display: inline-block;
    // margin-left: 20px;
    width: 250px;
  }
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    // border-radius: 5px;
    display: inline-block;
    // margin-left: 20px;
    font-size: 20px;
    margin-top: 20vh;
    width: 250px;
  }
  .btn:hover {
    background-color: #0056b3;
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
  .Payment-confirmation {
    background-color: #dff0d8;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .Disbursement_details {
    display: none;
    margin-top: 10px;
    padding: 50px;
  }
  .pheading {
    margin-top: 20px;
  }
  .mainheading {
    font-size: 32px;
    margin-top: 20px;
    color: white;
    margin-left: 5vh;
    width: 60vh;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    border: 2px solid gray;
  }
  .mainheading2 {
    font-size: 32px;
    margin-top: 20px;
    color: white;
    margin-left: 7.5vh;
    width: 55vh;
    height: 5vh;
    display: flex;
    justify-content: space-between;
  }
  .content {
    // border: 2px solid red;
    margin-top: 40px;
  }
  .btnn {
    border: 2px solid blue;
  }
  h1 {
    text-align: center;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }
  .Settlement-confirmation {
    background-color: #dff0d8;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .Disbursement details {
    display: none;
    margin-top: 10px;
  }
`;
