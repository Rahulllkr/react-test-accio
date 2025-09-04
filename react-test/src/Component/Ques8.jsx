import React from 'react'

const Ques8 = ({like,updateLike}) => {
  return (
    <div>
       <p>💗 {like} Likes</p> 
       <button onClick={updateLike}>Like Button</button>
    </div>
  )
}

export default Ques8