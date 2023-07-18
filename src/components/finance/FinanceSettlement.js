import React, { useState } from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function FinanceSettlement() {
  const navigate = useNavigate();
  const [col1, setCol1] = useState("gray");
  const [col2, setCol2] = useState("gray");

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToogle = () => {
    setOpen1(!open1);

    if (col1 == "gray") {
      setCol1("blue");
    } else {
      setCol1("gray");
    }
  };

  const handleToogle2 = () => {
    setOpen2(!open2);
    if (col2 == "gray") {
      setCol2("blue");
    } else {
      setCol2("gray");
    }
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
            className="btn1"
            onClick={() => {
              navigate("/finance_settlement");
            }}
          >
            Settlement
          </button>
        </div>

        <div className="pheading">
          <div style={{ fontSize: "34px", marginLeft: "65vh" }}>
            Settlement details
          </div>
          <div style={{ fontSize: "24px", marginLeft: "43vh" }}>
            ProFinTech Technologies made the settlement as credit Period is
            coming to an end.
          </div>
        </div>

        <div className="content">
          {!open1 ? (
            <div className="mainheading" style={{ background: col1 }}>
              <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
              <div>
                <button
                  className="btnn"
                  onClick={handleToogle}
                  style={{ background: col1, border: `2px solid ${col1}` }}
                >
                  🔽
                </button>
              </div>
            </div>
          ) : (
            <div>
              {!open2 ? (
                <div>
                  <div className="mainheading" style={{ background: col1 }}>
                    <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                    <div>
                      <button
                        className="btnn"
                        onClick={handleToogle}
                        style={{
                          background: col1,
                          border: `2px solid ${col1}`,
                        }}
                      >
                        🔽
                      </button>
                    </div>
                  </div>

                  <div className="mainheading2" style={{ background: col2 }}>
                    <div style={{ marginLeft: "15px" }}>Liqui loans NBFC</div>
                    <div>
                      <button
                        className="btnn"
                        onClick={handleToogle2}
                        style={{
                          background: col2,
                          border: `2px solid ${col2}`,
                        }}
                      >
                        🔽
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className="mainheading"
                    style={{ background: col1, width: "150vh" }}
                  >
                    <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                    <div>
                      <button
                        className="btnn"
                        onClick={handleToogle}
                        style={{
                          background: col1,
                          border: `2px solid ${col1}`,
                        }}
                      >
                        🔽
                      </button>
                    </div>
                  </div>

                  <div
                    className="mainheading2"
                    style={{ background: col2, width: "140vh" }}
                  >
                    <div style={{ marginLeft: "15px" }}>Liqui loans NBFC</div>
                    <div>
                      <button
                        className="btnn"
                        onClick={handleToogle2}
                        style={{
                          background: col2,
                          border: `2px solid ${col2}`,
                        }}
                      >
                        🔽
                      </button>
                    </div>
                  </div>

                  <div
                    className="Disbursement_details"
                    style={{ display: "block" }}
                  >
                    <h1>SettlementInformation</h1>
                    <h2> Seller Information</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Name:</th>
                          <td>Prime Textiles</td>
                        </tr>
                        <tr>
                          <th>Contact Details:</th>
                          <td>info@primetextiles.in</td>
                        </tr>
                        <tr>
                          <th>GST:</th>
                          <td>36AAIFP3688H1ZS</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2> Buyer Information</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Name:</th>
                          <td>Hospital 1</td>
                        </tr>
                        <tr>
                          <th>Contact Details:</th>
                          <td>Hospital 1.doe@example.com</td>
                        </tr>
                        <tr>
                          <th>GST:</th>
                          <td>123-45-5656</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2> lender Information</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Name:</th>
                          <td>LiquiLoans NBFC</td>
                        </tr>
                        <tr>
                          <th>Contact Details:</th>
                          <td>info@liquiloans.com</td>
                        </tr>
                        <tr>
                          <th>GST:</th>
                          <td>36AAACI1195H1ZN</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Settlement Details</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Settlement Amount:</th>
                          <td>INR 19,000</td>
                        </tr>
                        <tr>
                          <th>Margine:</th>
                          <td>INR 1500 (8%)</td>
                        </tr>
                        <tr>
                          <th>Interest Rate:</th>
                          <td> INR 1500 (8%)</td>
                        </tr>
                        <tr>
                          <th>Repayment Term:</th>
                          <td> 45 days</td>
                        </tr>
                        <tr>
                          <th>Payment loyality for Trade partner</th>
                          <td>INR 400.00 </td>
                        </tr>
                        <tr>
                          <th>ProFinTech technology charges:</th>
                          <td> INR 400.00 </td>
                        </tr>
                        <tr>
                          <th>Payment to Anchor:</th>
                          <td> INR 200.00 </td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Settlement Date</h2>
                    <p>Sep 25, 2023</p>
                    <h2>Settlement Method</h2>
                    <p>Direct Deposit</p>
                    <h2>Patron of the Payment</h2>
                    <p>ProFinTech Technologies</p>
                    <h2>Receipent of the Payment</h2>
                    <p>LiquiLoans NBFC</p>
                    <h2>Settlement Schedule</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Due Date</th>
                        </tr>
                        <tr>
                          <td>Sep 29, 2023</td>
                        </tr>
                        {/* Add more rows for subsequent installments */}
                      </tbody>
                    </table>
                    <h2>Settlement Agreement</h2>
                    <p>
                      Please review and accept the{" "}
                      <a href="#">Settlement Agreement</a> for more information.
                    </p>
                    <h2>Contact Information</h2>
                    <p>
                      If you have any questions or need assistance, please
                      contact our customer service at 1-800-123-4567 or email us
                      at info@example.com.
                    </p>
                    <div className="Settlement-confirmation">
                      <h2>Settlement Confirmation</h2>
                      <p>
                        Settlement has been made by the ProFinTech Team to
                        LiquiLoans. Confirmation Number: ABD2512
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Finance1>
      <div style={{ marginTop: "60vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default FinanceSettlement;

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
  th, td {
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
  .Disbursement details{
      display: none;
      margin-top: 10px;
  }
`;
