import React, { useState } from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function Finance_payment() {
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
            className="btn1"
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

        <div className="pheading">
          <div style={{ fontSize: "34px", marginLeft: "65vh" }}>
            Payment details
          </div>
          <div style={{ fontSize: "24px", marginLeft: "43vh" }}>
            Buyers made the paymentent as credit Period is coming to an end.
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
                    <div style={{ marginLeft: "15px" }}>Liqui Loan</div>
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
                    <div style={{ marginLeft: "15px" }}>Liqui Loan</div>
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
                    style={{ display: "flex",flexDirection:"Column",justifyContent:"center"}}
                  >
                    <div style={{marginLeft:"60vh"}}>
                    <h1>Payment Information</h1>
                    </div>
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
                          <td>123-45-5454</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Payment Details</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Value of subgroup:</th>
                          <td>INR 20,000</td>
                        </tr>
                        <tr>
                          <th>Payment Amount:</th>
                          <td>INR 19,000 </td>
                        </tr>
                        <tr>
                          <th>Margine:</th>
                          <td>INR 1500 (8%) </td>
                        </tr>
                        <tr>
                          <th>Interest Rate:</th>
                          <td> INR 1500 (8%)</td>
                        </tr>
                        <tr>
                          <th>Repayment Term:</th>
                          <td> 45 days</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Payment Date</h2>
                    <p>Sep 25, 2023</p>
                    <h2>Payment Method</h2>
                    <p>Direct Deposit</p>
                    <h2>Patron of the Payment</h2>
                    <p>Hospital 1</p>
                    <h2>Receipent of the Payment</h2>
                    <p>ProFinTech Technologies</p>
                    <h2>Repayment Schedule</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Due Date</th>
                        </tr>
                        <tr>
                          <td>Sep 29, 2023</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Payment Agreement</h2>
                    <p>
                      Please review and accept the{" "}
                      <a href="#">Payment Agreement</a> for more information.
                    </p>
                    <h2>Contact Information</h2>
                    <p>
                      If you have any questions or need assistance, please
                      contact our customer service at 1-800-123-4567 or email us
                      at info@example.com.
                    </p>
                    <div className="Payment-confirmation">
                      <h2>Payment Confirmation</h2>
                      <p>
                        payment has been made by the Hospital 1 to ProFinTech
                        Technologies. Confirmation Number: ABD258
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

export default Finance_payment;

const Finance1 = styled.div`
  margin-left: 28vh;
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

 
  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    // border-radius: 5px;
    display: inline-block;
    // margin-left: 20px;
    width: 300px;
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
    width: 300px;
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
    padding:50px;
    
  }
`;
