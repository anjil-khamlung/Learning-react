import React from "react";

// const LearningProps = (prop) => {
//   return (
//       <div>
//           <h1>Hello,{prop.name}</h1>
//           <h1>my age is {prop.age}</h1>
//           <h1>i live in {prop.city}</h1>

//     </div>
//   )
// }

// export default LearningProps

////using destructuring
// const LearningProps = ({name,age,city}) => {
//   return (
//       <div>
//           <p>Name:{name}</p>
//           <p>age:{age}</p>
//           <p>city:{city}</p>

//     </div>
//   )
// }

// export default LearningProps

//PASSING JSX AS PROPS
const LearningProps = ({ children }) => {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>{children}</div>
  );
};

export default LearningProps;
