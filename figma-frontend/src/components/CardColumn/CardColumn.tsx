import React, { VoidFunctionComponent } from 'react';
import { Card } from './Card';

type CardColumnProps = {
  title: string;
  items: Array<{
    title: string;
  }>;
};

const CardColumn: VoidFunctionComponent<CardColumnProps> = ({ title, items }) => {
  return (
    <div className="w-[17.5rem] min-w-[17.5rem] h-full">
      <div className="flex gap-3 pb-6">
        <div className="w-4 h-4 rounded-full bg-purple" />
        <h2 className="text-hs text-mediumGrey uppercase">{title} (0)</h2>
      </div>
      <div className="flex flex-col gap-6 last:pb-10">
        {items.map((item, index) => (
          <Card key={index} title={item.title} count={1} countTotal={2} />
        ))}
      </div>
    </div>
  );
};

export default CardColumn;
