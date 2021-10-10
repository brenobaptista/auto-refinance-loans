import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import styles from './index.module.css'

const Loans = () => {
  const [loans, setLoans] = useState([])

  useEffect(() => {
    const getLoans = async () => {
      try {
        const response = await fetch('http://localhost:3333/loans')

        const loans = await response.json()

        setLoans(loans)
      } catch (error) {
        console.error(error)
      }
    }

    getLoans()
  }, [])

  return (
    <div className={styles.loans}>
      <div className={styles.title}>Select the loan you want to refinance</div>
      <div className={styles.loansWrapper}>
        {loans.map(
          ({
            id,
            lender,
            annualPercentage,
            monthlyPayment,
            paidPeriod,
            totalPeriod,
            vehicle
          }) => (
            <Card
              key={id}
              loanId={id}
              photo={`http://localhost:3333/vehicles/${vehicle.photo}`}
              info={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              mileage={vehicle.mileage}
              lender={lender}
              annualPercentage={annualPercentage}
              monthlyPayment={monthlyPayment}
              paidPeriod={paidPeriod}
              totalPeriod={totalPeriod}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Loans
