import React from 'react'
import { Link } from 'react-router-dom'

const DonationRegister = () => (
  <form>
    <h1>Donation Register Page</h1>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputDonatorName">Donator Name</label>
        <input type="text" className="form-control" id="donator-name" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputDonatorEmail">Donator Email</label>
        <input type="email" className="form-control" id="donator-email" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputDonatorName">Donation Type</label>
        <input type="email" className="form-control" id="donation-type" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputDonatorName">Quantity</label>
        <input type="email" className="form-control" id="donator-name" />
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Register</button>
    <button type="submit" className="btn btn-light"><Link to='/home'>Back</Link></button>
  </form>
)

export default DonationRegister
