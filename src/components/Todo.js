import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./todo.css";
import iconCross from "../images/icon-cross.svg";

function Todo({ status = "all" }) {
    const { todos, darkMode, toggleComplete, handleDeleteTodo } = useContext(
        GlobalContext
    );
    let bgList = darkMode ? "bg-veryDarkDesaturatedBlue " : "bg-veryLightGray";
    let hover = darkMode ? "hover:text-lightGrayishBlueHover" : "";
    let todo =
        status === "active"
            ? todos.filter((v) => v.is_complete === false)
            : status === "completed"
            ? todos.filter((v) => v.is_complete === true)
            : todos;

    return (
        <div className={`mt-4 rounded-t-lg ${bgList}`}>
            {todos.length === 0 ? (
                <h1 className="p-4">Add Todo</h1>
            ) : todo.length === 0 && status === "active" ? (
                <h1 className="p-4">None todo is active</h1>
            ) : todo.length === 0 && status === "completed" ? (
                <h1 className="p-4">None todo is completed</h1>
            ) : (
                todo.map((v) => {
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
                                        name="todo_check"
                                        checked={v.is_complete ? true : false}
                                        onClick={() => toggleComplete(v.id)}
                                        onChange={(e) => e.target.value}
                                        className={`border todo-check rounded-full cursor-pointer hover:border-primaryColor ${
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
                })
            )}
        </div>
    );
}
export default Todo;
