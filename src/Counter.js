import React,{useState, useEffect} from 'react'
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount(prevCount => prevCount + 1) 
    }
    
    const decrement = () => {
        setCount(prevCount => prevCount - 1) 
    }

    useEffect(() => {
      
    },[])
    

    
  return (
    <div className='counter'>
        <div className='counter_container'>
          <h3 className={count === 0 ? "counter_h3" : count > 0 ? "counter_green counter_h3" : "counter_red counter_h3" }>{count}</h3>
          <div className='counter_buttonContainer'>
          <button className='counter_button ' onClick={decrement}>-</button>
          <button className='counter_button' onClick={increment}>+</button>
          </div>
        </div>
       
    </div>
  )
}

export default Counter