import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import clsx from 'clsx';

const DarkMode = () => {
  const [dark, setDark] = useState<boolean>(false);

  const colors = clsx(
    "w-full h-screen flex items-center justify-center transition-delay duration-500",
    {
      "bg-black text-white": dark,
      "bg-white text-black": !dark,
    }
  );

  return (
    <div className={colors}>
      <button onClick={() => setDark(prev => !prev)} className="p-3 border rounded">
        {dark ? <Moon className='text-white' /> : <Sun className="text-yellow-500" />}
      </button>
    </div>
  );
};

export default DarkMode;
