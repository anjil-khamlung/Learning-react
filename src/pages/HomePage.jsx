import React from 'react'
import koshi from '../assets/koshi.jpg'

const HomePage = () => {
    return (
        <div className=' w-full bg-cover bg-center'
            style={{
                height: `calc(100vh - 3rem)`,
                backgroundImage: `url(${koshi})`
            }}>
            <div className='flex justify-end pt-40 pr-60'>
                <h1 className='text-6xl font-bold text-white '>
                    WELCOME <br />
                    MY <br />FRIEND
                </h1> 
           </div>
        </div>

    )
}

export default HomePage