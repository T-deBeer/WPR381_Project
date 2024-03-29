import React, { ChangeEvent, useState } from 'react'
import { TextboxProps } from '../data/interfaces';

export default function Textbox(TextboxProps: TextboxProps) {
  const [input, setInput] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className='relative'>
      <input type="text" id="myInput"
        onFocus={() => {setFocused(true);}}
        onBlur={() => { if (input === '') {setFocused(false);}}}
        className={`text-white bg-gray-100 ${focused ? 'bg-opacity-70' : 'bg-opacity-30'} border-b border-gray-300 focus:border-gray-400 outline-none p-[5%] rounded-md hover:bg-opacity-70 transition-colors duration-300 ease-out w-64`}
        value={input}
        onChange={(e) => {        
          setInput(e.target.value);
          if (TextboxProps.onChange) {
            TextboxProps.onChange(e);
          }}}
      />
      <label htmlFor='myInput' className={`text-white transition-all duration-300 ease-in-out absolute left-[5%] ${focused ? '-top-[75%]' : 'top-[15%]'} m-[1%]`}>
        {TextboxProps.text}
      </label>
    </div>
  )
}
