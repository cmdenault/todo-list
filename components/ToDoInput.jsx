import React, { useState } from "react";

export default function ToDoInput(props) {
    const { newTodo, setNewTodo, handleAddTodos} = props


    return (
        <>

        {/* the input  */}
        <input value={newTodo} onChange={
            (e) => {setNewTodo(e.target.value)}} 
            // onChange will update every change in the input
            // 
            placeholder="Enter to-do"></input>

        {/* the add button */}
        <button onClick={() => {
            handleAddTodos(newTodo)
            setNewTodo('') // reset to blank input once submitteds
        }}>Add</button>
        
        </>
    )
}