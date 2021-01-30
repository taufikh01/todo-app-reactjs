import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function AddTodo() {
    const { todos, darkMode, setTodos, idLastRow } = useContext(GlobalContext);

    let bgForm = darkMode ? "bg-veryDarkDesaturatedBlue " : "bg-veryLightGray";

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            todos.push({
                id: idLastRow + 1,
                todo: e.target.value,
                is_complete: false,
            });
            setTodos(todos.map((v) => v));
            e.target.value = "";
        }
    };
    return (
        <>
            <div className="mt-3 input-todo">
                <input
                    aria-label="checkbox add todo"
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
                    aria-label="input add todo"
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
