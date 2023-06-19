import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbarseller from "./pages/Navbarseller";
import { useAuth } from "../context/auth";
import Footer from "./pages/Footer";

function Profile() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

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
        if(res.data.user){
        setName(res.data.user.firstName+" "+res.data.user.lastName);
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
        <div className="formwrap">
          <div className="content">Welcome To User Profile Page!</div>

          <form className="form">
            {/* //personal details section */}
            <div className="pdetail">
              <h2>Personal Details:</h2>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="name"
                value={name}
                readOnly
                id="name"
                name="name"
                required
              />
              <br />

              <label htmlFor="companyName">Comapny Name:</label>
              <br />
              <input
                type="companyName"
                value={companyName}
                //   onChange={(e) => setCompanyName(e.target.value)}
                readOnly
                id="companyName"
                name="companyName"
              />
              <br />

              <label htmlFor="companygst">Comapny GST ID:</label>
              <br />
              <input
                type="companygst"
                value={companygst}
                readOnly
                //   onChange={(e) => setCompanyGst(e.target.value)}
                id="companygst"
                name="companygst"
              />
              <br />

              <label htmlFor="phone">Phone Number:</label>
              <br />
              <input
                type="phone"
                value={phone}
                readOnly
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
                value={email}
                readOnly
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
                value={accountNo}
                readOnly
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
                value={ifscCode}
                readOnly
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
                value={receipientName}
                readOnly
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
                value={bankName}
                readOnly
                id="bankName"
                name="bankName"
                required
              />
              <br />

              <label htmlFor="branch">Branch:</label>
              <br />
              <input
                type="branch"
                value={branch}
                readOnly
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
                value={defaultRole}
                readOnly
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
      </User1>
      <Footer/>
    </>
  );
}

export default Profile;

const User1 = styled.div`
  padding: 40px;
  .formwrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
