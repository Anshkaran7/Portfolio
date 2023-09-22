import React from 'react';

interface LabelProps {
  label: string;
}

const Label: React.FC<LabelProps> = ({ label }) => {
  return (
    <div>
      <p className="text-neutral-900/80 transition hover:text-neutral-900 group-hover:translate-x-2 dark:text-white/70 dark:group-hover:text-white">
        {label}
      </p>
    </div>
  );
};

export default Label;
