import { useEffect, useState, useContext } from "react";
import { ReferContext } from "../context/RefersContext";
import { TransactionContext } from "../context/TransactionContext";

import "../style/refer.css";

const VisitedLink = ({ url, title, value }) => {
  const [visited, setVisited] = useState(false);
  const [taskMoneyList, setTaskMoneyList] = useState([]);

  const { currentAccount } = useContext(TransactionContext);

  // const [count,setCount] = useState(0)
  const { setTaskMoney, setTaskMoneyBal } = useContext(ReferContext);

  useEffect(() => {
    // Check if the link has been visited before
    const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks")) || [];
    if (visitedLinks.includes(url)) {
      setVisited(true);
    }
  }, [url]);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    // const buttonValue = e.target.getAtribute;
    const dataAttribute = Number(e.target.dataset.reward);
    const numValue = parseFloat(dataAttribute);
    setTaskMoneyBal(numValue);

    // Store the clicked button's value in the state
    if (visited) {
      // Ensure `prevList` is an array before updating state

      if (!isNaN(numValue)) {
        // Update the list
        setTaskMoneyList((prevList) => [...prevList, numValue]);    
        setTaskMoney((prevTotal) => prevTotal + numValue);

      } else {
        console.error("Invalid number:", dataAttribute);
      }
    }

    // Mark the specific link as visited in local storage
    const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks")) || [];
    if (!visitedLinks.includes(url)) {
      visitedLinks.push(url);
      localStorage.setItem("visitedLinks", JSON.stringify(visitedLinks));
      setVisited(true);
    }

    // Open the link in a new tab
    window.open(url, "_blank");
  };
  // console.log(visited,"THIS FROM VISTIED LINK 26",taskMoney)

  return (
    <a
      href={url}
      onClick={handleClick}
      className="task-button"
      data-reward={currentAccount > 0 ? value : 0}
      key={url + title} // Change the color if visited
    >
      {title}
    </a>
  );
};

export default VisitedLink;
