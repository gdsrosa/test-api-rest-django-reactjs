import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login'
import AnimalRegister from './components/animalRegister'
import AnimalInfo from './components/animalInfo'
import AnimalProfile from './components/animalProfile'
import DonationRegister from './components/donationRegister'
import DonationInfo from './components/donationInfo'
import DonationProfile from './components/donationProfile'
import VeterinaryRegister from './components/veterinaryRegister'
import VeterinaryInfo from './components/veterinaryInfo'
import VeterinaryProfile from './components/veterinaryProfile'
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <form>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
            <Route path='/animals' component={AnimalRegister} />
            <Route path='/animals/info/:number' component={AnimalInfo} />
            <Route path='/animals/profile' component={AnimalProfile} />
            <Route path='/donations' component={DonationRegister} />
            <Route path='/donations/info/:number' component={DonationInfo} />
            <Route path='/donations/profile' component={DonationProfile} />
            <Route path='/veterinaries' component={VeterinaryRegister} />
            <Route path='/veterinary/info/:number' component={VeterinaryInfo} />
            <Route path='/veterinary/profile' component={VeterinaryProfile} />
          </Switch>
        </div>
      </form>
    );
  }
}

export default App;
