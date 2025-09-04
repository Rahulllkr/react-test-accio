import React, { useState } from 'react'

const Ques2 = () => {
    const [text,setText] = useState("")
  return (
    <div className='flex flex-col text-center items-center'>
        <input className='border w-[10rem]' onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder='Type Something' /> 
        <p>Your Type :- {text}</p>
    </div>
  )
}

export default Ques2