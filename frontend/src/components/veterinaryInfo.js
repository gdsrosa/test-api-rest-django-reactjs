import {React, Component} from 'react'

class VeterinaryInfo extends Component {
  constructor() {
    super()
    this.state = {
      id: 1,
      name: 'John Doe',
      phone: '12313',
      crv: '3323223',
      address: 'Test Avenue, 123, St.Patrick, Dublin'
    }
  }

  render() {
    return (
      <div className='container'>
        <label>Name:</label><p>{this.state.name}</p>
        <label>Phone:</label><p>{this.state.phone}</p>
        <label>CRV:</label><p>{this.state.crv}</p>
        <label>Address:</label><p>{this.state.address}</p>
      </div>
    )
  }

}

export default VeterinaryInfo
