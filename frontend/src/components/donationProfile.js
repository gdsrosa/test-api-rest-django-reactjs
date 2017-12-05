import {React, Component} from 'react'

class DonatorInfo extends Component {
  constructor() {
    super()
    this.state = {
      id: 1,
      donator_name: 'John Doe',
      donator_email: 'jdoe@email.com',
      type: 'Medicines',
      quantity: 20
    }
  }


  render() {
    return (
      <div className='container'>
        <label>Donator Name:</label><p>{this.state.donator_name}</p>
        <label>Donator Email:</label><p>{this.state.donator_email}</p>
        <label>Type:</label><p>{this.state.type}</p>
        <label>Quantity:</label><p>{this.state.quantity}</p>
      </div>
    )
  }

}

export default DonatorInfo
