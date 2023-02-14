import React from "react";

const Button = ({ children, onClick, type, ...rest }) => {
  const bgClrClass = React.useMemo(() => {
    if (type === "success") {
      return `bg-green-700 border-green-900`;
    } else if (type === "danger") {
      return `bg-red-700 border-red-900`;
    } else {
      return `bg-blue-700 border-blue-900`;
    }
  }, [type]);

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 shadow rounded text-white ${bgClrClass}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
