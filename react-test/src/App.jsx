import React, { useState } from 'react'
import './App.css'
import Ques1 from './Component/Ques1'
import Ques2 from './Component/Ques2'
import Ques3 from './Component/Ques3'
import Ques4 from './Component/Ques4'
import Ques5 from './Component/Ques5'
import Ques6 from './Component/Ques6'
import Ques7 from './Component/Ques7'
import Ques8 from './Component/Ques8'
import Ques9 from './Component/Ques9'
import Ques10 from './Component/Ques10'

const App = () => {
  const [like,initialLike] = useState(10)
  const updateLike = () => {
    initialLike(like + 1)
  }
  return (
    <div className='flex flex-col items-center'>
      {/* <Ques1 /> */}
      {/* <Ques2 /> */}
      {/* <Ques3 /> */}
      {/* <Ques4 /> */}
      {/* <Ques5 name = {"Jhon"} age = {25} /> */}
      {/* <Ques6  title = {"Laptop"} price = {999} inStock = {true}/> */}
      {/* <Ques7 /> */}
      {/* <Ques8 like = {like}  updateLike = {updateLike}/> */}
      {/* <Ques9 name = {"Alice"} email = {"alice@example.com"} bio = {"Software Developer"} /> */}
      {/* <Ques10  itemName = {"Coffee"} price = {4.99}/> */}


      //Hello iam commented
    </div>
  )
}

export default App