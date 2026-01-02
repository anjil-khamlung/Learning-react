import React from 'react'
//using prop
const ProfileCard = ({ name, role, city, isOnline, children, buttonText, onButtonClick }) => {
    return (
        <div className='p-3 border rounded grid place-items-center'>
            <p>Name: {name}</p>
            <p>Role: {role}</p>
            <p>City: {city}</p>
            <p>
                Status: {isOnline ? "Online 🟢" : "Offline 🔴"}
            </p>

            {children}
            <button onClick={onButtonClick} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">{buttonText}</button>
        </div>
    )
}

export default ProfileCard