import { createContext, useState, useEffect } from "react";
export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const defTodos = [
        { id: 0, todo: "makan", is_complete: false },
        { id: 1, todo: "minum", is_complete: false },
        { id: 2, todo: "nabung", is_complete: true },
    ];
    const ls = () => {
        let localData = localStorage.getItem("todos");
        return localData ? JSON.parse(localData) : defTodos;
    };

    const [todos, setTodos] = useState(ls());
    const [darkMode, setDarkMode] = useState(true);
    const [idLastRow, setIdLastRow] = useState(0);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        setIdLastRow(todos[0] ? todos[todos.length - 1].id : 0);
    }, [todos]);

    function toggleTheme() {
        setDarkMode(!darkMode);
    }
    function toggleComplete(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.is_complete = !todo.is_complete;
                }
                return todo;
            })
        );
    }
    function handleDeleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <GlobalContext.Provider
            value={{
                todos,
                toggleTheme,
                darkMode,
                setTodos,
                toggleComplete,
                handleDeleteTodo,
                idLastRow,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
export default GlobalContextProvider;
