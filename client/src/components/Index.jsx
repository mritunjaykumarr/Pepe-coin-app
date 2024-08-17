import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import about from "../image/about.jpg";
import form from "../image/form.png";
import refer from "../image/refer.png";
import tokenomes from "../image/tokenomes.png";
import graph from "../image/graph.png";
import home from "../image/home.gif";
import moneyFrog from "../image/moneyFrog.png";
import contact from "../image/contact.png";

import oneb from "../image/bubble/one.png";
import twob from "../image/bubble/two.png";
import threeb from "../image/bubble/three.png";
import fourb from "../image/bubble/four.png";
import fiveb from "../image/bubble/five.png";
// import sixb from "../image/bubble/six.png";

import oneR from "../image/roadmap/one.png";
import twoR from "../image/roadmap/two.png";
import threeR from "../image/roadmap/three.png";
import fourR from "../image/roadmap/four.png";
// import fiveR from "../image/roadmap/five.png";
import sixR from "../image/roadmap/six.png";

const Index = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />{" "}
          <span>PEPE LAYER 2</span>
        </Link>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#TOKENOMICS" className="main-nav-link active-link">
                TOKENOMICS{" "}
              </a>
            </li>
            <li>
              <a href="#Roadmap" className="main-nav-link">
                Roadmap
              </a>
            </li>
            {/* <li><a href="#" class="main-nav-link">How to Buy</a></li> */}
            <li>
              <Link to="/refer" className="main-nav-link nav-cta">
                Join AirDrop
              </Link>
            </li>
            <li>
              <Link to="/pepe" className="main-nav-link nav-cta">
                Buy Now
              </Link>
              {/* <a href="#" className="main-nav-link nav-cta"></a> */}
            </li>
          </ul>
        </nav>
      </header>
      {/* /////////////////////////////////////////////////////////// */}
      <section className="section-hero ">
        <img src={home} alt className="video" />

        <div className="container grid grid-2-cols gap">
          <div className="hero-heading-field">
            <h1 className="heading-primary mt-96">This is pepe coin website</h1>
            <p className="para-level-2 mt-32">
              Buying Pepe Coin on Pepe Layer2 is easy, secure, and rewarding.
              Don't miss out on the chance to be part of the meme coin
              revolution. Get started now and embrace the future of digital
              currency with Pepe Layer2!
            </p>
            <div className="social-btn mt-32">
              <a href>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={54}
                  height={54}
                  fill="currentColor"
                  className="bi bi-twitter-x icons"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
              <a href>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={54}
                  height={54}
                  fill="currentColor"
                  className="bi bi-telegram icons ml-48"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
              </a>
            </div>
            {/* <img src="/src/img/coin-with-man.png" alt="coin with man" class="coin-man"> */}
          </div>
          {/* <div className="form-box-area">
            <div className="form-header">
              <h2 className="secondary-heading">Buy Pepe coin</h2>
              <article className="currency-value">
                <span>1$PEPE = 💲</span>
                <span className="currency-value-last">Next Stage = 💲</span>
              </article>
            </div>
            <form action className="form" id="form">
              <div className="wallet-option">
                <label htmlFor="curreny">choose curreny to spend</label>
                <select name="curreny" id="curreny-option">
                  <option value="Eth">Buy with Eth</option>
                  <option value="Bnb">Buy with Bnb</option>
                  <option value="USDT">Buy with USDT</option>
                  <option value="more">More +</option>
                </select>
              </div>
              <div className="form-input-group">
                <article className="form-input-field">
                  <label htmlFor>pay with Eth</label>
                  <input type="text" name id placeholder="Enter amount" />
                </article>
                <article className="form-input-field">
                  <label htmlFor>$PEPE you get:</label>
                  <input type="text" name id placeholder={0} />
                </article>
              </div>
              <button type="submit" className="btn submit-form ">
                Buy coin
              </button>
            </form>
            {/* <img src="/src/img/standing-frog.png" alt="standing-frog" class="standing-frog" */}
          {/* </div>  */}
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////// */}
      <section className="section-features ">
        <div className="container grid grid-2-cols">
          <div className="feature-box">
            <h2 className="secondary-heading mt-64">Pepe Layer Token</h2>

            {/* <h4 class="heading-h4 mt-32 mb-24">SYMBOL $PEPE</h4>
            <h4 class="heading-h4 mb-24">SUPPLY 100.000.000.000</h4>
            <h4 class="heading-h4 mb-24">LP 65% LOCKED 1 YEAR</h4>
            <h4 class="heading-h4 ">TAX 5% BUY / 5% SELL</h4> --> */}
            <div className="coming-soon-container">
              <div className="coming-soon-box">
                <h3>Coming Soon</h3>
              </div>
            </div>
            <p className="shape mt-32 para-level-2">
              {" "}
              <span className="blink">Stay tuned for something amazing!</span>
            </p>
          </div>

          <div className="feature-box">
            {/* <img src="/src/img/coin-with-man.png" alt="coin-with-man" class="coin-man"> */}
            <img src={moneyFrog} alt className="coin-pepe" />
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////////////////// */}
      <section className="section-contract ">
        <div className="container grid grid-2-cols gap mt-96">
          <div className="contract-img">
            {/* <img src="/src/img/mediting-frog.png" alt=""> */}
            <img src={about} alt />
          </div>
          <div>
            <article className="contract">
              <h2 className="secondary-heading mt-64 neon-heading">
                about $pepe
              </h2>
              <p className="para-level-2 mb-24">
                Introducing $PEPE: The ultimate meme coin with a colossal supply
                of 100 billion tokens. Our token features 65% liquidity locked
                for one year for unmatched stability and a 5% transaction tax to
                fuel continuous growth. Dive into the $PEPE experience and ride
                the wave of innovation in the crypto world!
              </p>
              <div className="mt-32">
                <button className="button-50">Buy now</button>
                <button className="button-50 ml-48 ">How to Buy</button>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* //////////////////////////Tokenomics////////////////////////// */}
      <section>
        <div className="tokenomics-container">
          <h2 className="title-tokenomics">TOKENOMICS</h2>
          <h3 className="supply">Supply Cap: 1,000,000,000 $HIFI</h3>
          <div className="chart-container">
            {/* <a href="#">
              <img src="/src/img/pepe-tokenomes.png" alt="">
          </a> */}
            <a href="#">
              <img src={graph} className="chart-image" alt />
            </a>
            {/* <div class="pie-chart"></div> */}
            <div className="labels">
              <div className="label">
                <span className="dot" style={{ backgroundColor: "#FF4081" }} />
                <span>IDO - 20%</span>
              </div>
              <div className="label">
                <span className="dot" style={{ backgroundColor: "#FF80AB" }} />
                <span>Team - 15%</span>
              </div>
              <div className="label">
                <span className="dot" style={{ backgroundColor: "#448AFF" }} />
                <span>Game Developers Support - 15%</span>
              </div>
              <div className="label">
                <span className="dot" style={{ backgroundColor: "#40C4FF" }} />
                <span>Ecosystem and Advisory Support - 20%</span>
              </div>
              <div className="label">
                <span className="dot" style={{ backgroundColor: "#B388FF" }} />
                <span>Genesis Gameplay Mining - 30%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* Roadnap */}
      <section className="roadmaps">
        <div className="container">
          <h2 className="roadmap-title neon-glow ">Roadmap</h2>
          <div className="timeline-section">
            <div className="timeline">
              <article className="timeline-item">
                <img src={oneR} alt className="timeline-icon-left" />
                <div className="timeline-content">
                  <h3 className="timeline-date">
                    <span>1</span> Connect Your MetaMask Wallet
                  </h3>
                  <p className="timeline-description">
                    Start by installing the MetaMask browser extension or mobile
                    app. Create a new wallet or import your existing one. Ensure
                    you're connected to the Ethereum network or the network your
                    project supports.
                  </p>
                </div>
              </article>
              <article className="timeline-item">
                <img src={twoR} alt className="timeline-icon-right " />
                <div className="timeline-content">
                  <h3 className="timeline-date">
                    <span>2</span> Buy Pepe Coin
                  </h3>
                  <p className="timeline-description">
                    Once your MetaMask wallet is set up, navigate to a
                    decentralized exchange (DEX) like Uniswap or PancakeSwap.
                    Swap Ethereum (ETH) or Binance Coin (BNB) for Pepe Coin
                    (PEPE). Follow the instructions on the exchange to complete
                    the transaction.
                  </p>
                </div>
              </article>
              <article className="timeline-item">
                <img src={threeR} alt className="timeline-icon-left" />
                <div className="timeline-content">
                  <h3 className="timeline-date">
                    <span>3</span> Participate in the Pepe Layer2 Community
                  </h3>
                  <p className="timeline-description">
                    Join our community on Discord or Telegram. Stay updated with
                    the latest news, participate in discussions, and engage with
                    other enthusiasts. Be a part of the conversation and help
                    shape the future of Pepe Layer2.
                  </p>
                </div>
              </article>
              <article className="timeline-item">
                <img src={fourR} alt className="timeline-icon-right" />
                <div className="timeline-content">
                  <h3 className="timeline-date">
                    <span>4</span> Complete Daily Challenges
                  </h3>
                  <p className="timeline-description">
                    Engage with our daily challenges to earn rewards and learn
                    more about Pepe Layer2. Each challenge will test your
                    knowledge and participation, offering Pepe Coin as a reward
                    for completion.
                  </p>
                </div>
              </article>
              <article className="timeline-item">
                <img src={sixR} alt className="timeline-icon-left" />
                <div className="timeline-content">
                  <h3 className="timeline-date">
                    <span>5</span>Stake Your Pepe Coins
                  </h3>
                  <p className="timeline-description">
                    Maximize your earnings by staking your Pepe Coins in our
                    staking platform. Choose from various staking options and
                    earn additional rewards based on your staking duration and
                    amount.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/* Bubbles Section */}
        <div className="bubbles">
          <div className="bubble bubble1">
            <img src={oneb} alt className="bubble-size " />
          </div>
          <div className="bubble bubble2">
            <img src={threeb} alt className="bubble-size " />
          </div>
          <div className="bubble bubble3">
            <img src={fourb} alt className="bubble-size " />
          </div>
          <div className="bubble bubble4">
            <img src={fiveb} alt className="bubble-size " />
          </div>
          <div className="bubble bubble5">
            <img src={twob} alt className="bubble-size " />
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////// */}
      <section className="section-how">
        <article className="t-center">
          <h2 className="secondary-heading mb-24 neon-heading how-header">
            How to Join AirDrop
          </h2>
        </article>
        <div className="section-how-box mt-64 ">
          <div className="grid grid-2-cols gap">
            <article className="article-box">
              <h3 className="heading-h3 mb-24">STEP 1</h3>
              <span className="para-level-3">Set Up Your Wallet</span>
              <p className="para-level-1 mt-12">
                Install MetaMask on your browser or use a Wallet
                Connect-supported wallet like Trust Wallet. Create a new wallet
                and securely store your recovery phrase.
              </p>
            </article>
            <article className="article-box js-end">
              <h3 className="heading-h3 mb-24">STEP 2</h3>
              <span className="para-level-3">Connect Your Wallet</span>
              <p className="para-level-1 mt-12">
                Visit our Pepe Layer2 AirDrop page and click "Connect Wallet."
                Select your wallet and authorize the connection. Ensure your
                wallet is set to the correct blockchain network.
              </p>
            </article>
          </div>

          <div className=" grid grid-2-cols gap mt-64">
            <article className="article-box ">
              <article>
                <h3 className="heading-h3 mb-24">STEP 3</h3>
                <span className="para-level-3">
                  Visit the AirDrop Page and Complete Tasks
                </span>
                <p className="para-level-1 mt-12">
                  Visit the AirDrop page and complete the required tasks. This
                  may include activities like sharing on social media, joining
                  our communities, or other promotional actions.
                </p>
              </article>

              <div className="option-to-buy">
                <article className="drop-down">
                  <p className="border-radius-24">
                    <button
                      className="btn btn-show border-radius-24"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Join AirDrop
                      <span className="open-icon icon-plus">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          className="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      Starting Price: $0.01 per MOONHOP. Grab the lowest prices
                      for early supporters, and potentially make up to x50 at
                      launch.
                    </div>
                  </div>
                </article>
              </div>
            </article>
            <article className="article-box js-end">
              <h3 className="heading-h3 mb-24">STEP 4</h3>
              <span className="para-level-3">Follow and Claim</span>
              <p className="para-level-1 mt-12">
                Follow us on Twitter, Telegram, and Discord. Return to the
                AirDrop page, click "Claim AirDrop," and confirm the transaction
                in your wallet. Check your wallet balance for your new Pepe
                Layer2 tokens.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* /////////////////////////////////////////////////////// */}
      <section className="section-referral mt-96">
        <div className="container grid grid-2-cols gap ">
          <div className="referal-top">
            <h3 className="heading-h3 mb-24 mt-96 ">
              Earn a 10% Referral Bonus!
            </h3>
            <p className="para-level-2 ">
              Spread the word about $PEPE and enjoy a 10% referral bonus. Share
              the joy of $PEPE and help make the world a hoppier place with each
              referral!
            </p>
            <div className="">
              <a href="/airdrop/airdrop.html">
                <button className="btn download-btn mt-18 t-center">
                  Join AirDrop
                </button>
              </a>
            </div>
            <img src={refer} alt="refer" className="referal-cover" />
          </div>
          <div className="mt-96 referal-side">
            <article>
              <h3 className="heading-h3 ">
                <span>1.</span> Share Your Link
              </h3>
              <p className="para-level-2 mt-12">
                Copy your unique referral link and share it with friends,
                family, and your network.
              </p>
            </article>
            <article className="mt-18">
              <h3 className="heading-h3 ">
                <span>2</span> Watch Them Join
              </h3>
              <p className="para-level-2 mt-12">
                When someone uses your link to buy $PEPE, you’ll earn rewards.
              </p>
            </article>
            <article className="mt-18">
              <h3 className="heading-h3 ">
                <span>3</span> Enjoy Your 10% Bonus
              </h3>
              <p className="para-level-2 mt-12">
                Receive a 10% referral bonus for each successful referral and
                watch your rewards grow!
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////// */}
      <section className=" mt-96">
        <div className="container">
          <div className="box border-radius-48 t-center bg-color">
            <h2 className="secondary-heading mb-24 ">Stay in the Loop!</h2>
            <p className="para-level-2 box-para-2">
              Become part of the $PEPE family—follow us for the latest updates,
              exclusive content, and vibrant discussions. Dive in and connect
              with like-minded enthusiasts today!
            </p>
            <div className="community-section">
              <p>Join Our Pepecoin Community today!</p>
              <div className="icon-wrapper">
                <i className="fab fa-reddit main-icon" />
              </div>
              <div className="social-icons">
                <i className="fab fa-github" />
                <i className="fab fa-telegram-plane" />
                <i className="fab fa-discord" />
                <i className="fab fa-x-twitter" />
                <i className="fas fa-coins" />
                <i className="fas fa-chart-line" />
                <i className="fas fa-frog" />
                <i className="fas fa-exchange-alt" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-form">
        <div className="grid grid-2-cols gap ">
          <article className="form-frog">
            {/* <img src="/src/img/form-frog.png" alt=""> */}
            <img src={contact} alt />
          </article>
          <article className="form-box">
            <form action className="form">
              <input
                type="text"
                placeholder="John"
                className="mb-24 input-field"
                required
              />
              <input
                type="text"
                placeholder="Doe"
                className="mb-24 input-field"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johan@devgmail.com"
                className="mb-24 input-field"
                required
              />
              <div className="checkbox-field">
                <input type="checkbox" name=" " required id />
                <a className="privacy-policy ">
                  By submitting this form you agree to our Terms and Privacy
                  Policy
                </a>
              </div>
              <div className="checkbox-field mt-12">
                <input type="checkbox" name id required />
                <a className="privacy-policy ">
                  Yes, please keep me updated on PEPE news, events and offers.
                </a>
              </div>
              <div className="t-center">
                <button
                  type="submit"
                  className="btn send-me border-radius-24 mb-24 "
                >
                  Send
                </button>
              </div>
            </form>
          </article>
        </div>
      </section>
      <footer className="footer">
        <div className="container grid grid-4-cols mt-64">
          <div className>
            <ul className="footer-main-list">
              <li>
                <a href className="para-level-3">
                  $PEPE Whitepaper
                </a>
              </li>
              <li>
                <a href className="para-level-3">
                  Solidproof Certification
                </a>
              </li>
              <li>
                <a href className="para-level-3">
                  Coinsult Certification
                </a>
              </li>
              <li>
                <a href className="para-level-3">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className>
            <ul className="footer-main-list">
              <li>
                <a href className="para-level-3">
                  User Agreement
                </a>
              </li>
              <li>
                <a href className="para-level-3">
                  Privacy &amp; Cookies
                </a>
              </li>
              <li>
                <a href className="para-level-3">
                  Risk Advisory
                </a>
              </li>
              <li>
                <a href className="para-level-3">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href className="para-level-3">
                  User Commitments
                </a>
              </li>
            </ul>
          </div>
          <div className>
            <ul className="footer-main-list">
              <li>
                <a href className="para-level-3">
                  Twitter
                </a>
              </li>
              <li>
                <a href className="para-level-3">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-logo-box">
            <img src={logo} alt className="footer-logo" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
