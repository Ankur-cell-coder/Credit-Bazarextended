import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAuth } from "../../context/auth";

function Navbarfinancer() {
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
    if (e.currentTarget.value == "buyer") {
        const win = window.open(
          "http://localhost:3000/buyersdashboard",
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
    <Navbarfinancer1>
      <div className="rightsection">
        <div>
          <select
            id="option"
            value="merchants"
            onChange={(e) => handleChange(e)}
            className="options"
          >
             <option value="merchants">Finance Partner</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
           
          </select>
        </div>

        <div>
          <button onClick={handleClick} className="login">
            Logout
          </button>
        </div>
      </div>
    </Navbarfinancer1>
  );
}

export default Navbarfinancer;

const Navbarfinancer1 = styled.div`
display: flex;
background:orange;
flex-direction: column;
justify-content: center;
margin-left: 1100px;
@media only screen and (min-width: 1800px){
  margin-left:1400px;
}
position: sticky;

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
