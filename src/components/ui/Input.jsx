import React from "react";

const Input = React.forwardRef(
  ({ label, type, value, onChange, error, name, ...rest }, ref) => {
    return (
      <input
        type={type}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={label}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Input;
