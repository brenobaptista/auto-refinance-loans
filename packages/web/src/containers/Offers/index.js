import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Offer from '../../components/Offer'
import styles from './index.module.css'

const Offers = ({ match, history }) => {
  const [offer, setOffer] = useState({})
  const [loan, setLoan] = useState({})

  useEffect(() => {
    const getLoan = async () => {
      try {
        const response = await fetch(
          `http://localhost:3333/loans/${match.params.loanId}`
        )

        const loan = await response.json()

        setLoan(loan)
      } catch (error) {
        console.error(error)
      }
    }

    getLoan()
  }, [match.params.loanId])

  const handleRefinanceSubmission = event => {
    event.preventDefault()

    const refinance = { ...loan, ...offer }

    const postOffer = async () => {
      try {
        await fetch('http://localhost:3333/offer', {
          method: 'POST',
          body: JSON.stringify(refinance),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })

        history.push('/congratulations')
      } catch (error) {
        console.error(error)
      }
    }

    Object.entries(offer).length !== 0 && postOffer()
  }

  const calculateMonthlyPayment = (loanInstance, newTotalPeriod) => {
    const { loanBalance, annualPercentage } = loanInstance
    const monthlyPercentage = annualPercentage / 12

    const monthlyPayment =
      (loanBalance *
        monthlyPercentage *
        (1 + monthlyPercentage) ** newTotalPeriod) /
      ((1 + monthlyPercentage) ** newTotalPeriod - 1)

    return Math.round(monthlyPayment * 100) / 100
  }

  return (
    Object.entries(loan).length !== 0 && (
      <div className={styles.offers}>
        <div>
          <div className={styles.titleWrapper}>
            <div>
              <Link to='/'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#000000'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M11 17l-5-5m0 0l5-5m-5 5h12'
                  />
                </svg>
              </Link>
              <div className={styles.title}>
                <span className={styles.textImportant}>Select a new loan</span>{' '}
                for the {loan.vehicle.year} {loan.vehicle.make}{' '}
                {loan.vehicle.model}
              </div>
            </div>
          </div>
          <form onSubmit={handleRefinanceSubmission}>
            <div className={styles.offersWrapper}>
              <Offer
                setOffer={setOffer}
                monthlyPayment={loan.monthlyPayment}
                newAnnualPercentage={loan.annualPercentage / 2}
                newMonthlyPayment={calculateMonthlyPayment(loan, 84)}
                newTotalPeriod={84}
              />
              <Offer
                setOffer={setOffer}
                monthlyPayment={loan.monthlyPayment}
                newAnnualPercentage={loan.annualPercentage / 2}
                newMonthlyPayment={calculateMonthlyPayment(loan, 72)}
                newTotalPeriod={72}
              />
              <Offer
                setOffer={setOffer}
                monthlyPayment={loan.monthlyPayment}
                newAnnualPercentage={loan.annualPercentage / 2}
                newMonthlyPayment={calculateMonthlyPayment(loan, 60)}
                newTotalPeriod={60}
              />
            </div>
            <div className={styles.btnWrapper}>
              <button type='submit' className={styles.btn}>
                Finish
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default Offers
