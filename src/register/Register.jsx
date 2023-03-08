import React from 'react'
import { Link } from 'react-router-dom'
import useForm from './Logics'
import Error from './Errors'

const Register = (submitForm) => {
  const { handleChange, values, handleSubmit, errors } = useForm(Error, submitForm);
  return (
    <div className="register">
      <form className='register-form' onSubmit={handleSubmit}>
        <div className="form-inputs">
        <label htmlFor="name" className='form-label'>
          FULLNAME
        </label>
        <input
        className='form-input'
          placeholder="FullName"
          type="FullName"
          id="FullName"
          name="FullName"
          onChange={handleChange}
          value={values.FullName}
        />
        {errors.FullName && <p>{errors.FullName}</p>}
        </div>
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
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button type="submit" className="btn">
          SUBMIT
        </button>
      </form>
      <Link className='form-input-login' to="/login">Already have an account ? : Login</Link>
    </div>
  )
}

export default Register
