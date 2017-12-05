import React from 'react'
import { Link } from 'react-router-dom'

const AnimalRegister = () => (
  <form>
    <h1>Animal Register Page</h1>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputName">Name</label>
        <input type="name" className="form-control" id="animal-name" placeholder='Your animals name' />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputAge">Age</label>
        <input type="text" className="form-control" id="animal-age" placeholder="Your animals age" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputSpecie">Specie</label>
        <input type="text" className="form-control" id="inputSpecie" />
      </div>
      <div className="form-group col-md-2">
        <label htmlFor="inputBreed">Breed</label>
        <input type="text" className="form-control" id="inputBreed" />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputImage">Image</label>
        <select id="inputImage" className="form-control" />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputBreed">Remark</label>
        <textarea type="text" className="form-control" id="inputBreed" />
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Register</button>
    <button type="submit" className="btn btn-light"><Link to='/home'>Back</Link></button>
  </form>
)

export default AnimalRegister
