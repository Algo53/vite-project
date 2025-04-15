import { useState } from "react";

export default function Card({ title, value, icon, darkMode, toggleDarkMode }) {
  const [select, setSelect] = useState(false);

  return (
    <div className={`group relative p-6 h-full flex gap-4 rounded-xl items-center transition-all duration-300 
      ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-white hover:bg-gray-50'} 
      shadow-md hover:shadow-xl transform-gpu hover:-translate-y-1.5 hover:z-1
      before:content-[''] before:absolute before:-left-1 before:top-0 before:h-full before:w-0 
      before:transition-all before:duration-300 before:rounded-l-xl group-hover:before:w-1
      after:content-[''] after:absolute after:-right-1 after:top-0 after:h-full after:w-0 
      after:transition-all after:duration-300 after:rounded-r-xl group-hover:after:w-1
      ${darkMode ?
        'before:bg-gradient-to-b before:from-purple-400 before:to-blue-500 ' +
        'after:bg-gradient-to-b after:from-purple-400 after:to-blue-500' :
        'before:bg-gradient-to-b before:from-blue-400 before:to-purple-500 ' +
        'after:bg-gradient-to-b after:from-blue-400 after:to-purple-500'}`}
    >
      <div className={`flex items-center justify-center sm:px-[40px] sm:py-[52px] px-6 py-9 rounded-full ${darkMode ? 'bg-slate-600 group-hover:bg-slate-500' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
        <i className={`fa-solid fa-${icon} xs:fa-2xl fa-xl ${darkMode ? 'text-purple-400' : 'text-blue-500'}`} />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <h3 className={`sm:text-md text-lg font-semibold transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-blue-600'}`}>
            {title}
          </h3>
        </div>

        {title !== 'Tickets' && (
          <p className={`sm:text-3xl text-xl mt-4 transition-colors duration-300 ${darkMode ? 'text-purple-200' : 'text-purple-600'}`}>
            {value}
          </p>
        )}

        {title === 'Tickets' && (
          <div className="flex w-full h-full justify-end items-center">
            <div
              onClick={toggleDarkMode}
              className={`flex w-20 h-10 p-1 rounded-full cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-slate-600' : 'bg-gray-300'}`}
            >
              <div
                className={`h-8 w-8 rounded-full transition-all duration-300 transform ${darkMode ? 'bg-purple-400 translate-x-10' : 'bg-blue-500 translate-x-0'}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}