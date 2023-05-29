import React from 'react'

interface buttonProps{
  caption: string;
  onClick?: () => void;
}
export default function Button(buttonProps: buttonProps) {
  return (
    <div>
      <button onClick={buttonProps.onClick} className='bg-creamDark px-[1vh] py-[0.5vh] rounded-lg text-white hover:bg-cream transition-colors duration-300 ease-in-out text-lg'>{buttonProps.caption}</button>
    </div>
  )
}