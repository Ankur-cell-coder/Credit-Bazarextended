import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbarseller from "./pages/Navbarseller";
import { useAuth } from "../context/auth";
import Footer from "./pages/Footer";
import pimg from "./images/Prime Textiles.jpg";

function Profile() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const [toogleState, setToogleState] = useState(1);

  const toogleTab = (ind) => {
    console.log(ind);
    setToogleState(ind);
  };

  //personal details section
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companygst, setCompanyGst] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //bank details section
  const [accountNo, setAccountNo] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [receipientName, setReceipientName] = useState("");
  const [bankName, setBankName] = useState("");
  const [branch, setBranch] = useState("");

  const [defaultRole, setDefaultRole] = useState("");

  const handleNavigate = (res) => {
    if (defaultRole === "seller") {
      navigate("/sellersdashboard");
    } else if (defaultRole === "buyer") {
      navigate("/buyersdashboard");
    } else {
      navigate("/financesdashboard");
    }
  };
  console.log(auth.user.id);
  const id = auth.user.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:3005/user/detail", {
          id,
        });
        console.log(res.data);
        if (res.data.user) {
          setName(res.data.user.firstName + " " + res.data.user.lastName);
          setCompanyName(res.data.user.userDetails.companyName);
          setCompanyGst(res.data.user.userDetails.companygst);
          setPhone(res.data.user.number);
          setEmail(res.data.user.email);

          setAccountNo(res.data.user.userDetails.accountNo);
          setIfscCode(res.data.user.userDetails.ifscCode);
          setReceipientName(res.data.user.userDetails.receipientName);
          setBankName(res.data.user.userDetails.bankName);
          setBranch(res.data.user.userDetails.branch);
          setDefaultRole(res.data.user.userDetails.defaultRole);
        }
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbarseller />

      <User1>
        <div>
         <img src={pimg} className="pimg"/>
        </div>

        <div className="allcont">
        <div className="bloc-tabs">
          <div
            className={toogleState == 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toogleTab(1)}
          >
          Overview
          </div>
          <div
            className={toogleState == 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toogleTab(2)}
          >
           Edit Profile
          </div>
          <div
            className={toogleState == 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toogleTab(3)}
          >
           Change Password
          </div>
          <div
            className={toogleState == 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toogleTab(4)}
          >
           KYC
          </div>
        </div>

        <div className="content-tabs">
          <div className={toogleState == 1 ? "contents active-content" : "contents"}>
            
            <div className="section1">
            <div style={{fontSize:"32px"}}>Profile Details</div>
            <hr/>
            <div className="pdetailovr">

              <div className="items">
                <span>Full Name: </span> {name}
              </div>
              <div className="items">
                <span>Company: </span> {companyName}
              </div>
              <div className="items">
                <span>Persona: </span> {defaultRole}
              </div>
              <div className="items">
                <span>Country: </span> India
              </div>
              <div className="items">
                <span>Address: </span> Plot No. 245, IDA Rampur, Warangal,
                <p style={{marginLeft:"180px"}}>Telangana, 506151, India</p>
              </div>
              <div className="items">
                <span>Phone: </span> {phone}
              </div>
              <div className="items">
                <span>Email: </span> {email}
              </div>
              <div className="items">
                <span>Bank Name: </span> {bankName} Bank
              </div>
              <div className="items">
                <span>Bank Account: </span> 9846754321
              </div>
              <div className="items">
                <span>Branch: </span> {branch}
              </div>
              <div className="items">
                <span>IFSC Code: </span> {ifscCode}
              </div>
              <div className="items">
                <span>Receiptient: </span> Prime Textiles
              </div>




            </div>
            </div>
           
          </div>

          <div className={toogleState == 2 ? "contents active-content" : "contents"}>
            
            <div className="formwrap">
              <form className="form">
                <div className="pimgcont">
                  <img src={pimg} />
                </div>

                <div className="pdetail">
                  <label htmlFor="name">Full Name:</label>
                  <br />
                  <input
                    type="name"
                    // value={name}
                    // readOnly
                    id="name"
                    name="name"
                    required
                  />
                  <br />

                  <label htmlFor="companyName">Comapny Name:</label>
                  <br />
                  <input
                    type="companyName"
                    // value={companyName}
                    // readOnly
                    id="companyName"
                    name="companyName"
                  />
                  <br />
                  <label htmlFor="companyName">Country:</label>
                  <br />
                  <input
                    type="companyName"
                    // value={companyName}
                    // readOnly
                    id="companyName"
                    name="companyName"
                  />
                  <br />
                  <label htmlFor="companyName">Address:</label>
                  <br />
                  <input
                    type="companyName"
                    // value={companyName}
                    // readOnly
                    id="companyName"
                    name="companyName"
                  />
                  <br />

                  <label htmlFor="companygst">Comapny GST ID:</label>
                  <br />
                  <input
                    type="companygst"
                    // value={companygst}
                    // readOnly
                    //   onChange={(e) => setCompanyGst(e.target.value)}
                    id="companygst"
                    name="companygst"
                  />
                  <br />

                  <label htmlFor="phone">Phone Number:</label>
                  <br />
                  <input
                    type="phone"
                    // value={phone}
                    // readOnly
                    // setPhone(e.target.value)}
                    id="phone"
                    name="phone"
                    required
                  />
                  <br />

                  <label htmlFor="email">Email:</label>
                  <br />
                  <input
                    type="email"
                    // value={email}
                    // readOnly
                    // setemail(e.target.value)}
                    id="email"
                    name="email"
                    required
                  />
                  <br />
                </div>

                {/* ///Bank detail section///////////////// */}
                <div className="bdetails">
                  <h2>Bank Details</h2>
                  <label htmlFor="accountNo">Account Number:</label>
                  <br />
                  <input
                    type="accountNo"
                    // value={accountNo}
                    // readOnly
                    //   onChange={(e) => setAccountNo(e.target.value)}
                    id="accountNo"
                    name="accountNo"
                    required
                  />
                  <br />

                  <label htmlFor="ifscCode">IFSC Code:</label>
                  <br />
                  <input
                    type="ifscCode"
                    // value={ifscCode}
                    // readOnly
                    //   onChange={(e) => setIfscCode(e.target.value)}
                    id="ifscCode"
                    name="ifscCode"
                    required
                  />
                  <br />
                  <label htmlFor="ifscCode">Receipient:</label>
                  <br />
                  <input
                    type="ifscCode"
                    // value={ifscCode}
                    // readOnly
                    //   onChange={(e) => setIfscCode(e.target.value)}
                    id="ifscCode"
                    name="ifscCode"
                    required
                  />
                  <br />

                  <label htmlFor="receipientName">Receipient Name:</label>
                  <br />
                  <input
                    type="receipientName"
                    // value={receipientName}
                    // readOnly
                    //   onChange={(e) => setReceipientName(e.target.value)}
                    id="receipientName"
                    name="receipientName"
                    required
                  />
                  <br />

                  <label htmlFor="bankName">Bank Name:</label>
                  <br />
                  <input
                    type="bankName"
                    // value={bankName}
                    // readOnly
                    id="bankName"
                    name="bankName"
                    required
                  />
                  <br />

                  <label htmlFor="branch">Branch:</label>
                  <br />
                  <input
                    type="branch"
                    // value={branch}
                    // readOnly
                    id="branch"
                    name="branch"
                    required
                  />
                  <br />
                </div>

                <div className="persona">
                  <h2>Persona</h2>
                  <label htmlFor="defaultRole">Your Default Persona:</label>
                  <br />
                  <input
                    type="defaultRole"
                    // value={defaultRole}
                    // readOnly
                    id="defaultRole"
                    name="defaultRole"
                    required
                  />
                  <button onClick={handleNavigate} className="button">
                    Back To DashBoard
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={toogleState == 3 ? "contents active-content" : "contents"}>
            
            <div className="formwrap">
              <form className="form">
                

                <div className="pdetail">
                  <label htmlFor="name">Current Password:</label>
                  <br />
                  <input
                    type="name"
                    // value={name}
                    // readOnly
                    id="name"
                    name="name"
                    required
                  />
                  <br />

                  <label htmlFor="companyName">New Password:</label>
                  <br />
                  <input
                    type="companyName"
                    
                    id="companyName"
                    name="companyName"
                  />
                  <br />
                  <label htmlFor="companyName">Re-Enter New Password:</label>
                  <br />
                  <input
                    type="companyName"
                    
                    id="companyName"
                    name="companyName"
                  />
                  <br />
                  
                  <button onClick={handleNavigate} className="button">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className={toogleState == 4 ? "contents active-content" : "contents"}>
            
            <div className="section1">
            <div style={{fontSize:"32px"}}>KYC Details</div>
            <hr/>
            <div className="pdetailovr">

              <div className="items">
                <span>Company Identification Number (CIN): </span> 123
              </div>
              <div className="items">
                <span>Permanent Account Number (PAN): </span> ABC123456
              </div>
              <div className="items">
                <span>Goods and Services Tax Identification Number (GSTIN): </span> GSTIN123CD
              </div>
              <div className="items">
                <span>Udyam Registration Number: </span> Place Holder Text
              </div>
              <div className="items">
                <span>Aadhar Number: </span>Place Holder Text
               
              </div>
              <div className="items">
                <span>Passport Number: </span> Place Holder Text
              </div>
              <div className="items">
                <span>Voter ID: </span>Place Holder Text
              </div>
              <div className="items">
                <span>Driving Licenses: </span> Place Holder Text
              </div>
              <div className="items">
                <span>License Number: </span> Place Holder Text
              </div>
             


            </div>
            </div>
           
          </div>


        </div>
        </div>
      </User1>

      <Footer />
    </>
  );
}

export default Profile;

const User1 = styled.div`
  padding: 130px;
  display:flex;
  
  .allcont{
    border:2px solid black;
  }

   .section1{
    padding-left:80px;
    padding-right:80px;
    padding-bottom:30px;
    padding-top:30px;
   }

  span{
    color:blue;
    font-size:28px;
    margin-right:80px;
    margin-top:30px;
    
  }
  .items{
   font-size:26px;
   margin-bottom:30px;
  }

  .formwrap {
    max-width: 800px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin:65px;
  }

  .bloc-tabs{
    display:flex;
    font-size:28px;
    width:1000px;
    justify-content:space-between;
  }
  .tabs{
    display:flex;
    color:white;
    background:blue;
    width:250px;
    padding:10px;
    justify-content:center;
    border-left:2px solid black;

  }
  .active-tabs{
    background:orange;
  }
  

  .contents {
    display: none;
  }
  .active-content {
    display: block;
  }
  .pimg{
    border:2px solid black;
    width:400px;
    height:400px;
    border-radius:25px;
    margin-right:20px;
  }

  .pimgcont {
    display: flex;
    font-size: 32px;
    justify-content: center;
    color: blue;
  }

  .content {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .form {
    margin-bottom: 20px;
  }

  .pdetail h2,
  .bdetails h2,
  .persona h2 {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  label {
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 35%;
  }

  button[type="submit"]:hover {
    background-color: #45a049;
  }

  .pdetail,
  .bdetails,
  .persona {
    margin-bottom: 30px;
  }
`;
