import { useEffect, useState, useContext } from "react";
import { ReferContext } from "../context/RefersContext";
import { TransactionContext } from "../context/TransactionContext";

import "../style/refer.css";

const VisitedLink = ({ url, title, value }) => {
  const [visited, setVisited] = useState(false);
  const { currentAccount } = useContext(TransactionContext);
  const { setTaskMoney, setTaskMoneyBal } = useContext(ReferContext);

  useEffect(() => {
    // Check if this specific link has been visited before
    const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks")) || [];
    if (visitedLinks.includes(url)) {
      setVisited(true);
    }
  }, [url]);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior

    if (!visited) {
      const numValue = parseFloat(e.target.dataset.reward);

      if (!isNaN(numValue)) {
        // Update task money and balance
        setTaskMoney((prevTotal) => prevTotal + numValue);
        setTaskMoneyBal(numValue);

        // Mark this link as visited
        const visitedLinks =
          JSON.parse(localStorage.getItem("visitedLinks")) || [];
        visitedLinks.push(url);
        localStorage.setItem("visitedLinks", JSON.stringify(visitedLinks));

        // Set the state to mark this link as visited
        setVisited(true);
      } else {
        console.error("Invalid number:", numValue);
      }

      // Open the link in a new tab
      window.open(url, "_blank");
    }
  };

  console.log(visited,"THIS IS COMMING FROM VISTED")

  return (
    <a
      onClick={handleClick}
      className="task-button"
      data-reward={currentAccount > 0 ? value : 0}
      disabled={visited} // Disable the button if visited
    >
      {visited ? "Task Verified" : title}
    </a>
  );
};

export default VisitedLink;
