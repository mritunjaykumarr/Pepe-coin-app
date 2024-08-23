import "../style/refer.css"
const startTimer =({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state if the countdown is over
          return <span>Claim your Today Pepe!</span>;
        } else {
          // Render the countdown
          return (
            <p className="timer">
              {hours}:{minutes}:{seconds}
            </p>
          );
        }
      };


export default startTimer