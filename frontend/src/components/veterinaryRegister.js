import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VeterinaryProfile from './../components/veterinaryProfile'
import VeterinaryInfo from './../components/veterinaryInfo'

const VeterinaryRegister = () => (
  <form>
    <h1> Veterinaries Register Page</h1>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputDonatorName">Vet Name</label>
        <input type="text" className="form-control" id="vet-name" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputDonatorEmail">Phone</label>
        <input type="text" className="form-control" id="vet-phone" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputDonatorName">CRV</label>
        <input type="email" className="form-control" id="donation-type" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputDonatorName">Addres</label>
        <input type="email" className="form-control" id="vet-address" placeholder='Rua Test, 123' />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </div>
    <Switch>
      <Route exec path='/veterinary' component={VeterinaryProfile} />
      <Route path='/veterinary/:number' component={VeterinaryInfo} />
    </Switch>
  </form>
)

export default VeterinaryRegister
