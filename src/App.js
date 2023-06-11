import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import UserProfile from "./components/auth/UserProfile";
import Tdashboard from "./components/traders/Tdashboard";
import Bdashboard from "./components/buyers/Bdashboard";
import Sdashboard from "./components/seller/Sdashboard";
import { styled } from "styled-components";
import { useState } from "react";
import { useAuth } from "./context/auth";

function App() {
   
  const [auth,setAuth]=useAuth();

  const navigate =useNavigate();
  const handleClick = () => {
    alert("Logout successfully");
    navigate("/");
  };

  const [option, setOption] = useState("seller");
  const handleChange = (e) => {
    setOption(e.currentTarget.value);
  }

  
  

  return (
    <App1>
      <div className="topcomp">
      <div className="leftcontent">Credit Bazar</div>

      <div className="rightsection">
        <div className="options">
          <select id="users" onChange={e => handleChange(e)}>
            <option value="seller">Seller</option>
            <option value="buyer">Buyers</option>
            <option value="merchants">Merchants</option>
          </select>
        </div>
        <div className="login">
          <button onClick={handleClick}>Logout</button>
        </div>
      </div>
      </div>

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/tdashboard" element={<Tdashboard option={option} />} />
        <Route path="/bdashboard" element={<Bdashboard option={option}/>} />
        <Route path="/sdashboard" element={<Sdashboard option={option}/>} />
      </Routes>
    </App1>
  );
}

export default App;

const App1 = styled.div`

.topcomp{
border:2px solid black;
display:flex;
height:80px;
justify-content:space-between;
}

 .rightsection{
    display:flex;
    width:300px;
    justify-content:space-between;
    margin-right:20px;
    margin-top:30px;

 }
 `;
