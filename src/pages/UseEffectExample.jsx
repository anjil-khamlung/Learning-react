import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        console.log("count changed!",count)
    },[count])
  return (
      <div>
          <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default UseEffectExample