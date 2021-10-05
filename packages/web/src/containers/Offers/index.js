import React, { useState } from "react";
import { Link } from "react-router-dom";
import Offer from "../../components/Offer";
import styles from "./index.module.css";

const Offers = ({ match, history }) => {
  const [loanId, setLoanId] = useState("");

  const handleRefinanceSubmission = (event) => {
    event.preventDefault();

    console.log(loanId);

    loanId !== "" && history.push("/congratulations");
  };

  return (
    <div className={styles.offers}>
      <div className={styles.wrapper}>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </Link>
        <div className={styles.title}>
          <span className={styles.textImportant}>Select a new loan</span> for
          the Vehicle with ID {match.params.loanId}
        </div>
        <form onSubmit={handleRefinanceSubmission}>
          <Offer
            discount="$246"
            loanId="01"
            setLoanId={setLoanId}
            annualPercentage="2.49%"
            monthlyPayment="$243.00"
            timeRemaining="84 mo"
          />
          <Offer
            discount="$209"
            loanId="02"
            setLoanId={setLoanId}
            annualPercentage="2.49%"
            monthlyPayment="$280.00"
            timeRemaining="72 mo"
          />
          <Offer
            discount="$172"
            loanId="03"
            setLoanId={setLoanId}
            annualPercentage="2.49%"
            monthlyPayment="$317.00"
            timeRemaining="60 mo"
          />
          <button type="submit" className={styles.btn}>
            Finish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Offers;
