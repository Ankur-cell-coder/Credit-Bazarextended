import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import NavbarSide from "../pages/NavbarSide";
import Footer from "../pages/Footer";

function Offers() {
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
            className="btn1"
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
            className="btn"
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
              Received Offer details
            </div>
            <div style={{ fontSize: "24px", marginLeft: "52vh" }}>
              Lenders have placed offers for your request for finance.
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
                      <div className="items">
                        <div className="item"> Offered amount :</div>
                        <div>
                          <input
                            placeholder="INR 20,000"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Margin:</div>
                        <div>
                          <input
                            placeholder="INR 1500 (7.89%)"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Interest:</div>
                        <div>
                          <input
                            placeholder="INR 1500(10%)"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Term (days) :</div>
                        <div>
                          <input
                            placeholder="45 days"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <button className="btn" style={{ marginLeft: "40%" }}>
                      Accept Offer
                    </button>
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
                      <div className="items">
                        <div className="item"> Value of subgroup:</div>
                        <div>
                          <input
                            placeholder="INR 1,40,000.00"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Offered amount :</div>
                        <div>
                          <input
                            placeholder="INR 1,19,000.00"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Margin:</div>
                        <div>
                          <input
                            placeholder="INR 7,000 (5%)"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Interest:</div>
                        <div>
                          <input
                            placeholder="INR 7,000 (10%)"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Term (days) :</div>
                        <div>
                          <input
                            placeholder="45 days"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <button className="btn" style={{ marginLeft: "40%" }}>
                      Accept Offer
                    </button>
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
                      <div className="items">
                        <div className="item"> Value of subgroup:</div>
                        <div>
                          <input
                            placeholder="INR 1,40,000.00"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Offered amount :</div>
                        <div>
                          <input
                            placeholder="INR 1,33,000.00"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Margin:</div>
                        <div>
                          <input
                            placeholder="INR 7,000 (5%)"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Interest:</div>
                        <div>
                          <input
                            placeholder="INR 7,000 (10%)"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Term (days) :</div>
                        <div>
                          <input
                            placeholder="45 days"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <button className="btn" style={{ marginLeft: "40%" }}>
                      Accept Offer
                    </button>
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
                      <div className="items">
                        <div className="item"> Value of subgroup:</div>
                        <div>
                          <input
                            placeholder="INR 1,60,000.00"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Offered amount :</div>
                        <div>
                          <input
                            placeholder="INR 1,28,000.00"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Margin:</div>
                        <div>
                          <input
                            placeholder="INR 3000 (2.3%)"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Interest:</div>
                        <div>
                          <input
                            placeholder="INR 3000(10%)"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>

                      <div className="items">
                        <div className="item"> Term (days) :</div>
                        <div>
                          <input
                            placeholder="45 days"
                            style={{ fontSize: "26px" }}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <button className="btn" style={{ marginLeft: "40%" }}>
                      Accept Offer
                    </button>
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

export default Offers;

const Request1 = styled.div`
  margin-left: 28vh;

  .items {
    display: flex;
    margin-left: 50px;
    margin-top: 20px;
  }

  .item {
    font-size: 26px;
    margin-right: 30px;
  }

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
