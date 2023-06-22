import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAuth } from "../../context/auth";

function Navbar() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert("Logout successfully");
    navigate("/");
  };

  const handleChange = (e) => {
    if (e.currentTarget.value == "merchants") {
      const win = window.open(
        "http://localhost:3000/financesdashboard",
        "_blank"
      );
      if (win != null) {
        win.focus();
      }
      // navigate("/buyersdashboard");
    } else if (e.currentTarget.value == "seller") {
      const win = window.open(
        "http://localhost:3000/sellersdashboard",
        "_blank"
      );
      if (win != null) {
        win.focus();
      }
      // navigate("/buyersdashboard");
    }
  };

  return (
    <Navbar1>
      <div className="rightsection">
        <div>
          <select
            id="option"
            value="buyer"
            onChange={(e) => handleChange(e)}
            className="options"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="merchants">Finance Partner</option>
          </select>
        </div>

        <div>
          <button onClick={handleClick} className="login">
            Logout
          </button>
        </div>
      </div>
    </Navbar1>
  );
}

export default Navbar;

const Navbar1 = styled.div`
display: flex;
background:orange;
flex-direction: column;
justify-content: center;
margin-left: 1100px;
@media only screen and (min-width: 1800px){
  margin-left:1400px;
}

.rightsection {
  display: flex;
  width: 400px;
  margin-top: -30px;
  justify-content: space-between;
}

.options {
  width: 140px;
  height: 40px;
  font-size: 20px;
  border: 2px solid black;
  margin-top:-60px;
}
.login {
  width: 150px;
  height: 40px;
  font-size: 20px;
  margin-top:-60px;
}
.button {
  margin-left: 20px;
  margin-top: 15px;
  height: 36px;
  background: orange;
  border: 2px solid orange;
  width: 200px;
  font-size: 15px;
}
`;
