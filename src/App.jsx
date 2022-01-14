import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
import Navbar from "custom-components/Navbar";
import MainContent from "custom-components/MainContent";
import FundRaiserCard from "custom-components/FundRaiserCard";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div className="content">
      <Navbar />
      <MainContent />
      <section className="fundraiser-cards-panel">
        <input
          className="search-fundraiser-mainpage"
          type="text"
          name=""
          id=""
          placeholder="Search by fundraisers, cause, creator"
        />

        <h2 className="text-center">Fundraisers that need urgent help</h2>

        <div className="fundraiser-card-flex">
          <FundRaiserCard />
          <FundRaiserCard />
          <FundRaiserCard />
        </div>
      </section>

      <section className="start-fr-section">
        <h2>Start a Fundraiser right away!</h2>

        <div className="donate-now-box">
          <button className="create-button">
            <i className="material-icons">east</i>
          </button>
          <div>
            <label htmlFor="target-amount-input">
              How much do you want to raise
            </label>
            <input type="number" name="" id="target-amount-input" />
          </div>
          <div>
            <label htmlFor="">Your Name</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Fundraiser For</label>
            <input type="text" name="" id="" />
          </div>
        </div>
      </section>

      <section>
        <h2>Why Donaterra</h2>
      </section>
    </div>
  );
};

export default App;
