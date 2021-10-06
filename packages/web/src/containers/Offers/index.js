import React, { useState } from "react";
import { Link } from "react-router-dom";
import Offer from "../../components/Offer";
import styles from "./index.module.css";

const Offers = ({ match, history }) => {
  const [offerId, setOfferId] = useState("");

  const handleRefinanceSubmission = (event) => {
    event.preventDefault();

    console.log(offerId);

    offerId !== "" && history.push("/congratulations");
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
            offerId="01"
            setOfferId={setOfferId}
            annualPercentage="2.49%"
            monthlyPayment="$243.00"
            timeRemaining="84 mo"
          />
          <Offer
            discount="$209"
            offerId="02"
            setOfferId={setOfferId}
            annualPercentage="2.49%"
            monthlyPayment="$280.00"
            timeRemaining="72 mo"
          />
          <Offer
            discount="$172"
            offerId="03"
            setOfferId={setOfferId}
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
