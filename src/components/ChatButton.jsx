function ChatButton({ handleChatModel, darkMode }) {
  return (
    <div  
      onClick={handleChatModel}
      className={`flex w-min cursor-pointer rounded-full sm:px-[25px] sm:py-[35px] px-[20px] py-8 sm:text-xl text-xl 
        ${darkMode ? 
          'bg-purple-500 hover:bg-purple-600' : 
          'bg-blue-500 hover:bg-blue-600'} text-white`}
    >
      <i className='fa-solid fa-message fa-lg' style={{ color: 'white'}} />
    </div>
  )
}

export default ChatButton;