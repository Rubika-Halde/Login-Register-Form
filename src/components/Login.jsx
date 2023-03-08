import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../register/Logics'
import Error from './LoginError'

const Login = (submitForm) => {
  const{values, handleChange, errors, handleSubmit} = useForm(Error, submitForm)
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
      <div className="form-inputs">
        <label htmlFor="email" className='form-label'>
          EMAIL
        </label>
        <input
        className='form-input'
          placeholder="abc@gmail.com"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <Link to="/login">Don't have an account ? : Register</Link>
    </div>
  )
}


export default Login
