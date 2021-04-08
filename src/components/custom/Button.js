import React from "react";

const Button = ({ children, onClick }) => {
  return <button onClick={onClick} className="c-btn">{children}</button>;
};

export default Button;
