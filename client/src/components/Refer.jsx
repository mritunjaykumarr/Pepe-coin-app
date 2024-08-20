import { Link } from "react-router-dom";
import earnPepe from "../image/refers/earnPepe.mp4";
import refer from "../image/refers/refer.png";
import refersAnimation from "../image/refers/pepe-refer-animation.mp4";
import reward from "../image/refers/pepe-get-rewards.mp4";
import { ReferContext } from "../context/RefersContext";
import getOrCreateToken from "../utlis/tokenGenerator";
import { useContext, useEffect, useState } from "react";
import "../style/refer.css"

// document
//   .getElementById("copyLinkButton")
//   .addEventListener("click", function () {
//     const referralLink = document.getElementById("referralLink");
//     referralLink.select();
//     referralLink.setSelectionRange(0, 99999); // For mobile devices
//     document.execCommand("copy");
//     alert("Referral link copied: " + referralLink.value);
//   });

// //   DAILY CHANLLANGES
// // scripts.js

// const claimButton = document.getElementById("claimButton");
// const statusText = document.getElementById("status");
// const coinsText = document.getElementById("coins");
// const timerText = document.getElementById("timer");

// let coins = 0;
// let nextChallengeTime = localStorage.getItem("nextChallengeTime");
// let currentTime = new Date().getTime();

// if (!nextChallengeTime || currentTime >= nextChallengeTime) {
//   nextChallengeTime = new Date().setHours(24, 0, 0, 0); // next 24-hour mark
//   localStorage.setItem("nextChallengeTime", nextChallengeTime);
// }

// updateTimer();
// const timerInterval = setInterval(updateTimer, 1000);

// claimButton.addEventListener("click", () => {
//   if (new Date().getTime() < nextChallengeTime) {
//     coins += 10;
//     coinsText.textContent = `Coins Earned: ${coins}`;
//     statusText.textContent = "Coins claimed for today!";
//     claimButton.disabled = true;
//     localStorage.setItem("coins", coins);
//   }
// });

// function updateTimer() {
//   const now = new Date().getTime();
//   const distance = nextChallengeTime - now;

//   if (distance <= 0) {
//     nextChallengeTime = new Date().setHours(24, 0, 0, 0); // next 24-hour mark
//     localStorage.setItem("nextChallengeTime", nextChallengeTime);
//     claimButton.disabled = false;
//     statusText.textContent = "";
//   }

//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   timerText.textContent = `Next challenge in: ${hours}h ${minutes}m ${seconds}s`;
// }

// window.onload = () => {
//   coins = parseInt(localStorage.getItem("coins")) || 0;
//   coinsText.textContent = `Coins Earned: ${coins}`;
//   const currentTime = new Date().getTime();
//   if (currentTime < nextChallengeTime) {
//     claimButton.disabled = true;
//   }
// };

const Refer = () => {
  const [token, setToken] = useState("");
  const { contract, account, referAndEarn } = useContext(ReferContext);

  useEffect(() => {
    // Initialize the token from the utility function
    const initialToken = getOrCreateToken();
    setToken(initialToken); // Update the state with the token
  }, []);
  console.log(account, contract, "THIS IS FROM LINE 80 :):):):):)");
  console.log(token, "this is token");
  const referLink = `https://pepelayer2.com/referral/${token}`;

  // we need two parameter
  // taskid and refereraddress
  //   const referId = async () => {
  //   await referAndEarn(2,)
  // }

  return (
    <div className="refer-body">
  
<header className="header-el">
  <button id="connectMetaMaskButton"  className="metamask-button">Connect MetaMask</button>
  <div id="walletAddress"></div>
  <div className="container-el">
    <h1 className="">AIRDROP PEPE LAYER2</h1>

  </div>
</header>

<main>
  <div className="container-el">
   
  <div className="section-el">
    <section id="tasks ">
      <p className="heading-airdrop">Complete these daily tasks and earn coins!...</p>
      <h2 className="daily-h2-task h2">Daily Tasks</h2>
      <div id="tasks-list">
        <div className="task">
          <a href="https://x.com/?lang=en" className="task-button" data-reward={10}>
            Follow us on Twitter
          </a>
          <span className="reward">+10 Coins</span>
        </div>
        <div className="task">
          <a href="https://telegram.org/" className="task-button" data-reward={20}>
            Join our Telegram group
          </a>
          <span className="reward">+20 Coins</span>
        </div>
        <div className="task">
          <a href="https://www.facebook.com/" className="task-button" data-reward={15}>
            Share our post on Facebook
          </a>
          <span className="reward">+15 Coins</span>
        </div>
        <div className="task">
          <a href="https://www.youtube.com/" className="task-button" data-reward={25}>
            Subscribe Our Youtube Channel
          </a>
          <span className="reward">+25 Coins</span>
        </div>
      </div>
      <div className="total-coins">
        <h3>Total Coins: <span id="coin-count">0</span></h3>
      </div>
    </section>
  </div>
  </div>
  
  <section id="intro" className="section-el">
    <div className="intro-content">
      <img src={refer} alt="Pepe Coin" className="intro-image" />
      <div className="intro-text">
        <h2>Earn More with Pepe Coin</h2>
        <p>Join our referral programme and earn Pepe Coins by inviting your friends!</p>
        <button id="joinNowButton button">Invite Now</button>
        <a href="/airdrop/airdrop.html"><button id="joinNowButton">AirDrop</button></a>
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
        <button id="claimButton button">Claim Today's Coins</button>
        <p id="status" />
        <p id="coins">Coins Earned: 0</p>
        <p id="timer" />
      </div>
    </div>
  </section>
  <section id="referralInfo" className="section-el">
    <div className="infoBox">
      <h3>Your Referral Link</h3>
      <input type="text" id="referralLink" className="input" defaultValue="https://pepelayer2.com/referral/your-code" readOnly />
      <button id="copyLinkButton button">Copy Link</button>
    </div>
    <div className="infoBox">
      <h3>Your Referrals</h3>
      <p><span id="referralCount">0</span> Friends Referred</p>
    </div>
    <div className="infoBox">
      <h3>Earnings From Referrals</h3>
      <p><span id="referralEarnings">0</span> Pepe Coins Earned</p>
    </div>
  </section>
  <section id="howItWorks " className="section-el howItWorks">
    <h2 className="h2 h2-how">How It Works</h2>
    <div className="steps-container">
      <div className="step">
        <video src={refersAnimation} autoPlay className="step-image" loop />
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
