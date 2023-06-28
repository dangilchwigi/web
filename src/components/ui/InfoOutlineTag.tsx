import React from 'react';

interface Props {
  label: string;
}

const InfoOutlineTag = ({ label }: Props) => {
  return (
    <span className="bg-white border border-Info h-4 small text-Info px-4 py-1 rounded">
      {label}
    </span>
  );
};

export default InfoOutlineTag;
