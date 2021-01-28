import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
    const { darkMode, todos, setTodos } = useContext(GlobalContext);
    let bgNav = darkMode ? "bg-veryDarkDesaturatedBlue " : "bg-veryLightGray";

    const handleClearComplete = () => {
        setTodos(todos.filter((v) => v.is_complete === false));
    };
    return (
        <>
            <div className={`flex-row rounded-b-lg ${bgNav}`}>
                <div className="flex items-center justify-around w-full px-1 py-4">
                    <span className="count-todo-list">
                        {todos.filter((v) => v.is_complete === false).length}{" "}
                        item left
                    </span>
                    <div className="justify-between hidden w-56 px-2 md:flex">
                        <NavLink
                            exact
                            to="/"
                            className={`${
                                darkMode
                                    ? "hover:text-lightGrayishBlueHover"
                                    : "hover:text-primaryColor"
                            }`}
                        >
                            All
                        </NavLink>
                        <NavLink
                            to="/active"
                            className={`${
                                darkMode
                                    ? "hover:text-lightGrayishBlueHover"
                                    : "hover:text-primaryColor"
                            }`}
                        >
                            Active
                        </NavLink>
                        <NavLink
                            to="/completed"
                            className={`${
                                darkMode
                                    ? "hover:text-lightGrayishBlueHover"
                                    : "hover:text-primaryColor"
                            }`}
                        >
                            Completed
                        </NavLink>
                    </div>
                    <span
                        onClick={() => handleClearComplete()}
                        className={`cursor-pointer ${
                            darkMode
                                ? "hover:text-lightGrayishBlueHover"
                                : "hover:text-primaryColor"
                        }`}
                    >
                        Clear Completed
                    </span>
                </div>
            </div>

            <div
                className={`flex-row mt-4 rounded-lg md:hidden list-todo ${bgNav}`}
            >
                <div className="flex items-center justify-around w-full px-1 py-4">
                    <div className="flex justify-between w-56 px-2">
                        <NavLink exact to="/">
                            All
                        </NavLink>
                        <NavLink to="/active">Active</NavLink>
                        <NavLink to="/completed">Completed</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
