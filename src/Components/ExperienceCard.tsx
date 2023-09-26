import React from 'react';

interface Props {
  title: string;
  position: string;
  date: string;
  tasks: string[];
}

export default function ExperienceCard({ title, position, date, tasks }: Props) {
  return (
        <div className="card rounded bg-neutral-900/70 dark:bg-white/70 shadow-md dark:shadow-md  w-full p-6 dark:text-gray-700 text-white backdrop-blur before:rounded">
      <h4 className="mb-4 flex items-center text-xl font-semibold gap-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-folder"
        >
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
        </svg>
        <span>{title}</span>
      </h4>
      <h5 className="text-lg">{position}</h5>
      <p className="mt-2 leading-6 text-neutral-400 dark:text-neutral-500">{date}</p>
      <div className="mt-4 flex flex-col gap-3">
        {tasks.map((task: string, index: number) => (
          <div className="flex items-center gap-x-2" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2196F3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-sm text-white/80 dark:text-gray-700">{task}</p>
          </div>
        ))}
      </div>
      <div className="shine -z-10"></div>
      <div className="background -z-10">
        <div className="tiles">
          <div className="tile tile-1"></div>
          <div className="tile tile-2"></div>
          <div className="tile tile-3"></div>
          <div className="tile tile-4"></div>
          <div className="tile tile-5"></div>
          <div className="tile tile-6"></div>
          <div className="tile tile-7"></div>
          <div className="tile tile-8"></div>
          <div className="tile tile-9"></div>
          <div className="tile tile-10"></div>
        </div>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
}
