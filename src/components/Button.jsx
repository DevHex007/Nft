import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-[#990099] shadow-lg shadow-[#990099]/50 hover:shadow-[#990099]/40 rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
