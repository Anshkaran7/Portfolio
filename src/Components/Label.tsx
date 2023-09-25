import React from 'react';

interface LabelProps {
  label: string;
}

const Label: React.FC<LabelProps> = ({ label }) => {
  return (
    <div>
      <p className="dark:text-neutral-900/80 transition hover:text-neutral-900 group-hover:translate-x-2 text-white/70 group-hover:text-white dark:group-hover:text-gray-700">
        {label}
      </p>
    </div>
  );
};

export default Label;
