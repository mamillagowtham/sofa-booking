import React, { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({name,size,label}) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(step);
  return (
    <div className="form-Control">
      <label htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={e=>setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
        />
        <div className="w-full flex justify-between text-xs px-2 mt-2">
            <span className="font-bold text-md">Min:0</span>
            <span className="font-bold text-md">Max:{formatPrice(maxPrice)}</span>
        </div>
    </div>
  );
};

export default FormRange;
