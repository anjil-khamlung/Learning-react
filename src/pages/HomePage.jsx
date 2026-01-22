import React from 'react'
import koshi from '../assets/koshi.jpg'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
      <div
        className=" w-full bg-cover bg-center "
        style={{
          height: `calc(100vh - 3rem)`,
          backgroundImage: `url(${koshi})`,
        }}
      >
        <div className="flex  justify-end pt-40 pr-60">
          <div >
            <h1 className="text-6xl font-bold text-white ">
              WELCOME <br />
              MY <br />
              FRIEND
                    </h1>
                    
                    <NavLink to="/login" >
    <button className="bg-blue-400 text-white rounded p-2 text center mt-2 cursor-pointer">
              Get Started >>
            </button>
                    </NavLink>
        
          </div>
        </div>
      </div>
    );
}

export default HomePage