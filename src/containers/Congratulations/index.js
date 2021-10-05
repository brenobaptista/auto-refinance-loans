import React from "react";
import styles from "./index.module.css";

const Congratulations = () => {
  return (
    <div className={styles.congratulations}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={styles.stars}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <span>Congratulations!</span>
        </h1>
        <p className={styles.explanation}>
          You're about to lower your monthly auto loan payment! A loan officer
          will reach out to you shortly to discuss the final steps and confirm
          the loan offer.
        </p>
      </div>
    </div>
  );
};

export default Congratulations;
