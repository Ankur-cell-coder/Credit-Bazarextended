import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAuth } from "../../context/auth";

function Navbarseller() {
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
      //  navigate("/sellersdashboard");
    } else if (e.currentTarget.value == "buyer") {
      const win = window.open(
        "http://localhost:3000/buyersdashboard",
        "_blank"
      );
      if (win != null) {
        win.focus();
      }
      //  navigate("/sellersdashboard");
    }
  };

  return (
    <Navbarseller1>
      <div className="rightsection">
        <div>
          <select
            id="option"
            value="seller"
            onChange={(e) => handleChange(e)}
            className="options"
          >
            <option value="seller">Sellers</option>
            <option value="buyer">Buyers</option>
            <option value="merchants">Finances</option>
          </select>
        </div>

        <div>
          <button onClick={handleClick} className="login">
            Logout
          </button>
        </div>
      </div>
    </Navbarseller1>
  );
}

export default Navbarseller;

const Navbarseller1 = styled.div`
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
