import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoListContext } from "../context/TodoListContext";
import "./todo.css";
import iconCross from "../images/icon-cross.svg";

function Todo({ status = "all" }) {
    const { darkMode } = useContext(ThemeContext);
    const { todolist, setTodolist } = useContext(TodoListContext);
    let bgList = darkMode ? "bg-veryDarkDesaturatedBlue " : "bg-veryLightGray";
    let hover = darkMode ? "hover:text-lightGrayishBlueHover" : "";
    const toggleComplete = (id) => {
        setTodolist(
            todolist.map((todo) => {
                if (todo.id === id) {
                    todo.is_complete = !todo.is_complete;
                }
                return todo;
            })
        );
    };
    const handleDeleteTodo = (id) => {
        setTodolist(todolist.filter((todo) => todo.id !== id));
    };
    const todos =
        status === "all"
            ? todolist
            : status === "active"
            ? todolist.filter((v) => v.is_complete === false)
            : todolist.filter((v) => v.is_complete === true);
    return (
        <>
            <div className={`mt-4 rounded-t-lg ${bgList}`}>
                {todos.map((v) => {
                    return (
                        <div key={v.id}>
                            <div
                                className={`w-full todo-list flx ${
                                    darkMode
                                        ? "border-veryDarkGrayishBlue1"
                                        : "border-veryLightGrayishBlue"
                                }`}
                            >
                                <div className="flx">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id="todo-check"
                                        checked={v.is_complete ? true : false}
                                        onClick={() => toggleComplete(v.id)}
                                        onChange={(e) => e.target.value}
                                        className={`border rounded-full cursor-pointer hover:border-primaryColor ${
                                            darkMode
                                                ? "border-veryDarkGrayishBlue1"
                                                : "border-lightGrayishBlue"
                                        }`}
                                    />
                                    <span
                                        className={`mx-4 cursor-pointer transform hover:scale-105 ${hover} ${
                                            v.is_complete && darkMode
                                                ? `line-through text-veryDarkGrayishBlue1`
                                                : v.is_complete && !darkMode
                                                ? `line-through text-lightGrayishBlue`
                                                : ``
                                        }`}
                                        onClick={() => toggleComplete(v.id)}
                                    >
                                        {v.todo}
                                    </span>
                                </div>
                                <img
                                    src={iconCross}
                                    alt="iconCross"
                                    className={`mr-3 cursor-pointer ${hover}`}
                                    onClick={() => handleDeleteTodo(v.id)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Todo;
