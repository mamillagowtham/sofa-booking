import React from "react";

const FormSelect = ({ label, name,list, defaultValue,size }) => {
  return (
    <div>
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
        id={name}
      >
        {list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
    
  );
};

export default FormSelect;
