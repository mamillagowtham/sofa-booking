import React from 'react'

const FormInput = ({label,name,type,defaultValue}) => {
  return (
    <label className="form-control">
 
  <input type={type} name={name} defaultValue={defaultValue} placeholder={label} className="input input-bordered " />
</label>
  )
}

export default FormInput