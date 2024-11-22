import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App=()=>{
    const [count,setCount] = useState({left:0, right:0})
      const inrleft=()=>{
        setCount ({...count,left:count.left+1});
      }
      const inrright=()=>{
        setCount ({...count,right:count.right+1});
      }
    
     
      return (
        <>
        <button onClick={inrleft}>Left</button>
        <button onClick={inrright}>Right</button>
        <br />
       Left count is {count.left}
       <br />
       Right count is {count.right}
        <br />
      
       count is {count}
        </>
      
    )
}

export default App


