import React from "react";

export default function ToDoCard(props) {

    // get the item from props
    const { children, handleDeleteTodo, index, handleEditTodo } = props


    return (
        <>
            <li className="to-do-item">
                {children} {/* the text ??? */}
                <div className="icon-container">
                    <button onClick={() => {
                        handleEditTodo(ImageBitmapRenderingContext)
                    }}>
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    
                    <button onClick={() => {
                        handleDeleteTodo(index)
                    }}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    
                </div>
                
            </li> 
        </>
    )
}