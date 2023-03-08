import React from 'react'
import Register from './Register'
import FromSuccess from './FromSuccess'
const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  function submitForm() {
    setIsSubmitting(true)
  }
  return (
    <div>
      <Register />
      {!isSubmitting ? <Register submitForm={submitForm} /> : <FromSuccess />}
    </div>
  )
}

export default Form
