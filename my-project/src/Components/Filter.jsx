import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filter = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-y-8 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />

      {/* button/ */}

      {/* category */}

      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* companies */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* orders */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high","low"]}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={price}
      />
      <FormCheckBox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filter;
