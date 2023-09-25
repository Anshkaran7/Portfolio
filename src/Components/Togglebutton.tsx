import { IconMoon, IconSun } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    // Toggle the dark mode state
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', isDarkMode); // Toggle the 'dark' class on the body element
    // You can also add code to toggle your app's dark mode styles here
    // For example, you can update CSS classes on the body or HTML element
  };


  useEffect(() => {
    // Update the body background color when dark mode is toggled
    if (!isDarkMode) {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'rgb(var(--black))';
    }
  }, [isDarkMode]);


  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <IconMoon className="text-gray-500 text-2xl" />
      ) : (
        <IconSun className="text-yellow-500 text-2xl" />
      )}
    </div>
  );
};

export default DarkModeToggle;
