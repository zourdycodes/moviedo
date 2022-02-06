import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={
        onClick ? () => onClick : () => console.error("something wrong!")
      }
    >
      {children}
    </button>
  );
};

export const OutlineButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={
        props.onClick
          ? () => props.onClick
          : () => console.error("something wrong!")
      }
    >
      {props.children}
    </Button>
  );
};
