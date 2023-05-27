import React, { ChangeEvent, useState } from 'react'

function Textbox() {
  const [input, setInput] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <div className='relative'>
      <label htmlFor='myInput' className={`text-white absolute left-[5%] ${focused ? 'top-[-10%]' : 'top-0'}transition-all duration-200 ease-in-out m-[1%]`}>
        Floating Label
      </label>
      <input type="text" id="myInput"
        onFocus={() => {
          setFocused((prev) => { return !prev })
        }}
        className="bg-gray-100 bg-opacity-30 border-b border-gray-300 focus:border-gray-400 outline-none p-[1%] rounded-md hover:bg-opacity-50 transition-colors duration-300 ease-out"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  )
}

export default Textbox