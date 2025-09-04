import React, { useState } from 'react'

const Ques9 = ({name,email,bio}) => {
    const [show,setShow] = useState(false)
  return (
    <div>
        <p>{name}</p>
        <button onClick={() => setShow(!show)}>Show Details Button</button>
        {
            show && <div> <p>{email}</p><p>{bio}</p></div>
        }
    </div>
  )
}

export default Ques9