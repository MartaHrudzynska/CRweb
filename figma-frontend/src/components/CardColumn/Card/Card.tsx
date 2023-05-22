import { VoidFunctionComponent } from 'react';

type CardProps = {
  title: string;
  count: number;
  countTotal: number;
};

const Card: VoidFunctionComponent<CardProps> = ({ title, count, countTotal }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg py-6 px-4 cursor-pointer">
      <span className="text-hm pb-2">{title}</span>
      <span className="text-bodym font-bold text-mediumGrey">{`${count} of ${countTotal} subtasks`}</span>
    </div>
  );
};

export default Card;
