import React, { useState } from 'react'

const Ques3 = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <div>
        <button onClick={() => setToggle(!toggle)}>{toggle ? "Hide text" : "Show text"}</button>  
        {toggle ? (<p>This text appear and disapper!</p>) : null}
    </div>
  )
}

export default Ques3