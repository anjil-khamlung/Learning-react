import React from 'react'
import LearningProps from './components/LearningProps'
import ProfileCard from './components/ProfileCard'
import BackgroundChanger from './components/BackgroundChanger'

//LEARNINGPROPS
// const App = () => {
//   return (
//     <div>
//       {/* <LearningProps name="anjil" age="23" city="Dharan" /> */}

//       <LearningProps > {/* PASSING JSX AS PROPS */}
//         <h1 className='text-green-600 '>Welcome</h1>
//         <p>This is inside layout</p>
//       </LearningProps >



//     </div>
//   )
// }

// export default App


// //PROFILE CARD
// const App = () => {
//   const showProfile = (name) => {
//     alert(`Viewing ${name}'s profile`)
//   }
//   return (
//     <div>

//       <ProfileCard name='Anjil' role="frontend developer" city='dharan' isOnline={true} buttonText="show profile" onButtonClick={()=>showProfile("Anjil")} >

//         <p>Likes React & Tailwind</p>
//       </ProfileCard>

//       <ProfileCard name='Akash' role="Backend developer" city='illam' isOnline={false} buttonText="show profile" onButtonClick={() => showProfile("Aakash")}  >

//         <p>Likes React & Tailwind</p>
//       </ProfileCard>
//       <ProfileCard name='Baliram' role="Cibersecurity" city='pokhara' isOnline={false} buttonText="show profile" onButtonClick={() => showProfile("Baliram")}  >

//         <p>Likes React & Tailwind</p>
//       </ProfileCard>
//     </div>
//   )
// }

// export default App


//BACKGROUND CHANGER
const App = () => {
  return (
    <div>
      <BackgroundChanger />
    </div>
  )
}

export default App