import React from 'react';

interface Props {
  category: 'region' | 'food' | 'alcohol';
  keyword: string;
  value: number;
  variation: 'decrement' | 'increment';
}

const CATEGORY_MAP = {
  region: '🏢',
  food: '🥘',
  alcohol: '🍻',
};

const KeywordRank = ({ category, keyword, value, variation }: Props) => {
  return (
    <div className="flex items-center">
      <div className="w-7 h-7 rounded-full bg-Primary headline2 flex items-center justify-center">
        {CATEGORY_MAP[category]}
      </div>
      <p className="body2 text-black ml-2">{keyword}</p>
      <span
        className={`small ml-auto ${
          variation === 'decrement' ? 'text-Error' : 'text-Primary'
        }`}
      >
        {`${variation === 'decrement' ? '-' : '+'} ${value}`}
      </span>
    </div>
  );
};

export default KeywordRank;
