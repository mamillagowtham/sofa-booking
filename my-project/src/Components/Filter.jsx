import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filter = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-y-8 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* search */}
      <FormInput type="search" label="search product" name="search" size="sm" />

      {/* button/ */}
    
      {/* category */}
  
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/* companies */}
       <FormSelect
        label="select company"
        name="category"
        list={meta.companies}
        size="select-sm"
      />
      {/* orders */}
       <FormSelect
        label="sort by "
        name="order"
        list={["a-z","z-a","high-low","low-high"]}
        size="select-sm"
      />
      <FormRange label= "select price" name ="price" size="range-sm"/>
      <FormCheckBox label= "free shipping" name="shipping" size="checkbox-sm"/>
        <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/product" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filter;
