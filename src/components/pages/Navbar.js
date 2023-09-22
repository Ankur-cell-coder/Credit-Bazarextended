import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { BiLogOut, BiUser } from "react-icons/bi";
import "./Nav.css";

function Navbar() {
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
      var currentURL = window.location.href;

      var urlSegments = currentURL.split("/");
      urlSegments.pop();
      var newURL = urlSegments.join("/");
      console.log(newURL);

      const win = window.open(`${newURL}/financesdashboard`, "_blank");
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
    <div className="navcontent">
      <div className="rightsection">
      <div>
          <select
            id="option"
            value="buyer"
            onChange={(e) => handleChange(e)}
            className="options"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Anchor Trader</option>
            <option value="merchants">Finance Partner</option>
          </select>
        </div>
        {showOption ? (
          <div>
            <div style={{marginLeft:"234px"}}>
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
    </div>
  );
}

export default Navbar;

