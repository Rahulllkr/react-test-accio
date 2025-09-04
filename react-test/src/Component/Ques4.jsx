import React, { useState } from 'react'

const Ques4 = () => {
    const [color,setColor] = useState(["red","green","blue"])
    const length = Math.random()*color.length
  return (
    <div>
        <button onClick={() => setColor(Math.floor(length))}>Color Change</button>
        <p className={`bg-` + (color[length])}>Hello  color</p>
    </div>
  )
}

export default Ques4