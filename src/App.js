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
import Profile from "./components/Profile";

import creditlogo from "../src/components/images/creditlogo.png";
import RequestForOffers from "./components/seller/RequestForOffers";
import Trades from "./components/seller/Trades";
import Request_offers from "./components/seller/Request_offers";
import Settlement from "./components/seller/Settlement";
import Disbursement from "./components/seller/Disbursement";
import Offers from "./components/seller/Offers";
import Shipment from "./components/seller/Shipment";
import Payment from "./components/seller/Payment";
import RequestInformation from "./components/seller/RequestInformation";
import FinanceRequest from "./components/finance/FinanceRequest";
import FinanceRequestInformation from "./components/finance/FinanceRequestInformation";
import FinanceViewRequest from "./components/finance/FinanceViewRequest";
import FinanceOffers from "./components/finance/FinanceOffers";
import FinanceDisburesment from "./components/finance/FinanceDisburesment";
import Finance_payment from "./components/finance/Finance_payment";
import FinanceSettlement from "./components/finance/FinanceSettlement";
import BuyersRequestInformation from "./components/buyers/BuyersRequestInformation";
import BuyersOffers from "./components/buyers/BuyersOffers";
import BuyersDisbursement from "./components/buyers/BuyersDisbursement";
import BuyersShipment from "./components/buyers/BuyersShipment";
import BuyersPayment from "./components/buyers/BuyersPayment";
import BuyersSettlement from "./components/buyers/BuyersSettlement";
import FinanceTrades from "./components/finance/FinanceTrades";

function App() {
  const [auth, setAuth] = useAuth();

  return (
    <App1>
      <div
        style={{
          background: "orange",
          width: "100%",
          height: "100px",
          justifyContent: "center",
          position: "fixed",
        }}
      >
        <img
          src={creditlogo}
          className="leftContent"
          style={{ marginTop: "20px", marginLeft: "30px" }}
        />
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
          path="/financerequest"
          element={!auth.user ? <Signin /> : <FinanceRequest />}
        />
        <Route
          path="/finance_request_information"
          element={!auth.user ? <Signin /> : <FinanceRequestInformation />}
        />
        <Route
          path="/finance_view_request"
          element={!auth.user ? <Signin /> : <FinanceViewRequest />}
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
          path="/finance_disbursement"
          element={!auth.user ? <Signin /> : <FinanceDisburesment />}
        />
        <Route
          path="/financepayment"
          element={!auth.user ? <Signin /> : <FinancePayment />}
        />
        <Route
          path="/finance_payment"
          element={!auth.user ? <Signin /> : <Finance_payment />}
        />
        <Route
          path="/finance_settlement"
          element={!auth.user ? <Signin /> : <FinanceSettlement />}
        />
        <Route
          path="/financedisrubmentacknowledgement"
          element={
            !auth.user ? <Signin /> : <FinanceDisburenmentAcknowledgement />
          }
        />
        <Route
          path="/finance_offers"
          element={!auth.user ? <Signin /> : <FinanceOffers />}
        />
        <Route
          path="/financessettlementdetail"
          element={!auth.user ? <Signin /> : <FinanceSettlementDetail />}
        />
        <Route
          path="/finance_trades"
          element={!auth.user ? <Signin /> : <FinanceTrades />}
        />
        //buyers//
        //routes////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <Route
          path="/buyersdashboard"
          element={!auth.user ? <Signin /> : <Bdashboard />}
        />
        <Route
          path="/buyersrequestinformation"
          element={!auth.user ? <Signin /> : <BuyersRequestInformation />}
        />
        <Route
          path="/buyers_offers"
          element={!auth.user ? <Signin /> : <BuyersOffers />}
        />
        <Route
          path="/buyers_disbursement"
          element={!auth.user ? <Signin /> : <BuyersDisbursement />}
        />
        <Route
          path="/buyers_shipment"
          element={!auth.user ? <Signin /> : <BuyersShipment />}
        />
        <Route
          path="/buyers_payment"
          element={!auth.user ? <Signin /> : <BuyersPayment />}
        />
        <Route
          path="/buyers_settlement"
          element={!auth.user ? <Signin /> : <BuyersSettlement />}
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
          element={!auth.user ? <Signin /> : <SellerDisbursements />}
        />
        <Route
          path="/sellerssettlements"
          element={!auth.user ? <Signin /> : <SellerSettlements />}
        />
        <Route
          path="/sellerssettlements"
          element={!auth.user ? <Signin /> : <SellerSettlements />}
        />
        <Route
          path="/sellerspayment"
          element={!auth.user ? <Signin /> : <SellerPayments />}
        />
        <Route
          path="/sellerspaymentacknowledgement"
          element={!auth.user ? <Signin /> : <SellerPaymentAcknowledgement />}
        />
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <Route path="/reset-password" element={<Reset />} />
        <Route
          path="/user-profile"
          element={!auth.user ? <Signin /> : <Profile />}
        />
        <Route
          path="/offer-request"
          element={!auth.user ? <Signin /> : <RequestForOffers />}
        />
        <Route
          path="/finance-request"
          element={!auth.user ? <Signin /> : <Request_offers />}
        />
        <Route path="/trades" element={!auth.user ? <Signin /> : <Trades />} />
        /////
        <Route
          path="/settlement"
          element={!auth.user ? <Signin /> : <Settlement />}
        />
        <Route
          path="/disbursement"
          element={!auth.user ? <Signin /> : <Disbursement />}
        />
        <Route path="/offers" element={!auth.user ? <Signin /> : <Offers />} />
        <Route
          path="/shipment"
          element={!auth.user ? <Signin /> : <Shipment />}
        />
        <Route
          path="/payment"
          element={!auth.user ? <Signin /> : <Payment />}
        />
        <Route
          path="/request_information"
          element={!auth.user ? <Signin /> : <RequestInformation />}
        />
      </Routes>
    </App1>
  );
}

export default App;

const App1 = styled.div`
  .topcomp {
    //  position:fixed;
    display: flex;
    height: 60px;
    margin-left: 50px;
    width: 300px;
    justify-content: center;
    margin-top: -80px;
  }
  .leftcontent {
    // position:fixed;
    margin-top: 10px;
    font-size: 25px;
  }
`;
