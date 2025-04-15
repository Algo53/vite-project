import { useState } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ChatModal from '../components/ChatModal';
import ChatButton from '../components/ChatButton';

export default function Dashboard() {
  const [chatModel, setChatModel] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const options = [
    {
      name: 'Users',
      value: 1.1243,
      icon: 'user-large'
    },
    {
      name: 'Sessions',
      value: 243,
      icon: 'wave-square'
    },
    {
      name: 'Revenue',
      value: '$29.3443',
      icon: 'dollar-sign'
    },
    {
      name: 'Tickets',
      icon: 'ticket'
    }
  ]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex w-screen h-[calc(100lvh)] ${darkMode ? 'dark' : ''}`}>
      <div className={`flex w-screen h-[calc(100lvh)] bg-green-100 dark:bg-slate-900`}>
        <div className="sm:flex hidden lg:w-[25%] w-[30%] h-full bg-slate-800 dark:bg-slate-950">
          <Sidebar onClose={() => setIsSidebarOpen(false)} darkMode={darkMode} />
        </div>

        <div className="flex-1 lg:w-[75%] w-2/3 h-full bg-zinc-100 dark:bg-slate-800">
          <div className='flex w-full h-[13%]'>
            <Navbar 
              onMenuClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
                setChatModel(false);
              }} 
              darkMode={darkMode}
            />
          </div>

          <main className="flex-grow py-3 h-[87%] relative">
            {isSidebarOpen && (
              <div className={`sm:hidden flex absolute top-[-5.3rem] left-0 flex-1 xs:w-[50%] xxs:w-[70%] w-full h-[calc(100lvh)] bg-slate-800 dark:bg-slate-950 z-10`}>
                <Sidebar onClose={() => setIsSidebarOpen(false)} open={isSidebarOpen} darkMode={darkMode} />
              </div>
            )}

            <div className='flex py-3 xs:px-3 w-[100%] h-[100%] overflow-auto'>
              <div className="px-3 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-6 w-full h-max">
                {options.map((item, index) => (
                  <Card 
                    key={index} 
                    title={item.name} 
                    value={item.value} 
                    icon={item.icon} 
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                ))}
              </div>
            </div>

            <div className={`${chatModel || isSidebarOpen ? "hidden" : "flex"} absolute bottom-3 sm:right-3 right-0 flex w-full items-end justify-end px-3`}>
              <ChatButton handleChatModel={() => setChatModel(true)} darkMode={darkMode} />
            </div>

            <div className={`${chatModel ? "flex" : "hidden"} absolute top-3 right-0 flex xs:w-[calc(100dvh_-_300px)] h-[calc(100lvh_-_120px)] z-1 items-center justify-center px-3 opacity-100`}>
              <ChatModal handleChatModel={() => setChatModel(false)} darkMode={darkMode} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}