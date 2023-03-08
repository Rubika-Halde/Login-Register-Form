import React, { useState, useEffect } from 'react'
// import Errors from './Errors'

const Logics = (Error, callback) => {
  const [values, setValues] = useState({
    FullName: '',
    email: '',
    passWord: '',
    Password2: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(Error(values))
    setIsSubmitting(true)
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors])

  return { handleChange, handleSubmit, values, errors }
}

export default Logics
