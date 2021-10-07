import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Congratulations from './containers/Congratulations'
import Offers from './containers/Offers'
import Loans from './containers/Loans'

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Loans} />
      <Route path='/offers/:loanId' component={Offers} />
      <Route path='/congratulations' component={Congratulations} />
    </BrowserRouter>
  )
}

export default App
