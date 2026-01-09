import React from 'react'
import farcry from '../assets/farcry.png'

const HomePage = () => {
    return (
        <div className=' w-full bg-cover bg-center'
            style={{
                height: `calc(100vh - 3rem)`,
                backgroundImage: `url(${farcry})`
            }}>
            <div className='pl-40 pt-40 '>
                <h1 className='text-6xl font-bold text-white '>
                    WELCOME <br />
                    MY <br />FRIEND
                </h1> 
           </div>
        </div>

    )
}

export default HomePage