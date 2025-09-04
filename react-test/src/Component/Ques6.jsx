import React from 'react'

const Ques6 = ({title,price,inStock}) => {
  return (
    <div>
        {
            inStock &&  <div><p>{title}</p><p>{price}</p></div>
        }
    </div>
  )
}

export default Ques6