import React, { useState } from 'react'

// const BackgroundChanger = () => {

//     const handleClick = (color) => {

//         document.body.style.backgroundColor =color;
//     }
//     return (
//         <div className='flex gap-4  justify-center'>
//             <button onClick={()=>handleClick("red")   } className='bg-red-400 p-2 rounded'>Red</button>
//             <button onClick={() => handleClick("blue")} className='bg-blue-400 p-2 rounded'> Blue</button>
//             <button onClick={()=>handleClick("yellow")} className='bg-yellow-400 p-2 rounded'>Yellow</button>
//             <button onClick={() => handleClick("green")}className='bg-green-400 p-2 rounded' >Green</button>
//         </div>


//     )
// }
// export default BackgroundChanger




const BackgroundChanger = () => {
    const [isDark, setIsDark] = useState(false)

    const toggle = () => {
        document.body.style.backgroundColor = isDark ? "white" : "black"

        setIsDark(!isDark)
    }
    return (
        <div className='min-h-screen grid place-items-center'>
            <button onClick={() => toggle()} className='w-full max-w-20 bg-green-400 p-2 rounded text-2xl' >{isDark ? "off" : "on"}</button>

        </div>
    )
}

export default BackgroundChanger