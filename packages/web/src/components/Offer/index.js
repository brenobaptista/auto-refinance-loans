import React from "react";
import styles from "./index.module.css";

const Offer = ({
  offer,
  setOffer,
  discount,
  annualPercentage,
  monthlyPayment,
  timeRemaining,
}) => {
  return (
    <div className={styles.offer}>
      <label className={styles.loanInfo}>
        <span className={`${styles.discount} ${styles.textImportant}`}>
          Lower you payment by {discount} per month
        </span>
        <input
          type="radio"
          name="offer"
          value={offer}
          onChange={(event) => setOffer(event.target.value)}
          className={styles.radio}
        />
      </label>
      <div className={styles.loanInfo}>
        <div>APR</div>
        <div className={styles.textImportant}>{annualPercentage}</div>
      </div>
      <hr />
      <div className={styles.loanInfo}>
        <div>Monthly payment</div>
        <div className={styles.textImportant}>{monthlyPayment}</div>
      </div>
      <hr />
      <div className={styles.loanInfo}>
        <div>Time remaining</div>
        <div className={styles.textImportant}>{timeRemaining}</div>
      </div>
    </div>
  );
};

export default Offer;
