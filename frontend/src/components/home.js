import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className='container'>
  <h1>Home Page</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Animals</th>
          <th scope="col">Donations</th>
          <th scope="col">Veterinaries</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to='/animals'>Animals Register</Link></td>
          <td><Link to='/donations'>Donations Register</Link></td>
          <td><Link to='/veterinaries'>Veterinaries Register</Link></td>
        </tr>
        <tr>
          <td><Link to='/animals/info/'>Animals Info</Link></td>
          <td><Link to='/donations/info/'>Donations Info</Link></td>
          <td><Link to='/veterinaries/info/'>Veterinaries Info</Link></td>
        </tr>
        <tr>
          <td><Link to='/animals/profile'>Animals Profile</Link></td>
          <td><Link to='/donations/profile'>Donations Profile</Link></td>
          <td><Link to='/veterinaries/profile'>Veterinaries Profile</Link></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Home
