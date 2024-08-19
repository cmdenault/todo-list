import React from "react";

import ToDoCard from './ToDoCard';
// 

export default function ToDoList(props) {
    const { todos } = props 
    // get props from given todos list in App.jsx call

    return (
        <>
        
        the ToDoList

            {/* in javascript, map out each value in an unordered list */}
            {todos.map((val, index) => {
                return (
                    // <li key={index}>{val}</li> 
                    // when mapping you need a key that is unique
                    <ToDoCard {...props} key={index} index={index}>
                        {/*  pass props right to this child so we can get delete functions*/}
                        <p>{val}</p>
                        {/* giving val as a prop */}
                    </ToDoCard>
                )
            })}

        </>
    )
}
