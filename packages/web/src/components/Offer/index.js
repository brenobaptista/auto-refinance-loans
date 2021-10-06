import React from "react";
import styles from "./index.module.css";

const Offer = ({
  setOffer,
  monthlyPayment,
  newAnnualPercentage,
  newMonthlyPayment,
  newTotalPeriod,
}) => {
  return (
    <div className={styles.offer}>
      <label className={styles.loanInfo}>
        <span className={`${styles.discount} ${styles.textImportant}`}>
          Lower you payment by {(monthlyPayment - newMonthlyPayment).toFixed(2)}{" "}
          per month
        </span>
        <input
          type="radio"
          name="offer"
          onChange={() =>
            setOffer({
              newAnnualPercentage,
              newMonthlyPayment,
              newTotalPeriod,
            })
          }
          className={styles.radio}
        />
      </label>
      <div className={styles.loanInfo}>
        <div>APR</div>
        <div className={styles.textImportant}>{newAnnualPercentage * 100}%</div>
      </div>
      <hr />
      <div className={styles.loanInfo}>
        <div>Monthly payment</div>
        <div className={styles.textImportant}>${newMonthlyPayment}</div>
      </div>
      <hr />
      <div className={styles.loanInfo}>
        <div>Time remaining</div>
        <div className={styles.textImportant}>{newTotalPeriod} mo</div>
      </div>
    </div>
  );
};

export default Offer;
