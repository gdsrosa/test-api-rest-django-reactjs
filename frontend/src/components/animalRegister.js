import React from 'react'

const AnimalRegister = () => (
  <form>
    <h1>Animal Register Page</h1>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputName">Name</label>
        <input type="name" className="form-control" id="animal-name" placeholder='Your animals name' />
      </div>
      <div className="form-group col-md-6">
        <label for="inputAge">Age</label>
        <input type="text" className="form-control" id="animal-age" placeholder="Your animals age" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputSpecie">Specie</label>
        <input type="text" className="form-control" id="inputSpecie" />
      </div>
      <div className="form-group col-md-2">
        <label for="inputBreed">Breed</label>
        <input type="text" className="form-control" id="inputBreed" />
      </div>
      <div className="form-group col-md-4">
        <label for="inputImage">Image</label>
        <select id="inputImage" className="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="form-group col-md-4">
        <label for="inputBreed">Remark</label>
        <textarea type="text" className="form-control" id="inputBreed" />
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Register</button>
  </form>
)

export default AnimalRegister
