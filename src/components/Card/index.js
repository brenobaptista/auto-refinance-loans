import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Card = ({
  vehicleId,
  photo,
  info,
  mileage,
  lender,
  annualPercentage,
  monthlyPayment,
  timeRemaining,
}) => {
  return (
    <div className={styles.card}>
      <img src={photo} alt="Vehicle" className={styles.vehicleImage} />
      <div className={styles.cardInfo}>
        <div className={styles.vehicleInfo}>
          <div className={styles.textImportant}>{info}</div>
          <div className={styles.vehicleMileage}>
            with an estimated{" "}
            <span className={styles.textImportant}>{mileage}</span> miles
          </div>
        </div>
        <div className={styles.loanInfo}>
          <div>Lender</div>
          <div className={styles.textImportant}>{lender}</div>
        </div>
        <hr />
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
        <Link to={`/offers/${vehicleId}`}>
          <button type="button" className={styles.btn}>
            Select loan
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
