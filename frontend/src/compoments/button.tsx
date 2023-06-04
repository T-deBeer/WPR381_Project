import React from 'react'


interface buttonProps{
  icon?: React.ReactNode;
  caption?: string;
  hint?: string;
  onClick?: () => void;
}
export default function Button(buttonProps: buttonProps) {
  return (
    <div>
      <button title={buttonProps.hint} onClick={buttonProps.onClick} className='bg-creamDark px-[1vh] py-[0.5vh] rounded-lg text-white hover:bg-cream hover:px-[1.5vh] hover:py-[0.8vh] transition-colors duration-300 ease-in-out text-lg'>{buttonProps.caption ?? buttonProps.icon}</button>
    </div>
  )
}