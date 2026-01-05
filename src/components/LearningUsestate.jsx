
import React, { useState } from 'react'
import { FaGripLinesVertical } from "react-icons/fa";

// const LearningUsestate = () => {

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
// export default LearningUsestate




// const LearningUsestate = () => {
//     const [isDark, setIsDark] = useState(false)

//     const toggle = () => {
//         document.body.style.backgroundColor = isDark ? "white" : "black"

//         setIsDark(!isDark)
//     }
//     return (
//         <div className='min-h-screen grid place-items-center'>
//             <button onClick={() => toggle()} className='w-full max-w-20 bg-green-400 p-2 rounded text-2xl' >{isDark ? "off" : "on"}</button>

//         </div>
//     )
// }

// export default LearningUsestate





const LearningUsestate = () => {
    const [active, setActive] = useState("react");

    return (
        <div>
            <div className="flex justify-center items-center m-5 gap-3">
                <button
                    onClick={() => setActive("react")}
                    className={`cursor-pointer text-2xl ${active === "react" ? "font-bold text-green-400" : ""}`}
                >
                    React
                </button>

                <FaGripLinesVertical className='text-2xl' />

                <button
                    onClick={() => setActive("node")}
                    className={`cursor-pointer text-2xl ${active === "node" ? "font-bold text-green-400" : ""}`}
                >
                    Node
                </button>
            </div>

            <div className="border-2 max-w-dvh mx-auto text-center rounded min-h-60 p-4">
                {active === "react" && (
                    <p>
                        React is a powerful and popular JavaScript library developed by Facebook for
                        building fast, interactive, and scalable user interfaces. It uses a
                        component-based architecture, which allows developers to break the UI into
                        reusable and manageable pieces. React works with a virtual DOM, which improves
                        performance by updating only the parts of the page that change instead of
                        reloading the entire DOM. It also supports one-way data binding, making
                        application state easier to understand and debug. Because of its large
                        ecosystem, strong community support, and compatibility with modern tools like
                        Vite, Tailwind CSS, and Next.js, React is widely used for building single-page
                        applications (SPAs) and modern web apps.
                    </p>
                )}

                {active === "node" && (
                    <p>
                        Node.js is an open-source JavaScript runtime environment built on Chrome’s V8
                        engine that allows developers to run JavaScript outside the browser. It is
                        designed to handle asynchronous operations efficiently using a non-blocking,
                        event-driven architecture, which makes it highly suitable for building fast
                        and scalable server-side applications. Node.js is commonly used to create APIs,
                        real-time applications like chat apps, and backend services that handle large
                        numbers of simultaneous requests. With the help of npm (Node Package Manager),
                        developers gain access to a massive ecosystem of libraries and tools, making
                        development faster and more flexible. Because of its speed, scalability, and
                        ability to use JavaScript on both frontend and backend, Node.js is a popular
                        choice for full-stack web development.
                    </p>

                )}
            </div>
        </div>
    );
};

export default LearningUsestate;
