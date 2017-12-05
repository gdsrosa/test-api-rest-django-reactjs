import {React, Component} from 'react'

class AnimalInfo extends Component {
  constructor() {
    super()
    this.state = {
      id: 1,
      name: 'Kimi',
      age: '12',
      specie: 'Feline',
      image: '/users/images/cat.png'
      breed: 'Blue Russian'
      remark: 'Love wiskas'
    }
  }

  render() {
    return (
      <div className='container'>
        <label>Name:</label><p>{this.state.name}</p>
        <label>Age:</label><p>{this.state.age}</p>
        <label>Specie:</label><p>{this.state.specie}</p>
        <label>Image:</label><p>{this.state.image}</p>
        <label>Breed:</label><p>{this.state.breed}</p>
        <label>Remark:</label><p>{this.state.remark}</p>

      </div>
    )
  }

}

export default AnimalInfo
