import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoListContext } from "../context/TodoListContext";

function AddTodo() {
    const { darkMode } = useContext(ThemeContext);
    const { todolist, setTodolist } = useContext(TodoListContext);

    const [idLastRow, setIdLastRow] = useState(
        todolist[todolist.length - 1].id
    );
    let bgForm = darkMode ? "bg-veryDarkDesaturatedBlue " : "bg-veryLightGray";

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            todolist.push({
                id: idLastRow + 1,
                todo: e.target.value,
                is_complete: false,
            });
            setTodolist(todolist.map((v) => v));
            e.target.value = "";
        }
    };
    useEffect(() => {
        setIdLastRow(todolist[todolist.length - 1].id);
    }, [todolist]);
    return (
        <>
            <div className="mt-3 input-todo">
                <input
                    type="checkbox"
                    className={`absolute p-2.5 mt-4 ml-4 border rounded-full appearance-none ${
                        darkMode
                            ? "border-veryDarkGrayishBlue1"
                            : "border-lightGrayishBlue"
                    }`}
                />
                <input
                    type="text"
                    id="addTodo"
                    className={`w-full px-12 py-4 rounded-lg ${bgForm}`}
                    placeholder="Create a new todo.."
                    name="add_todo"
                    onKeyPress={(e) => handleKeyPress(e)}
                />
            </div>
        </>
    );
}

export default AddTodo;
