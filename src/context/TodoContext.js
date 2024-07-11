import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
       {
        id: 1,
        todo: "Todo msg",
        completed: false,
       }
    ],
    addTodo:(todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo : (id) =>{},
    toggleComplete: (id) => {}
    // context me kya kya values h aur kya kya methods h vo diye jate h yha par, methods ki functionality yha par nhi , vo App.jsx me generally or anywhere
})



export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider