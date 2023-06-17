import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import UserProfile from "./components/auth/UserProfile";
import Tdashboard from "./components/finance/Financedashboard";
import Bdashboard from "./components/buyers/Buyersdashboard";
import Sdashboard from "./components/seller/SellerDashboard";
import { styled } from "styled-components";
import { useAuth } from "./context/auth";
import ForgotPassword from "./components/auth/ForgotPassword";
import Reset from "./components/auth/Reset";
import SellerAcknowledgement from "./components/seller/SellerAcknowledgement";
import SellerOffer from "./components/seller/SellerOffer";
import SellerOfferDetails from "./components/seller/SellerOfferDetails";
import SellerreceivedOffers from "./components/seller/SellerreceivedOffers";
import SellerReceivedOfferAcknowledgement from "./components/seller/SellerReceivedOfferAcknowledgement";
import SellerDisbursements from "./components/seller/SellerDisbursements";
import SellerSettlements from "./components/seller/SellerSettlements";
import SellerPayments from "./components/seller/SellerPayments";
import SellerPaymentAcknowledgement from "./components/seller/SellerPaymentAcknowledgement";
import FinanceInitate from "./components/finance/FinanceInitate";
import FinanceOfferAcknowledgement from "./components/finance/FinanceOfferAcknowledgement";
import FinanceDisrubment from "./components/finance/FinanceDisrubment";
import FinancePayment from "./components/finance/FinancePayment";
import FinanceDisburenmentAcknowledgement from "./components/finance/FinanceDisburenmentAcknowledgement";
import FinanceSettlementDetail from "./components/finance/FinanceSettlementDetail";
import { CountProvider } from "./context/count";

function App() {
  const [auth, setAuth] = useAuth();

  return (
    <App1>
      <div style={{background:"orange",width:"100%",height:"100px"}}>
      </div>
     
      <div className="topcomp">
        <div className="leftcontent">Credit Bazar</div>
      </div>
     

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        //finances
        //routes////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       
        <Route
          path="/financesdashboard"
          element={!auth.user ? <Signin /> : <Tdashboard />}
        />
        <Route
          path="/financeinitate"
          element={!auth.user ? <Signin /> : <FinanceInitate />}
        />
         <Route
          path="/financeofferacknowledgement"
          element={!auth.user ? <Signin /> : <FinanceOfferAcknowledgement />}
        />
         <Route
          path="/financedisrubment"
          element={!auth.user ? <Signin /> : <FinanceDisrubment />}
        />
         <Route
          path="/financepayment"
          element={!auth.user ? <Signin /> : <FinancePayment />}
        />
         <Route
          path="/financedisrubmentacknowledgement"
          element={!auth.user ? <Signin /> : <FinanceDisburenmentAcknowledgement />}
        />
         <Route
          path="/financessettlementdetail"
          element={!auth.user ? <Signin /> : <FinanceSettlementDetail />}
        />
        

        //buyers//
        //routes////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <Route
          path="/buyersdashboard"
          element={!auth.user ? <Signin /> : <Bdashboard />}
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
        <Route
          path="/sellersreceivedoffers"
          element={!auth.user ? <Signin /> : <SellerreceivedOffers />}
        />
        <Route
          path="/sellersreceivedoffersacknowledgement"
          element={
            !auth.user ? <Signin /> : <SellerReceivedOfferAcknowledgement />
          }
        />
         <Route
          path="/sellersdisbursement"
          element={
            !auth.user ? <Signin /> : <SellerDisbursements />
          }
        />
         <Route
          path="/sellerssettlements"
          element={
            !auth.user ? <Signin /> : <SellerSettlements />
          }
        />
         <Route
          path="/sellerssettlements"
          element={
            !auth.user ? <Signin /> : <SellerSettlements />
          }
        />
         <Route
          path="/sellerspayment"
          element={
            !auth.user ? <Signin /> : <SellerPayments />
          }
        />
         <Route
          path="/sellerspaymentacknowledgement"
          element={
            !auth.user ? <Signin /> : <SellerPaymentAcknowledgement/>
          }
        />

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <Route path="/reset-password" element={<Reset />} />
      </Routes>
    </App1>
  );
}

export default App;

const App1 = styled.div`
  .topcomp {
    border: 2px solid red;
    display: flex;
    height: 60px;
    margin-left: 50px;
    width: 300px;
    justify-content: center;
    margin-top:-80px;
    background:red;
   
  }
  .leftcontent {
    margin-top: 10px;
    font-size: 25px;
  }
`;
