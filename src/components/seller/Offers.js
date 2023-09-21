import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import NavbarSide from "../pages/NavbarSide";
import Footer from "../pages/Footer";
import finance from "../images/IKF Finance Limited.png";
import download from "../images/download.png";

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
          <div className="pheading" >
            <div style={{ fontSize: "34px", marginLeft: "65vh" }}>
              Received Offer details
            </div>
            <div style={{ fontSize: "24px", marginLeft: "52vh" }}>
              Lenders have placed offers for your request for finance.
            </div>
          </div>

          <div className="content" >
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

                    <div className="mainheading2">
                      <div>
                        <img src={finance} className="imga"/>
                      </div>
                      <div>
                        <div>Net Amount: 3,00,766.1</div>
                        <div>Interest p.a (%):8</div>
                        <div>Margin %: 25</div>
                        <div>Term (In days): 90</div>
                      </div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle2}
                          style={{ marginTop: "50px" }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                  
                  </div>
                ) : (
                  <div
                  
                  >
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

                    <div className="mainheading2">
                      <div>
                      <img src={finance} className="imga"/>
                      </div>
                      <div>
                        <div>Net Amount: 3,00,766.1</div>
                        <div>Interest p.a (%):8</div>
                        <div>Margin %: 25</div>
                        <div>Term (In days): 90</div>
                      </div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle2}
                          style={{ marginTop: "50px" }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    <div
                      style={{ height: 950, marginLeft: 10, display: "block", border: "2px solid black", padding: "30px",marginTop:"30px",width:"80%",marginLeft:"110px" }}
                    >
                      <br />
                      <h1 align="center">Requested Offer</h1>
                      <p>
                        <strong>Subgroup value (INR):</strong> 4,50,000
                      </p>
                      <p>
                        <strong>Requested amount (INR):</strong> 4,09,091 (The
                        offer is adjusted to the subgroup trade amount)
                      </p>
                      <p>
                        <strong>Margin (%):</strong> 25
                      </p>
                      <p>
                        <strong>Margin value (INR):</strong> 1,02,272.75
                      </p>
                      <p>
                        <strong>Amount after margin (INR):</strong> 3,06,818
                      </p>
                      <p>
                        <strong>Interest p.a (%):</strong> 8
                      </p>
                      <p>
                        <strong>Terms (In Days):</strong> 90
                      </p>
                      <p>
                        <strong>Interest value (INR):</strong> 6,052 (Interest
                        Value adjusted to Terms)
                      </p>
                      <p>
                        <strong>Net amount (INR):</strong> 3,00,766.1
                      </p>
                      <br />
                      <hr/>
                      <h1 align="center">Offer Placed</h1>
                      <p>
                        <strong>Subgroup value (INR):</strong> 4,50,000
                      </p>
                      <p>
                        <strong>Requested amount (INR):</strong> 4,09,091 (The
                        offer is adjusted to the subgroup trade amount)
                      </p>
                      <p>
                        <strong>Margin (%):</strong> 25
                      </p>
                      <p>
                        <strong>Margin value (INR):</strong> 1,02,272.75
                      </p>
                      <p>
                        <strong>Amount after margin (INR):</strong> 3,06,818
                      </p>
                      <p>
                        <strong>Interest p.a (%):</strong> 8
                      </p>
                      <p>
                        <strong>Terms (In Days):</strong> 90
                      </p>
                      <p>
                        <strong>Interest value (INR):</strong> 6,052 (Interest
                        Value adjusted to Terms)
                      </p>
                      <p>
                        <strong>Net amount (INR):</strong> 3,00,766.1
                      </p>
                      <hr />
                      <div className="text-center">
                        <button
                          className="btn btn-success"
                          onclick="acceptOffer(this)"
                          style={{ marginLeft: "40%" }}
                        >
                          Accept
                        </button>
                        <button
                          className="btn btn-danger"
                          onclick="declineOffer(this)"
                          style={{ marginLeft: "20px" }}
                        >
                          Decline
                        </button>
                        <p id="accept-message" style={{ color: "green" }} />
                      </div>
                    </div>

                  
                  </div>
                )}

              
                
                  {open5 ? (
                    <div>
                      <div className="mainheading2">
                      <div>
                      <img src={download} className="imga"/>
                      </div>
                      <div>
                        <div>Net Amount: 13456</div>
                        <div>Interest p.a (%):9</div>
                        <div>Margin %: 30</div>
                        <div>Term (In days): 45</div>
                      </div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle5}
                          style={{ marginTop: "50px" }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    <div style={{fontSize:"26px",border:"2px solid black",marginTop:"20px",padding:"30px",width:"80%",marginLeft:"110px"}}>
                      <div >
                        This is the content for Panel 2 inside Subgroup 2.
                      </div>
                      <br/>
                      <div>You can replace this with your actual content.</div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mainheading2">
                      <div>
                      <img src={download} className="imga"/>
                      </div>
                      <div>
                        <div>Net Amount: 13456</div>
                        <div>Interest p.a (%):9</div>
                        <div>Margin %: 30</div>
                        <div>Term (In days): 45</div>
                      </div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle5}
                          style={{ marginTop: "50px" }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    </div>
                  )}
                
              </div>
            )}
          </div>
        </div>

        <div className="content" >
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

                    <div className="mainheading2">
                      <div>
                        <img src={finance} className="imga"/>
                      </div>
                      <div>
                        <div>Net Amount: 4,01,396.9</div>
                        <div>Interest p.a (%):12</div>
                        <div>Margin %: 30</div>
                        <div>Term (In days): 90</div>
                      </div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle4}
                          style={{ marginTop: "50px" }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                  
                  </div>
                ) : (
                  <div
                  
                  >
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

                    <div className="mainheading2">
                      <div>
                      <img src={finance} className="imga"/>
                      </div>
                      <div>
                        <div>Net Amount: 4,01,396.9</div>
                        <div>Interest p.a (%):12</div>
                        <div>Margin %: 30</div>
                        <div>Term (In days): 90</div>
                      </div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle4}
                          style={{ marginTop: "50px" }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    <div
                      style={{ height: 950, marginLeft: 10, display: "block", border: "2px solid black", padding: "30px",marginTop:"30px",width:"80%",marginLeft:"110px" }}
                    >
                      <br />
                      <h1 align="center">Requested Offer</h1>
                      <p>
                        <strong>Subgroup value (INR):</strong> 6,50,000
                      </p>
                      <p>
                        <strong>Requested amount (INR):</strong> 5,09,099 (The
                        offer is adjusted to the subgroup trade amount)
                      </p>
                      <p>
                        <strong>Margin (%):</strong> 30
                      </p>
                      <p>
                        <strong>Margin value (INR):</strong> 1,77,272.7
                      </p>
                      <p>
                        <strong>Amount after margin (INR):</strong>4,13,636
                      </p>
                      <p>
                        <strong>Interest p.a (%):</strong> 12
                      </p>
                      <p>
                        <strong>Terms (In Days):</strong> 90
                      </p>
                      <p>
                        <strong>Interest value (INR):</strong> 12,239.90 (Interest
                        Value adjusted to Terms)
                      </p>
                      <p>
                        <strong>Net amount (INR):</strong> 4,09,396.9
                      </p>
                      <br />
                      <hr/>
                      <h1 align="center">Offer Placed</h1>
                      <p>
                        <strong>Subgroup value (INR):</strong> 6,50,000
                      </p>
                      <p>
                        <strong>Requested amount (INR):</strong> 5,09,099 (The
                        offer is adjusted to the subgroup trade amount)
                      </p>
                      <p>
                        <strong>Margin (%):</strong> 30
                      </p>
                      <p>
                        <strong>Margin value (INR):</strong> 1,77,272.7
                      </p>
                      <p>
                        <strong>Amount after margin (INR):</strong>4,13,636
                      </p>
                      <p>
                        <strong>Interest p.a (%):</strong> 12
                      </p>
                      <p>
                        <strong>Terms (In Days):</strong> 90
                      </p>
                      <p>
                        <strong>Interest value (INR):</strong> 12,239.90 (Interest
                        Value adjusted to Terms)
                      </p>
                      <p>
                        <strong>Net amount (INR):</strong> 4,09,396.9
                      </p>
                      <br />
                      <hr />
                      <div className="text-center">
                        <button
                          className="btn btn-success"
                          onclick="acceptOffer(this)"
                          style={{ marginLeft: "40%" }}
                        >
                          Accept
                        </button>
                        <button
                          className="btn btn-danger"
                          onclick="declineOffer(this)"
                          style={{ marginLeft: "20px" }}
                        >
                          Decline
                        </button>
                        <p id="accept-message" style={{ color: "green" }} />
                      </div>
                    </div>

                  
                  </div>
                )}

              
                
                  {open6 ? (
                    <div>
                      <div className="mainheading2">
                      <div>
                      <img src={download} className="imga"/>
                      </div>
                      <div>
                        <div>Net Amount: 13456</div>
                        <div>Interest p.a (%):9</div>
                        <div>Margin %: 30</div>
                        <div>Term (In days): 45</div>
                      </div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle6}
                          style={{ marginTop: "50px" }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    <div style={{fontSize:"26px",border:"2px solid black",marginTop:"20px",padding:"30px",width:"80%",marginLeft:"110px"}}>
                      <div >
                        This is the content for Panel 2 inside Subgroup 2.
                      </div>
                      <br/>
                      <div>You can replace this with your actual content.</div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mainheading2">
                      <div>
                      <img src={download} className="imga"/>
                      </div>
                      <div>
                        <div>Net Amount: 13456</div>
                        <div>Interest p.a (%):9</div>
                        <div>Margin %: 30</div>
                        <div>Term (In days): 45</div>
                      </div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle6}
                          style={{ marginTop: "50px" }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    </div>
                  )}
                
              </div>
            )}
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
  .imga{
    margin-left:50px;
    margin-top:40px;
  }

  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    display: inline-block;
    width: 250px;
    margin-top: 20vh;
  }
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;

    width: 250px;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  .content {
    margin-left: 20px;
    margin-top: 20px;
    padding:10px;
    width:95%;
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
    width: 150vh;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    border: 2px solid gray;
  }
  .mainheading2 {
    padding-top: 20px;
    font-size: 27px;
    margin-top: 20px;
    color: black;
    margin-left: 7.5vh;
    width: 140vh;
    height: 18vh;
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
  }
  .content {
    // border: 2px solid red;
  }
  .btnn {
    border: 2px solid blue;
    width: 200px;
    height: 40px;
    margin-right: 30px;
    border-raidus: 10px;
    color: white;
    background: blue;
    font-size: 26px;
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
