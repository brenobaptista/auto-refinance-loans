import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

const Card = ({
  loanId,
  photo,
  info,
  mileage,
  lender,
  annualPercentage,
  monthlyPayment,
  paidPeriod,
  totalPeriod
}) => {
  return (
    <div className={styles.card}>
      <img src={photo} alt='Vehicle' className={styles.vehicleImage} />
      <div className={styles.cardInfo}>
        <div className={styles.vehicleInfo}>
          <div className={styles.textImportant}>{info}</div>
          <div className={styles.vehicleMileage}>
            with an estimated{' '}
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
          <div className={styles.textImportant}>
            {(annualPercentage * 100).toFixed(2)}%
          </div>
        </div>
        <hr />
        <div className={styles.loanInfo}>
          <div>Monthly payment</div>
          <div className={styles.textImportant}>${monthlyPayment}</div>
        </div>
        <hr />
        <div className={styles.loanInfo}>
          <div>Time remaining</div>
          <div className={styles.textImportant}>
            {totalPeriod - paidPeriod}/{totalPeriod} mo
          </div>
        </div>
        <Link to={`/offers/${loanId}`}>
          <button type='button' className={styles.btn}>
            Select loan
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Card
