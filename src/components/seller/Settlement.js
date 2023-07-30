import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import NavbarSide from "../pages/NavbarSide";
import Footer from "../pages/Footer";

function Settlement() {
  const navigate = useNavigate();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  const handleToogle = () => {
    setOpen1(!open1);
  };

  const handleToogle2 = () => {
    setOpen2(!open2);
  };

  const handleToogle3 = () => {
    setOpen3(!open3);
  };
  const handleToogle4 = () => {
    setOpen4(!open4);
  };
  const handleToogle5 = () => {
    setOpen5(!open5);
  };
  const handleToogle6 = () => {
    setOpen6(!open6);
  };
  const handleToogle7 = () => {
    setOpen7(!open7);
  };
  const handleToogle8 = () => {
    setOpen8(!open8);
  };

  return (
    <>
      <Navbarseller />
      <NavbarSide />
      <Request1>
        <div className="button">
          <button
            className="btn"
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
          <button
            className="btn"
            onClick={() => {
              navigate("/shipment");
            }}
          >
            Shipment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn1"
            onClick={() => {
              navigate("/settlement");
            }}
          >
            Settlement
          </button>
        </div>

        <div>
          <div className="pheading">
            <div style={{ fontSize: "34px", marginLeft: "65vh" }}>
              Settlement details
            </div>
            <div style={{ fontSize: "24px", marginLeft: "38vh" }}>
              ProFinTech Technologies made the settlement as credit Period is
              coming to an end.
            </div>
          </div>

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
                {!open2 ? (
                  <div>
                    <div className="mainheading" style={{ background: "blue" }}>
                      <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "gray" }}
                    >
                      <div style={{ marginLeft: "15px" }}>Liqui loans NBFC</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle2}
                          style={{
                            background: "gray",
                            border: "2px solid gray",
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
                      style={{ background: "blue", width: "150vh" }}
                    >
                      <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "blue", width: "140vh" }}
                    >
                      <div style={{ marginLeft: "15px" }}>Liqui loans NBFC</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle2}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div className="bwcontent">
                      <div
                        className="Settlement details"
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
                          <a href="#">Settlement Agreement</a> for more
                          information.
                        </p>
                        <h2>Contact Information</h2>
                        <p>
                          If you have any questions or need assistance, please
                          contact our customer service at 1-800-123-4567 or
                          email us at info@example.com.
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
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="content">
            {!open3 ? (
              <div className="mainheading" style={{ background: "gray" }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle3}
                    style={{ background: "gray", border: "2px solid gray" }}
                  >
                    🔽
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {!open4 ? (
                  <div>
                    <div className="mainheading" style={{ background: "blue" }}>
                      <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle3}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "gray" }}
                    >
                      <div style={{ marginLeft: "15px" }}>ICICI Bank</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle4}
                          style={{
                            background: "gray",
                            border: "2px solid gray",
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
                      style={{ background: "blue", width: "150vh" }}
                    >
                      <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle3}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "blue", width: "140vh" }}
                    >
                      <div style={{ marginLeft: "15px" }}>ICICI Bank</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle4}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div className="bwcontent">
                      <div className="Settlement details">
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
                              <td>Hospital 2</td>
                            </tr>
                            <tr>
                              <th>Contact Details:</th>
                              <td>Hospital 2.doe@example.com</td>
                            </tr>
                            <tr>
                              <th>Identification:</th>
                              <td>SSN: 123-45-5919</td>
                            </tr>
                          </tbody>
                        </table>
                        <h2> lender Information</h2>
                        <table>
                          <tbody>
                            <tr>
                              <th>Name:</th>
                              <td>ICICI Bank</td>
                            </tr>
                            <tr>
                              <th>Contact Details:</th>
                              <td>ICICI.doe@example.com</td>
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
                              <td>INR 1,19,000</td>
                            </tr>
                            <tr>
                              <th>Margine:</th>
                              <td>INR 7,000 (5%)</td>
                            </tr>
                            <tr>
                              <th>Interest Rate:</th>
                              <td> INR 7000 (10%)</td>
                            </tr>
                            <tr>
                              <th>Repayment Term:</th>
                              <td> 45 days</td>
                            </tr>
                            <tr>
                              <th>Payment loyality for Trade partner</th>
                              <td>INR 180.00 </td>
                            </tr>
                            <tr>
                              <th>ProFinTech technology charges:</th>
                              <td> INR 180.00 </td>
                            </tr>
                            <tr>
                              <th>Payment to Anchor:</th>
                              <td> INR 8,640.00 </td>
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
                        <p>ICIC Bank</p>
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
                          <a href="#">Settlement Agreement</a> for more
                          information.
                        </p>
                        <h2>Contact Information</h2>
                        <p>
                          If you have any questions or need assistance, please
                          contact our customer service at 1-800-123-4567 or
                          email us at info@example.com.
                        </p>
                        <div className="Settlement-confirmation">
                          <h2>Settlement Confirmation</h2>
                          <p>
                            Settlement has been made by the ProFinTech to ICICI
                            Bank. Confirmation Number: ABD2513
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="content">
            {!open5 ? (
              <div className="mainheading" style={{ background: "gray" }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 3</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle5}
                    style={{ background: "gray", border: "2px solid gray" }}
                  >
                    🔽
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {!open6 ? (
                  <div>
                    <div className="mainheading" style={{ background: "blue" }}>
                      <div style={{ marginLeft: "5px" }}>Subgroup 3</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle5}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "gray" }}
                    >
                      <div style={{ marginLeft: "15px" }}>ICICI Bank</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle6}
                          style={{
                            background: "gray",
                            border: "2px solid gray",
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
                      style={{ background: "blue", width: "150vh" }}
                    >
                      <div style={{ marginLeft: "5px" }}>Subgroup 3</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle5}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "blue", width: "140vh" }}
                    >
                      <div style={{ marginLeft: "15px" }}>ICICI Bank</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle6}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div className="bwcontent">
                      <div className="Settlement details">
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
                              <td>Hospital 3</td>
                            </tr>
                            <tr>
                              <th>Contact Details:</th>
                              <td>Hospital 3.doe@example.com</td>
                            </tr>
                            <tr>
                              <th>Identification:</th>
                              <td>SSN: 123-45-5373</td>
                            </tr>
                          </tbody>
                        </table>
                        <h2> lender Information</h2>
                        <table>
                          <tbody>
                            <tr>
                              <th>Name:</th>
                              <td>ICICI Bank</td>
                            </tr>
                            <tr>
                              <th>Contact Details:</th>
                              <td>ICICI.doe@example.com</td>
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
                              <td>INR 1,33,000</td>
                            </tr>
                            <tr>
                              <th>Margine:</th>
                              <td>INR 7,000 (5%)</td>
                            </tr>
                            <tr>
                              <th>Interest Rate:</th>
                              <td> INR 7000 (10%)</td>
                            </tr>
                            <tr>
                              <th>Repayment Term:</th>
                              <td> 45 days</td>
                            </tr>
                            <tr>
                              <th>Payment loyality for Trade partner</th>
                              <td>INR 0 </td>
                            </tr>
                            <tr>
                              <th>ProFinTech technology charges:</th>
                              <td> INR 0 </td>
                            </tr>
                            <tr>
                              <th>Payment to Anchor:</th>
                              <td> INR 0 </td>
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
                        <p>ICICI Bank</p>
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
                          <a href="#">Settlement Agreement</a> for more
                          information.
                        </p>
                        <h2>Contact Information</h2>
                        <p>
                          If you have any questions or need assistance, please
                          contact our customer service at 1-800-123-4567 or
                          email us at info@example.com.
                        </p>
                        <div className="Settlement-confirmation">
                          <h2>Settlement Confirmation</h2>
                          <p>
                            Settlement has been made by ProFinTech Technologies
                            to ICICI Bank. Confirmation Number: ABD2514
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="content">
            {!open7 ? (
              <div className="mainheading" style={{ background: "gray" }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 4</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle7}
                    style={{ background: "gray", border: "2px solid gray" }}
                  >
                    🔽
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {!open8 ? (
                  <div>
                    <div className="mainheading" style={{ background: "blue" }}>
                      <div style={{ marginLeft: "5px" }}>Subgroup 4</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle7}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "gray" }}
                    >
                      <div style={{ marginLeft: "15px" }}>IDFC Bank</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle8}
                          style={{
                            background: "gray",
                            border: "2px solid gray",
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
                      style={{ background: "blue", width: "150vh" }}
                    >
                      <div style={{ marginLeft: "5px" }}>Subgroup 4</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle7}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "blue", width: "140vh" }}
                    >
                      <div style={{ marginLeft: "15px" }}>IDFC Bank</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle8}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div className="bwcontent">
                      <div className="Settlement details">
                        <h1>SettlementInformation</h1>
                        <h2> Seller Information</h2>
                        <table>
                          <tbody>
                            <tr>
                              <th>Name:</th>
                              <td>Anchor trader</td>
                            </tr>
                            <tr>
                              <th>Contact Details:</th>
                              <td>Anchor trader.doe@example.com</td>
                            </tr>
                            <tr>
                              <th>Identification:</th>
                              <td>SSN: 123-45-5454</td>
                            </tr>
                          </tbody>
                        </table>
                        <h2> Buyer Information</h2>
                        <table>
                          <tbody>
                            <tr>
                              <th>Name:</th>
                              <td>Medical Univ. 1</td>
                            </tr>
                            <tr>
                              <th>Contact Details:</th>
                              <td>Medical Univ. 1.doe@example.com</td>
                            </tr>
                            <tr>
                              <th>Identification:</th>
                              <td>SSN: 123-45-2486</td>
                            </tr>
                          </tbody>
                        </table>
                        <h2> lender Information</h2>
                        <table>
                          <tbody>
                            <tr>
                              <th>Name:</th>
                              <td>ICICI Bank</td>
                            </tr>
                            <tr>
                              <th>Contact Details:</th>
                              <td>ICICI.doe@example.com</td>
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
                              <td>INR 1,28,000</td>
                            </tr>
                            <tr>
                              <th>Margine:</th>
                              <td>INR 3,000 (2.3%)</td>
                            </tr>
                            <tr>
                              <th>Interest Rate:</th>
                              <td> INR 3,000 (10%)</td>
                            </tr>
                            <tr>
                              <th>Repayment Term:</th>
                              <td> 45 days</td>
                            </tr>
                            <tr>
                              <th>Payment loyality for Trade partner</th>
                              <td>INR 3,200.00 </td>
                            </tr>
                            <tr>
                              <th>ProFinTech technology charges:</th>
                              <td> INR 3,200.00 </td>
                            </tr>
                            <tr>
                              <th>Payment to Anchor:</th>
                              <td> INR 15,600.00 </td>
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
                        <p>IDFC Bank</p>
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
                          <a href="#">Settlement Agreement</a> for more
                          information.
                        </p>
                        <h2>Contact Information</h2>
                        <p>
                          If you have any questions or need assistance, please
                          contact our customer service at 1-800-123-4567 or
                          email us at info@example.com.
                        </p>
                        <div className="Settlement-confirmation">
                          <h2>Settlement Confirmation</h2>
                          <p>
                            Settlement has been made by ProFinTech Technologies
                            to IDFC Bank. Confirmation Number: ABD2515
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        


      </Request1>
      <div style={{ marginTop: "65vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Settlement;

const Request1 = styled.div`
  margin-left: 28vh;

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

  .text-fields {
    display: none;
    margin-top: 10px;
  }
  .text-field {
    margin-bottom: 10px;
  }
  .button {
    color: #007bff;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 20px;
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
  .disbursement-confirmation {
    background-color: #dff0d8;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .Disbursement details {
    display: none;
    margin-top: 10px;
  }

  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
    font-size: 20px;
    margin-top: 20px;
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
    margin-top: 25vh;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  .content {
    margin-left: 20px;
    margin-top: 20px;
  }
  .main-content {
    padding: 20px;
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
