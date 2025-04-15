import React from 'react'

function Sidebar({ onClose, open, darkMode }) {
  const options = [
    {
      name: "Dashboard",
      icon: 'square-minus'
    }, {
      name: "Users",
      icon: 'user'
    }, {
      name: "Reports",
      icon: 'gauge-simple'
    }, {
      name: "Settings",
      icon: 'gear'
    }
  ]

  // return (
  //   <div className={`flex flex-col w-full h-full z-10`}>
  //     <div className='flex justify-between w-full h-[15%] text-white items-center px-8 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold'>
  //       Dashboard
  //       <div
  //         className='sm:hidden flex items-center justify-center px-1.5 cursor-pointer py-3 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 rounded-sm'
  //         onClick={onClose}
  //       >
  //         <i className="fa-solid fa-xmark fa-lg" />
  //       </div>
  //     </div>

  //     <div className='flex flex-col pr-8 h-[85%] w-full'>
  //       {options.map((item, index) => (
  //         <div 
  //           key={index} 
  //           className="group relative flex w-full px-8 py-4 gap-2 items-center hover:bg-slate-700 rounded-br-lg rounded-tr-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:z-10
  //             before:content-[''] before:absolute before:-left-8 before:top-0 before:h-full before:w-0 before:bg-slate-500 before:transition-all before:duration-300 before:rounded-l-lg group-hover:before:w-2
  //             after:content-[''] after:absolute after:-right-8 after:top-0 after:h-full after:w-0 after:bg-slate-500 after:transition-all after:duration-300 after:rounded-r-lg group-hover:after:w-2"
  //         >
  //           <div className='flex w-min h-min'>
  //             <i className={`fa${item.name === 'Users' ? "-regular" : ""} fa-${item.icon} lg:text-2xl text-xl text-white mr-4 `}></i>
  //           </div>
  //           <div className='flex cursor-pointer w-full text-white font-semibold xl:text-2xl lg:text-xl md:text-lg'>
  //             {item.name}
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )
  return (
    <div className={`flex flex-col w-full h-full z-10 ${darkMode ? 'bg-slate-950' : 'bg-slate-800'}`}>
      <div className={`flex justify-between w-full h-[15%] items-center px-8 
        ${darkMode ? 'text-white' : 'text-gray-200'} 
        xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold`}>
        Dashboard
        <div
          className={`sm:hidden flex items-center justify-center px-1.5 cursor-pointer py-3 
            ${darkMode ?
              'bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700' :
              'bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300'} 
            rounded-sm`}
          onClick={onClose}
        >
          <i className={`fa-solid fa-xmark fa-lg ${darkMode ? 'text-white' : 'text-gray-800'}`} />
        </div>
      </div>

      <div className='flex flex-col pr-8 h-[85%] w-full'>
        {options.map((item, index) => (
          <div
            key={index}
            className={`group relative flex w-full px-8 py-4 gap-2 items-center 
              ${darkMode ?
                'hover:bg-slate-800' :
                'hover:bg-slate-600'} 
              rounded-br-lg rounded-tr-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:z-10
              before:content-[''] before:absolute before:-left-8 before:top-0 before:h-full before:w-0 
              before:transition-all before:duration-300 before:rounded-l-lg group-hover:before:w-2
              after:content-[''] after:absolute after:-right-8 after:top-0 after:h-full after:w-0 
              after:transition-all after:duration-300 after:rounded-r-lg group-hover:after:w-2
              ${darkMode ?
                'before:bg-slate-600 after:bg-slate-600' :
                'before:bg-slate-500 after:bg-slate-500'}`}
          >
            <div className='flex w-min h-min'>
              <i className={`fa${item.name === 'Users' ? "-regular" : ""} fa-${item.icon} lg:text-2xl text-xl 
                ${darkMode ? 'text-gray-300' : 'text-white'} mr-4`}></i>
            </div>
            <div className={`flex cursor-pointer w-full font-semibold xl:text-2xl lg:text-xl md:text-lg 
              ${darkMode ? 'text-gray-300' : 'text-white'}`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar