import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        console.log("count changed!",count)
    },[count])
  return (
      <div className='h-screen flex items-center justify-center'>
          <button className=' bg-green-500 cursor-pointer rounded p-2 text-white' onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default UseEffectExample