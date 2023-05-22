import React, { VoidFunctionComponent } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick: () => void;
  children: unknown;
  className?: string;
};

const Button: VoidFunctionComponent<ButtonProps> = ({
  type = 'primary',
  disabled,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'disabled:bg-grey text-hm min-w-[10rem] p-3 border-primary border-[2px] cursor-pointer',
        type === 'primary' && 'text-primary bg-bg',
        type === 'secondary' && 'text-primary bg-[#D1E3C5]',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
