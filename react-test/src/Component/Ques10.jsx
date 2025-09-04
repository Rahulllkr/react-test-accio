import React, { useState } from 'react'

const Ques10 = ({itemName,price}) => {
    const [quantity,setQuantity] = useState(0)
  return (
    <div>
        <div>{itemName} - ${price}</div>
        <p>Quantity - {quantity}</p>
        <button onClick={() => setQuantity(quantity+1)}>Increament</button>
        <button onClick={() => setQuantity(quantity-1)}>Decrement</button>
        <p>Total Price : {price*quantity}</p>
    </div>
  )
}

export default Ques10