import React from "react";
import "./radio.scss";

interface RadioProps {
  name: string;
  label?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ name, value = "", checked = false, label = "", onChange }) => {
  return (
    <label className="radio">
      <input
        className="radio__input"
        type="radio"
        name={name}
        checked={checked}
        onChange={(e) => onChange?.(e)}
        value={value}
      />
      <span className="radio__dot" />
      {label}
    </label>
  );
};

export default Radio;
