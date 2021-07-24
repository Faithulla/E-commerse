import React from "react";

import "./CustomBtn.scss";

const CustomBtm = ({ isGoogleSignIn, children, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
    //Dont fucking left space beetwen sybols idiot
  );
};

export default CustomBtm;
