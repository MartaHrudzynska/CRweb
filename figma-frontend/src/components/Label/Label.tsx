import React, { VoidFunctionComponent } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  title: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
};

const Label: VoidFunctionComponent<ButtonProps> = ({ title, className, isActive = true, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'drop-shadow-[0_10px_7px_rgba(0,0,0,0.3)] text-center min-w-[200px] p-4 bg-[#D1E3C5] border-primary border-[0.125rem]',
        className,
        isActive ? 'bg-[#D1E3C5]' : 'bg-grey',
      )}
    >
      {title}
    </div>
  );
};

export default Label;
