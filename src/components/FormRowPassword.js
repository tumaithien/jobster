import React, { useState } from "react";
import IconEyeClose from "./icons/IconEyeClose";
import IconEyeOpen from "./icons/IconEyeOpen";

const FormRowPassword = ({ value, name, labelText, handleChange }) => {
  const [togglePass, setTogglePass] = useState(false);
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={togglePass ? "text" : "password"}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
      {togglePass ? (
        <IconEyeClose className="icon" onClick={() => setTogglePass(false)} />
      ) : (
        <IconEyeOpen className="icon" onClick={() => setTogglePass(true)} />
      )}
    </div>
  );
};

export default FormRowPassword;
