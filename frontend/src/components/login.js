import React from 'react'
const Login = () => (
  <form>
    <h1>Login</h1>
    <div className='form-group col-md-6'>
      <label>Login</label>
      <input type="text" className="form-control" id="login" />
      <label>Password</label>
      <input type="password" className="form-control" id="password" />
    </div>
    <div className='form-group col-md-6'>
      <button type="submit" className="btn btn-primary">Log In</button>
    </div>
  </form>
)


export default Login
