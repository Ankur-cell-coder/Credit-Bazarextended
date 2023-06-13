import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import UserProfile from "./components/auth/UserProfile";
import Tdashboard from "./components/traders/Tradersdashboard";
import Bdashboard from "./components/buyers/Buyersdashboard";
import Sdashboard from "./components/seller/SellerDashboard";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useAuth } from "./context/auth";
import ForgotPassword from "./components/auth/ForgotPassword";
import Reset from "./components/auth/Reset";
import Boffer from "./components/buyers/Boffer";
import Boffer_detail from "./components/buyers/Boffer_detail";
import Backnowledgement from "./components/buyers/Backnowledgement";
import SellerAcknowledgement from "./components/seller/SellerAcknowledgement";
import SellerOffer from "./components/seller/SellerOffer";
import SellerOfferDetails from "./components/seller/SellerOfferDetails";

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
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        //traders
        //routes////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <Route
          path="/tradersdashboard"
          element={!auth.user ? <Signin /> : <Tdashboard />}
        />
        //buyers//
        //routes////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <Route
          path="/buyersdashboard"
          element={!auth.user ? <Signin /> : <Bdashboard />}
        />
        <Route
          path="/buyersoffer"
          element={!auth.user ? <Signin /> : <Boffer />}
        />
        <Route
          path="/buyersofferdetails"
          element={!auth.user ? <Signin /> : <Boffer_detail />}
        />
        <Route
          path="/buyersacknowledgement"
          element={!auth.user ? <Signin /> : <Backnowledgement />}
        />
        //seller// routes
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <Route
          path="/sellersdashboard"
          element={!auth.user ? <Signin /> : <Sdashboard />}
        />
        <Route
          path="/sellersacknowledgement"
          element={!auth.user ? <Signin /> : <SellerAcknowledgement />}
        />
        <Route
          path="/sellersoffer"
          element={!auth.user ? <Signin /> : <SellerOffer />}
        />
        <Route
          path="/sellersofferdetails"
          element={!auth.user ? <Signin /> : <SellerOfferDetails />}
        />
        <Route path="/reset-password" element={<Reset />} />
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
    margin-top: 50px;
    margin-left: 50px;
    width: 300px;
    justify-content: center;
  }
  .leftcontent {
    margin-top: 10px;
    font-size: 25px;
  }
`;
