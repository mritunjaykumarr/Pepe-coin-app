import { Link } from "react-router-dom";
import {fetchDataAndSend, getUserById, updateUser, getMongoIdByAddress } from "./api";
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
import { useCookies } from 'react-cookie';

const targetDate = Date.now() + 24 * 60 * 60 * 1000;
const referAmount = 100;
let todayClaimFromDB;
let taskClaimFromDB;

const Refer = () => {
  const [token, setToken] = useState([0]);
    const [todayClaimList, setTodayClaimList] = useState([]);
  const [todayClaim, setTodayClaim] = useState(0);

  const [referDataList, setReferDataList] = useState([]);
  const [referDataTotal, setReferDataTotal] = useState(0);
 
  const [cookies, setCookie] = useCookies(['referralCode']);
  const [referId,setReferId] = useState('')
  const [mongodId , setMongoId] = useState('')

  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const { taskMoney } = useContext(ReferContext);



 const mongodbID = async ()=>{
const id = await getMongoIdByAddress(currentAccount)
   setMongoId(id)

  } 
  
  console.log(mongodId,"THIS IS COMMING FROM LINE 39 👍👍👍👍👍👍")

  const sendCookie =  () =>{
    try{
      const referralCode =  token; // Replace with the actual referral code
      const expires = new Date();
      expires.setDate(expires.getDate() + 1); // Set expiration to 1 day
  
      setCookie('referralCode', referralCode, { path: '/', expires });

    }catch(error){
      console.log("ERROR WHILE STORING COOKIE",error)
    }
  }

  console.log(cookies)
  // TO RETRIVE COOKIE FROM USER'S
  const verifyUser =  () =>{
    try{
      const referralCodes = cookies.referralCode;

      if(referralCodes === token){
        console.log('VERIFIED USER 👌👌👌👌👌')

        const numValue = parseFloat(referAmount);

        if (!isNaN(numValue)) {
          // Update the list of referral amounts
          setReferDataList((prevList) => [...prevList, numValue]);
    
          // Update the total sum of referral amounts
          setReferDataTotal((prevTotal) => prevTotal + numValue);
        } else {
          console.error('Invalid number:', referAmount);
        }
       
      }else{
        console.error("NOt Verified User's❌❌❌❌❌")
      }
    }catch(error){
      console.log("NOT VERIFIED USER'S",error)
    }


  }

  const totalBalance = Number(todayClaim) + Number(taskMoney) + Number(referDataTotal);
  

  const randomCode = generateRandomToken();
  const postObj = {
    ethereumId: currentAccount,
    referBalance : 0,
    todayClaim:0,
    totalEarnDay:0,
    referralCode: randomCode,
  };

  console.log(todayClaim,taskMoney,totalBalance)

  const updateObj = {
    todayClaim:todayClaim,
    totalEarnDay:taskMoney,
    referBalance:totalBalance,
  }

  // console.log(taskMoney, "line 35 from refer.jsx");
  // console.log(currentAccount, postObj, "THIS COMMING FROM LINE 35 ❤️❤️❤️❤️❤️");

  const getUser = async()=>{
    const data = await getUserById(mongodId)
    console.log(data[0],"THIS FROM LINE 98 😍😍😍😍😍")
    setReferId(data[0].referBalance)
    setToken(data[0].referralCode)

    taskClaimFromDB = data[0].totalEarn
    todayClaimFromDB = data[0].todayClaim

  }

  const postData = async () => {
    try {
     const res =  await fetchDataAndSend(postObj)

     console.log(res, "this is comming from line 111")
    } catch (error) {
      console.error("Getting error while POSTING data from user", error);
    }
  };

  console.log(totalBalance)
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referLink);
      // console.log("Text copied to clipboard");
    } catch (err) {
      // console.error("Failed to copy text: ", err);
      throw new Error("FAILED TO COPY ADDRESSS.PLEASE TRY AGAIN", err);
    }
  };

  const handleClaim = () => {
    try {
      if (currentAccount.length > 0) {
        
        const claimValue = 100;

    // Update the claim list
    setTodayClaimList((prevList) => {
      const updatedList = [...prevList, claimValue];
      return updatedList;
    });

    // Update the total sum
    setTodayClaim((prevTotal) => prevTotal + claimValue);
        // setTodayClaim(100);
        // startTimer()
        console.log("YOU GOT 100 PEPE!❤️❤️👌");
      }
      
    } catch (error) {
      console.log("Failed to Claim ", error);
    }
  };
  
  useEffect(() => {
    mongodbID()
    getUser();
    updateUser(mongodId,updateObj)  
    postData();
    sendCookie();       
    verifyUser();
  
  }, []);

  // const referLink = `https://pepelayer2.com/referral/${token}`;
  const referLink = `http://localhost:3000/referral/${token}`;

  return (
    <div className="refer-body">
      <header className="header-el">
        {currentAccount.length > 0 ? (
          ""
        ) : (
          <button
            id="connectMetaMaskButton"
            className="metamask-button"
            onClick={connectWallet}
          >
            Connect MetaMask
          </button>
        )}
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
                  {/* <a href="https://telegram.org/" className="task-button" data-reward={20}>
            Join our Telegram group
          </a> */}
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
                  Total Coins: <span id="coin-count">{taskClaimFromDB}</span>
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
            <div className="bubble bubble1" />
            <div className="bubble bubble2" />
            <div className="bubble bubble3" />
            <div className="bubble bubble4" />
            <div className="bubble bubble5" />
            <div className="bubble bubble6" />
            <div className="bubble bubble7" />
            <div className="bubble bubble8" />
            <div className="bubble bubble9" />
            <div className="challenge-box">
              <h2 className="h2">Daily Challenge</h2>
              <p id="challenge">Complete today's task</p>
              <button
                id="claimButton button"
                disabled={todayClaim > 0 ? true : false}
                onClick={handleClaim}
              >
                Claim Today's Coins
              </button>
              <p id="coins">Coins Earned: {todayClaimFromDB} PEPE TODAY!</p>
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
              <span id="referralCount">0</span> Friends Referred
            </p>
          </div>
          <div className="infoBox">
            <h3>Earnings From Referrals</h3>
            <p>
              <span id="referralEarnings">{referId}</span> Pepe Coins Earned
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
              {/* <img src="/Referral/img/pepe-refer-animation.mp4" alt="Invite Friends" class="step-image"> */}
              <h3>Invite Friends</h3>
              <p>Invite your friends using your unique referral link.</p>
            </div>
            <div className="step">
              <video src={earnPepe} autoPlay className="step-image" loop />
              {/* <img src="/Referral/img/man-paying-online-receiving-cashback-wallet.png" alt="Earn Coins" class="step-image"> */}
              <h3>Earn Coins</h3>
              <p>Your friends sign up and buy Pepe Coins.</p>
            </div>
            <div className="step">
              {/* <img src="/Referral/img/Send gift-bro.svg" alt="Get Rewards" class="step-images"> */}
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
