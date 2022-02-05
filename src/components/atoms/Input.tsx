import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  value: string | number | any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className="input__generics"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : undefined}
    />
  );
};
