function Navbar({ onMenuClick, darkMode }) {
  return (
    <div className={`flex w-full h-full ${darkMode ? 'bg-slate-700' : 'bg-white'}`}>
      <div className='flex px-3 w-full h-full items-center justify-between'>
        <header className={`flex gap-3 xs:text-2xl sm:text-4xl text-xl font-semibold 
          ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div  
            className={`sm:hidden flex items-center justify-center px-1.5 cursor-pointer py-3 
              ${darkMode ? 
                'bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600' : 
                'bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300'} 
              rounded-sm`}
            onClick={onMenuClick}
          >
            <i className={`fa-solid fa-bars fa-lg ${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </div>
          Dashboard
        </header>

        <div className={`flex gap-3 xs:text-3xl text-2xl w-min h-full items-center justify-between cursor-pointer 
          ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <i className="fa-solid fa-circle-user fa-xl" />
          <i className="fa-solid fa-chevron-down" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;