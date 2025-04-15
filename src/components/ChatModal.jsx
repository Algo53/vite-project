import { useState } from 'react';

export default function ChatModal({ handleChatModel, darkMode }) {
  const [messages, setMessages] = useState([{
    text: 'Hello, how are you?',
    isBot: false
  },
  {
    text: 'I am fine and whats about you.',
    isBot: true
  },
  {
    text: 'What is your name?',
    isBot: false
  }
    , {
    text: 'My self John and whats your?',
    isBot: true
  }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message!",
        isBot: true
      }]);
    }, 1500);

    setInput('');
  };

  return (
    <div className={`flex-1 flex-col w-[100%] h-full z-100 p-3 
        ${darkMode ? 'bg-gray-900' : 'bg-gray-500'} rounded-xl items-center`}>
      <div className={`flex flex-col gap-10 w-[100%] rounded-lg  ${darkMode ? 'bg-gray-900' : 'bg-gray-500'}`}>
        <div className="h-[calc(100lvh_-_350px)] w-[100%] bg-white overflow-y-auto p-3 rounded-t-xl rounded-b-md text-sm">
          {messages.map((msg, i) => (
            <div key={i} className={`mb-2 ${msg.isBot ? 'text-gray-600' : 'text-indigo-600 w-[100%] pl-10 justify-end flex'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full items-end">
          <input
            className={`flex-1 border p-2 rounded w-full 
            ${darkMode ? 'bg-slate-600 text-white border-slate-500' : 'bg-white text-gray-800 border-gray-300'}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />

          <div className='flex w-full justify-between'>
            <div onClick={handleSend} className="bg-indigo-600 text-white px-4 py-2 rounded items-center justify-center flex cursor-pointer">
              Send
            </div>

            <div
              className='flex items-center justify-center px-2 cursor-pointer py-3 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 rounded-md text-red-600'
              onClick={handleChatModel}
            >
              <i className="fa-solid fa-xmark fa-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}