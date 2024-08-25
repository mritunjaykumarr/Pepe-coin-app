import {
  fetchData,
  fetchDataUser,
  handleClick,
  postDataFromUser,
  updateUserData,
} from "../utlis/api.js";
import earnPepe from "../image/refers/earnPepe.mp4";
import refer from "../image/refers/refer.png";
import refersAnimation from "../image/refers/pepe-refer-animation.mp4";
import reward from "../image/refers/pepe-get-rewards.mp4";
import generateRandomToken from "../utlis/tokenGenerator";
import { TransactionContext } from "../context/TransactionContext";
import { ReferContext } from "../context/RefersContext";
import { useContext, useEffect, useState } from "react";
import "../style/refer.css";
import startTimer from "../utlis/countDown.jsx";
import Countdown from "react-countdown";
import VisitedLink from "./VisitedLink.jsx";
import { useCookies } from "react-cookie";

const targetDate = Date.now() + 24 * 60 * 60 * 1000;
const randomCode = generateRandomToken();

const Refer = () => {
  const [token, setToken] = useState([0]);
  const [todayClaim, setTodayClaim] = useState(0);

  const [cookies, setCookie] = useCookies(["referralCode"]);
  const [referId, setReferId] = useState("");

  // to set data in ui
  const [taskClaim, setTaskClaim] = useState(0);
  const [dailyClaim, setDailyClaim] = useState(0);
  const [referClaim, setReferClaim] = useState(0);
  const [totalClaimBal, setTotalCalim] = useState(0);
  const [referFriend, setReferFriend] = useState(0);
  const [ethereumAccount, setEthereumAcount] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [referAmount, setReferAmount] = useState(0);

  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const { taskMoney } = useContext(ReferContext);

  const sendCookies = () => {
    try {
      const referralCode = token; // Replace with the actual referral code
      const expires = new Date();
      expires.setDate(expires.getDate() + 1); // Set expiration to 1 day

      setCookie("referralCode", referralCode, { path: "/", expires });
    } catch (error) {
      console.log("ERROR WHILE STORING COOKIE", error);
    }
  };

  // console.log(cookies)
  // TO RETRIVE COOKIE FROM USER'S
  const verifyUser = () => {
    try {
      const referralCodes = cookies.referralCode;

      if (referralCodes === token && currentAccount !== ethereumAccount) {
        setReferId(currentAccount);
        setReferAmount(100);
        console.log("VERIFIED USER 👌👌👌👌👌");
      }
    } catch (error) {
      console.log("NOT VERIFIED USER'S", error);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referLink);
      // console.log("Text copied to clipboard");
    } catch (err) {
      // console.error("Failed to copy text: ", err);
      throw new Error("FAILED TO COPY ADDRESSS.PLEASE TRY AGAIN", err);
    }
  };
  // console.log(ethereumAccount == currentAccount)
  // create account based on these data
  const postObj = {
    ethereumId: currentAccount,
    totalBalance: 0,
    referralCode: randomCode,
    todayClaim: 0,
    totalEarnDay: 0,
    referEarn: 0,
    referredUser: [],
  };

  // for updating the user account balance

  const updatedObj = {
    todayClaim: todayClaim,
    totalEarnDay: taskMoney,
    referEarn: referAmount,
    referredUsers: [
      {
        ethereumId: referId,
        status: referId.length > 0 ? "sucess" : "pending",
        referTime: new Date(),
      },
    ],
  };

  // console.log({...updatedObj})

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateUI = async () => {
    try {
      if (currentAccount.length === 0) return;

      const { data } = await fetchDataUser(currentAccount); // to find user on their ethereum address
      const setVariable = data.data.user;
      console.log(setVariable)
      // setting the value of claim variable
      setDailyClaim(setVariable.todayClaim);
      setTaskClaim(setVariable.totalEarnDay);
      setReferClaim(setVariable.referEarn);
      setTotalCalim(setVariable.totalBalance);
      setToken(setVariable.referralCode);
      setReferFriend(setVariable.referredUsers.length);
      setEthereumAcount(setVariable.ethereumId);
    } catch (error) {
      throw new Error(
        "can't find the user on your currentAcount adress",
        error
      );
    }
  };
  useEffect(()=>{updateUI()},[updatedObj,taskClaim])

  const createAccount = async () => {
    if (currentAccount === ethereumAccount) return;
    if (currentAccount !== ethereumAccount) {
      await postDataFromUser(postObj);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateAccount = async () => {
    try {
      if (ethereumAccount === currentAccount) {
        await updateUserData(currentAccount, updatedObj);
        console.log(currentAccount, updatedObj);
      }
    } catch (error) {
      throw new Error("UNABLE TO UPDATING ACCOUNT!", error);
    }
  };

  useEffect(() => {
    updateAccount();
  }, [updatedObj,taskClaim]);


  /////////////////////////////////////////////////////////////
  // HANDLEING THE CLAIM FUNCTION

  const handleClaim = async () => {
    const result = await handleClick(currentAccount);
    // alert(result.message);
    setTodayClaim(100);
    if (result.success) {
      setIsDisabled(true);
    }
  };
  // console.log(totalClaimBal,"this from line 166")

  ////////////////////////////////////////////

  useEffect(() => {
    fetchData(); // to get all user from database
    sendCookies();
    verifyUser();
  }, [currentAccount]);

  const baseUrl = window.location.origin;
  // const referLink = `https://pepelayer2.com/referral/${token}`;
  const referLink = `${baseUrl}/refer/${token}`;

  return (
    <div className="refer-body">
      <header className="header-el">
        <button
          id="connectMetaMaskButton"
          className="metamask-button"
          onClick={connectWallet}
        >
          {currentAccount.length > 0
            ? `Total Earn: ${totalClaimBal}`
            : "Connect With Metamask"}
        </button>

        <div id="walletAddress"></div>
        <div className="container-el">
          <h1 className="">AIRDROP PEPE LAYER2</h1>
        </div>
      </header>
      <main>
        <div className="container-el">
          <div className="section-el">
            <section id="tasks ">
              <p className="heading-airdrop">
                Complete these daily tasks and earn coins!...
              </p>
              <h2 className="daily-h2-task h2">Daily Tasks</h2>
              <div id="tasks-list">
                <div className="task">
                  <VisitedLink
                    url="https://x.com/?lang=en"
                    className="cursor-pointer"
                    title={"Follow us on Twitter"}
                  />
                  <span className="reward">+10 Coins</span>
                </div>
                <div className="task">
                  <VisitedLink
                    url="https://telegram.org/"
                    className="cursor-pointer"
                    title={"Join our Telegram group"}
                    value={10}
                  />

                  <span className="reward">+20 Coins</span>
                </div>
                <div className="task">
                  <VisitedLink
                    url="https://www.facebook.com/"
                    className="cursor-pointer"
                    title={" Share our post on Facebook"}
                    value={15}
                  />

                  <span className="reward">+15 Coins</span>
                </div>
                <div className="task">
                  <VisitedLink
                    url="https://www.youtube.com/"
                    className="cursor-pointer"
                    title={"Subscribe Our Youtube Channel"}
                    value={25}
                  />

                  <span className="reward">+25 Coins</span>
                </div>
              </div>
              <div className="total-coins">
                <h3>
                  Total Coins: <span id="coin-count">{taskClaim}</span>
                </h3>
              </div>
            </section>
          </div>
        </div>

        <section id="intro" className="section-el">
          <div className="intro-content">
            <img src={refer} alt="Pepe Coin" className="intro-image" />
            <div className="intro-text">
              <h2>Earn More with Pepe Coin</h2>
              <p>
                Join our referral programme and earn Pepe Coins by inviting your
                friends!
              </p>
              <button id="joinNowButton button">Invite Now</button>
              <a href="/airdrop/airdrop.html">
                <button id="joinNowButton">AirDrop</button>
              </a>
            </div>
          </div>
        </section>
        <section className="section-el">
          <div className="container-el">
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className="bubble bubble4"></div>
            <div className="bubble bubble5"></div>
            <div className="bubble bubble6"></div>
            <div className="bubble bubble7"></div>
            <div className="bubble bubble8"></div>
            <div className="bubble bubble9"></div>
            <div className="challenge-box">
              {ethereumAccount.length > 0 ? (
                <p>
                  <h2 className="h2">Daily Challenge</h2>
                  <p id="challenge">Complete today's task</p>
                </p>
              ) : (
                ""
              )}

              <button
                id="claimButton button"
                disabled={todayClaim > 0 ? true : false}
                onClick={
                  ethereumAccount.length > 0 ? handleClaim : createAccount
                }
              >
                {ethereumAccount.length > 0
                  ? "Claim Today's Coins"
                  : "Create Refer Account"}
              </button>
              {ethereumAccount.length > 0 ? (
                <p id="coins">Coins Earned: {dailyClaim} PEPE TODAY!</p>
              ) : (
                " "
              )}

              {todayClaim ? (
                <Countdown
                  date={targetDate}
                  renderer={startTimer}
                  className="timer"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
        <section id="referralInfo" className="section-el">
          <div className="infoBox">
            <h3>Your Referral Link</h3>
            <input
              type="text"
              id="referralLink"
              className="input"
              value={referLink}
              readOnly
            />
            <button id="copyLinkButton button" onClick={copyToClipboard}>
              Copy Link
            </button>
          </div>
          <div className="infoBox">
            <h3>Your Referrals</h3>
            <p>
              <span id="referralCount">{referFriend}</span> Friends Referred
            </p>
          </div>
          <div className="infoBox">
            <h3>Earnings From Referrals</h3>
            <p>
              <span id="referralEarnings">{referClaim}</span> Pepe Coins Earned
            </p>
          </div>
        </section>
        <section id="howItWorks " className="section-el howItWorks">
          <h2 className="h2 h2-how">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <video
                src={refersAnimation}
                autoPlay
                className="step-image"
                loop
              />
              <h3>Invite Friends</h3>
              <p>Invite your friends using your unique referral link.</p>
            </div>
            <div className="step">
              <video src={earnPepe} autoPlay className="step-image" loop />
              <h3>Earn Coins</h3>
              <p>Your friends sign up and buy Pepe Coins.</p>
            </div>
            <div className="step">
              <video src={reward} autoPlay className="step-image" loop />
              <h3>Get Rewards</h3>
              <p>You earn a percentage of their purchases as Pepe Coins.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-el">
        <div className="container-el">
          <p>© 2024 Pepe Layer2 Campaign. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Refer;
