import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login'
import AnimalRegister from './components/animalRegister'
import DonationRegister from './components/donationRegister'
import VeterinaryRegister from './components/veterinaryRegister'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <form>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/animals' component={AnimalRegister} />
            <Route path='/donations' component={DonationRegister} />
            <Route path='/veterinaries' component={VeterinaryRegister} />
          </Switch>
        </div>
      </form>
    );
  }
}

export default App;
