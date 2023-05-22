import { VoidFunctionComponent } from 'react';

const NewCardColumn: VoidFunctionComponent = () => {
  return (
    <div className="flex justify-items-center items-center w-[17.5rem] min-w-[17.5rem] mt-10 h-[calc(100% - 2.5rem)] bg-[#edf1fa] rounded-lg p-6 text-mediumGrey hover:text-purple cursor-pointer">
      <div className="text-hxl w-full text-center">+ New Column</div>
    </div>
  );
};

export default NewCardColumn;
