import React, { VoidFunctionComponent } from 'react';
import clsx from 'clsx';

type InputProps = {
  type?: 'primary' | 'secondary';
  placeholder?: string;
  value?: string;
  typeInput?: 'text' | 'password';
  setValue?: (value: string) => void;
  className?: string;
};

const Input: VoidFunctionComponent<InputProps> = ({
  type = 'primary',
  placeholder,
  value,
  typeInput = 'text',
  setValue,
  className,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      type={typeInput}
      onChange={(e) => !!setValue && setValue(e.target.value)}
      className={clsx(
        'placeholder:text-[#739A68] min-w-[200px] px-4 text-hxl h-[3rem] border-primary border-b-[3px] text-primary focus:outline-none',
        type === 'primary' && 'bg-[#D1E3C5]',
        type === 'secondary' && 'bg-[#F2EBD9]',
        className,
      )}
    />
  );
};

export default Input;
