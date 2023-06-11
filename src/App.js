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
import { useEffect, useState } from "react";
import { useAuth } from "./context/auth";
import ForgotPassword from "./components/auth/ForgotPassword";

function App() {
  const [auth, setAuth] = useAuth();


  return (
    <App1>
      <div className="topcomp">
        <div className="leftcontent">Credit Bazar</div>
      </div>

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile  />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route
          path="/tdashboard"
          element={!auth.user ? <Signin /> : <Tdashboard  />}
        />
        <Route
          path="/bdashboard"
          element={!auth.user ? <Signin /> : <Bdashboard  />}
        />
        <Route
          path="/sdashboard"
          element={!auth.user ? <Signin /> : <Sdashboard  />}
        />
      </Routes>
    </App1>
  );
}

export default App;

const App1 = styled.div`
  .topcomp {
    border: 2px solid black;
    display: flex;
    height: 60px;
    margin-top:50px;
    margin-left:50px;
    width:300px;
    justify-content:center;
  }
  .leftcontent{
    margin-top:10px;
    font-size:25px;
  }

 
`;
