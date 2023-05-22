import React, { VoidFunctionComponent } from 'react';

const Footer: VoidFunctionComponent = () => {
  return (
    <div className="flex justify-center border-primary border-t-[0.125rem] p-5 bg-bg text-primary absolute bottom-0 w-full">
      <span className="text-center text-hl"> Всі права захищено © 2023 </span>
    </div>
  );
};

export default Footer;
