import React from 'react'
import { useNavigation } from "react-router-dom";


const SubmitBtn = ({text}) => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  return (
    <button  className='btn btn-primary btn-block' disabled={isSubmitting}>
    {isSubmitting ? (<span className='loading loading-spinner'>sending...</span>) :(text || "submit")}
    </button>
  )
}

export default SubmitBtn