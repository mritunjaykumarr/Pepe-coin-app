import { useContext, useState } from "react";
// import { FaTelegram } from "react-icons/fa";
// import { FaXTwitter, FaEthereum } from "react-icons/fa6";
import { TransactionContext } from "../context/TransactionContext";
import { PepeContext } from "../context/PepeCoinContext";
import { network } from "../utlis/constants";

export const timerFunction = () => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Get current date and determine target date
  const today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday =
      today > new Date(`${dayMonth}${yyyy}`)
        ? `${dayMonth}${nextYear}`
        : `${dayMonth}${yyyy}`;

  // Countdown target date
  const countDown = new Date(birthday).getTime();

  const x = setInterval(() => {
    const now = new Date().getTime(),
      distance = countDown - now;

    // Calculate remaining days, hours, minutes, and seconds
    const daysRemaining = Math.floor(distance / day);
    const hoursRemaining = Math.floor((distance % day) / hour);
    const minutesRemaining = Math.floor((distance % hour) / minute);
    const secondsRemaining = Math.floor((distance % minute) / second);

    // Update HTML elements
    document.getElementById("days").textContent = `${daysRemaining} D`;
    document.getElementById("hours").textContent = `${hoursRemaining} H`;
    document.getElementById("minutes").textContent = `${minutesRemaining} M`;
    document.getElementById("seconds").textContent = `${secondsRemaining} S`;

    // Clear interval if countdown is finished
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").textContent = "0 D";
      document.getElementById("hours").textContent = "0 H";
      document.getElementById("minutes").textContent = "0 M";
      document.getElementById("seconds").textContent = "0 S";
    }
  }, 1000); // Update every second
};

// Call the function to start the countdown
timerFunction();
// timerFunction();
const boxCommonProperty =
"flex flex-1 flex-col max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";

// Function to calculate the amount of Pepe Coins for $1 USD

// // Input Component
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
  placeholder={placeholder}
  type={type}
  step="0.0001"
  value={value}
  onChange={(e) => handleChange(e, name)}
  className="bg-black rounded-sm h-10 text-white p-2 py-2"
  />
);
const Hero = () => {
  const [pepeCoinAmount, setPepeCoinAmount] = useState("0");
  
  const {
    formData,
    switchNetwork,
    handleChange,
    sendTransaction,
    setCurrrentId,
    setStatusNetwork,
    chainId,
    
  } = useContext(TransactionContext);
  
  switchNetwork()
  const { setAmount, tokenBalance } = useContext(PepeContext);

  // console.log(tokenBalance, "THIS FROM LINE 350");
  formData.addressTo = "0xEa665b4485e21d5C4c06aad6F3C95920300c306E";
  // formData.addressTo = "0xD53f30a45Bb3F338e6a0Cf1ee6E6Fb0303FCAb70";
  // handleChangeCoin();
  // console.log(formData.addressTo);
  const handleSubmit =(e) => {
    const { amount } = formData;

    e.preventDefault();
    setAmount(amount);
    console.log(amount,"this is amount 👌👌👌👌");

    if (!amount.length) return;
    
     sendTransaction()
    
  };

   async function handleChanges(e) {
    console.log(e.target.value, "this from 111");
    // e.target.a;

     setCurrrentId(e.target.value);
    setStatusNetwork(e.target.value);
   
   

  }
 
  // Handle input change
  const handleInputChange = (e, name) => {
    const value = e.target.value;
    handleChange(e, name);

    if (name === "amount") {
      const pepeAmount = calculatePepeCoinAmount(value);
      setPepeCoinAmount(pepeAmount);
    }
  };

  // Calculate Pepe Coin amount based on USD amount
  const calculatePepeCoinAmount = (usdAmount) => {
    const rate = 10000; // 1 USD = 10,000 Pepe Coin
    return (usdAmount * rate).toFixed(4);
  };

  // selectIndex();
  return (
    <section className="section-hero  ">
      <div className="container grid grid-cols-2 gap-6 items-center justify-items-center">
        {/* <iframe
          src="https://gifer.com/embed/DsjK"
          // frameBorder="0"
          allowFullScreen
          no
          className="video"
        ></iframe> */}
        <div className="hero-heading-field">
          <h1 className="heading-primary mt-96">This is pepe coin website</h1>

          <p className="para-level-2 mt-32">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            quos sed et qui placeat distinctio voluptate ullam! Sapiente ad
            dolores repudiandae sunt, esse vel magnam! Nam natus doloremque
            veniam perspiciatis.
          </p>
          <div className="social-btn flex mt-32">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                fill="currentColor"
                className="bi bi-twitter-x icons"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                fill="currentColor"
                className="bi bi-telegram icons ml-48"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
              </svg>
            </a>
          </div>
        </div>
        <div className={` ${boxCommonProperty}`}>
          <article className=" ">
            <div className="w-full h-16 bg-neutral-800 rounded-lg mb-3 flex justify-center items-center">
              <h2 className="secondary-heading">Buy Pepe Coin</h2>
            </div>
            <div className="w-full h-24 bg-neutral-800 rounded-lg mb-3 p-4 ">
              <article className="flex items-center gap-4">
                <p
                  className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl"
                  id="days"
                ></p>
                <p
                  className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl"
                  id="hours"
                ></p>
                <p
                  className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl"
                  id="minutes"
                ></p>
                <p
                  className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl"
                  id="seconds"
                ></p>
              </article>
              <p className="text-zinc-600 text-center text-base py-1">
                until next price will increased
              </p>
            </div>
          </article>
          <article>
            <div>
              <p className="bg-blue-100 text-blue-800 text-xl text-center  me-2 px-2.5 py-3 rounded dark:bg-blue-900 dark:text-blue-300 mb-4 font-semibold ">
                $1 Dollor = 10000 PEPE
              </p>
              <div className="w-full h-16 bg-green-100 rounded-lg flex justify-center items-center flex-col flex-1">
                <p className=" ">Your Purchased</p>

                <p className="font-bold text-3xl text-blue-600">
                  {tokenBalance}
                </p>
              </div>
            </div>
          </article>
          <article className="mt-4 bg-sky-100 p-4">
            <div className="flex flex-row flex-1 mb-2 gap-4 bg-black p-2 rounded-lg">
              <div className="w-full h-10 bg-yellow-600 rounded-lg text-center flex items-center justify-center">
                Cryto
              </div>
              <div className="w-full h-10 rounded-lg text-center text-white flex items-center justify-center">
                <p> card</p>
              </div>
            </div>

            <form className="max-w-sm mx-auto">
              <select
                id="cryptocurrency"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChanges}
              >
                {network.map((opt) => (
    <option value={opt.chainId} key={opt.chainId} selected={String(opt.chainId) === String(chainId)}>
      {opt.chainName}
    </option>
  ))}
                {/* <option>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                    </svg>
                    choose Wallet
                  </span>
                </option>
                <option value="0x38" className="cursor-pointer" onClick={changeNetwork}>
                  Ethereum
                </option>
                <option value="0xA4B1">Arbitrum</option>
                <option value="0x7A">Base</option>
                <option value="BSC">Binance Smart Chain</option> */}
              </select>
            </form>

            <div className="grid grid-cols-2 mt-2 gap-4 mb-4 rounded-lg bg-black p-4 ">
              <div className=" flex bg-white rounded-lg p-4 flex-col">
                <label
                  htmlFor=""
                  className="text-zinc-500 text-sx text-left mb-2"
                >
                  you pay
                </label>

                <Input
                  placeholder="00"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  handleChange={handleInputChange}
                />
              </div>
              <div className=" flex bg-white rounded-lg p-4 flex-col">
                <label
                  htmlFor=""
                  className="text-zinc-500 text-sx text-left mb-2"
                >
                  you get
                </label>
                <p
                  className="text-base bg-black rounded-sm h-10 text-white p-2 py-2"
                  id="pepe-coin"
                >
                  {pepeCoinAmount}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Buy And Stake Pepe Coin
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Hero;
