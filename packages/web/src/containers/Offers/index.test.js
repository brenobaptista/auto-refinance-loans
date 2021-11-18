import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Offers from './index'

beforeEach(() => {
  fetch.resetMocks()
})

test('matches snapshot', async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      id: 1,
      lender: 'The Big Bank',
      annualPercentage: 0.142,
      loanBalance: 15000,
      monthlyPayment: 377.5,
      paidPeriod: 18,
      totalPeriod: 72,
      vehicle: {
        photo: '1.jpg',
        make: 'HONDA',
        model: 'ACCORD',
        year: 2019,
        mileage: 41855
      }
    })
  )

  const { asFragment, findByRole, getByRole } = render(
    <Offers match={{ params: { loanId: 1 } }} />,
    {
      wrapper: MemoryRouter
    }
  )

  const option = await findByRole('radio', {
    name: 'Lower you payment by 94.74 per month'
  })
  fireEvent.click(option)

  const finish = getByRole('button', { name: 'Finish' })
  fireEvent.click(finish)

  expect(asFragment()).toMatchSnapshot()
})

test('matches snapshot when expection', () => {
  fetch.mockReject(() => Promise.reject('API is down'))

  const { asFragment } = render(<Offers match={{ params: { loanId: 1 } }} />, {
    wrapper: MemoryRouter
  })

  expect(asFragment()).toMatchSnapshot()
})
