import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 font-[Mada] leading-[23.4px] font-[600] text-[18px] rounded-[19px] text-[#2C2C2C] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;