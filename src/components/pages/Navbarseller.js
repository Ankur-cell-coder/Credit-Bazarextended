import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAuth } from "../../context/auth";
import { BiLogOut, BiUser } from "react-icons/bi";

function Navbarseller() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [showOption, setShowOption] = useState(false);

  const handleClick = () => {
    setShowOption(!showOption);
  };
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert("Logout successfully");
    navigate("/user-profile");
  };

  const handleChange = (e) => {
    if (e.currentTarget.value == "merchants") {
      // const win = window.open(
      //   "http://localhost:3000/financesdashboard",
      //   "_blank"
      // );
      // if (win != null) {
      //   win.focus();
      // }
      navigate("/financesdashboard");
    } else if (e.currentTarget.value == "buyer") {
      // const win = window.open(
      //   "http://localhost:3000/buyersdashboard",
      //   "_blank"
      // );
      // if (win != null) {
      //   win.focus();
      // }
      navigate("/buyersdashboard");
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
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
            <option value="merchants">Finance Partner</option>
          </select>
        </div>

        {showOption ? (
          <div>
            <div>
              <button onClick={handleClick} className="login">
                <BiUser style={{ width: "40px", height: "40px" }} />
              </button>
            </div>
            <div className="onclickprofile">
              <div>
                <button
                  onClick={() => {
                    navigate("/user-profile");
                  }}
                  style={{
                    width: "200px",
                    height: "35px",
                    fontSize: "18px",
                    border: "0px solid white",
                    background: "white",
                    borderRadius: "10px",
                  }}
                >
                  <BiUser /> User Detail
                </button>
              </div>
              <div>
                <button
                  onClick={handleLogout}
                  style={{
                    width: "200px",
                    height: "35px",
                    fontSize: "18px",
                    border: "0px solid white",
                    background: "white",
                    borderRadius: "10px",
                  }}
                >
                  <BiLogOut style={{ marginRight: "40px" }} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={handleClick} className="login">
              <BiUser style={{ width: "40px", height: "40px" }} />
            </button>
          </div>
        )}
      </div>
    </Navbarseller1>
  );
}

export default Navbarseller;

const Navbarseller1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1100px;
  margin-top: 8vh;
  @media only screen and (min-width: 1800px) {
    margin-left: 1400px;
  }

  position: fixed;

  .onclickprofile {
    border: 2px solid black;
    width: 200px;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background: white;
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
    margin-top: -60px;
  }
  .login {
    background: white;
    margin-top: -20px;
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
