import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAuth } from "../../context/auth";
import { BiLogOut, BiUser } from "react-icons/bi";

function Navbarfinancer() {
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
    if (e.currentTarget.value == "buyer") {
      var currentURL = window.location.href;

      var urlSegments = currentURL.split("/");
      urlSegments.pop();
      var newURL = urlSegments.join("/");
      console.log(newURL);

      const win = window.open(
        `${newURL}/buyersdashboard`,
        "_blank"
      );
      if (win != null) {
        win.focus();
      }
     
    } else if (e.currentTarget.value == "seller") {
      
      var currentURL = window.location.href;

      var urlSegments = currentURL.split("/");
      urlSegments.pop();
      var newURL = urlSegments.join("/");
      console.log(newURL);

      const win = window.open(`${newURL}/sellersdashboard`, "_blank");
      if (win != null) {
        win.focus();
      }

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
            <option value="seller">Anchor Trader</option>
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
    </Navbarfinancer1>
  );
}

export default Navbarfinancer;

const Navbarfinancer1 = styled.div`
  display: flex;
  background: orange;
  flex-direction: column;
  justify-content: center;
  margin-left: 1100px;
  @media only screen and (min-width: 1800px) {
    margin-left: 1400px;
  }

  .rightsection {
    display: flex;
    width: 400px;
    margin-top: 45px;
    justify-content: space-between;
    position: fixed;
    top: 0px;
  }

  .options {
    width: 140px;
    height: 40px;
    font-size: 20px;
    border: 2px solid black;
    margin-top: -60px;
    position: sticky;
    top: 0px;
  }
  .login {
    width: 150px;
    height: 40px;
    font-size: 20px;
    margin-top: -60px;
    position: sticky;
    top: 0px;
  }
  .button {
    margin-left: 20px;
    margin-top: 15px;
    height: 36px;
    background: orange;
    border: 2px solid orange;
    width: 200px;
    font-size: 15px;
    position: sticky;
    top: 0px;
  }
`;
