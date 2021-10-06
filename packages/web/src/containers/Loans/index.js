import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import styles from "./index.module.css";

const Loans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const response = await fetch("http://localhost:3333/loans.json");

      const loans = await response.json();

      setLoans(loans);
    };

    fetchLoans();
  }, []);

  return (
    <div className={styles.loans}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Select the loan you want to refinance
        </div>
        {loans.map(
          ({
            id,
            lender,
            annualPercentage,
            monthlyPayment,
            payPeriod,
            totalPeriod,
            vehicle,
          }) => (
            <Card
              loanId={id}
              photo={`http://localhost:3333/vehicles/${vehicle.photo}`}
              info={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              mileage={vehicle.mileage}
              lender={lender}
              annualPercentage={annualPercentage}
              monthlyPayment={monthlyPayment}
              payPeriod={payPeriod}
              totalPeriod={totalPeriod}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Loans;
