import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Nav = () => {
    const { darkMode } = useContext(ThemeContext);
    let bgNav = darkMode ? "bg-veryDarkDesaturatedBlue " : "bg-veryLightGray";
    return (
        <>
            <div className={`flex-row rounded-b-lg ${bgNav}`}>
                <div className="flex items-center justify-around w-full px-1 py-4">
                    <span className="count-todo-list">5 item left</span>
                    <div className="justify-between hidden w-56 px-2 md:flex">
                        <a
                            href="http://"
                            className="cursor-pointer hover:text-lightGrayishBlueHover"
                        >
                            All
                        </a>
                        <a
                            href="http://"
                            className="cursor-pointer hover:text-lightGrayishBlueHover"
                        >
                            Active
                        </a>
                        <a
                            href="http://"
                            className="cursor-pointer hover:text-lightGrayishBlueHover"
                        >
                            Completed
                        </a>
                    </div>
                    <a className="hover:text-lightGrayishBlueHover">
                        Clear Completed
                    </a>
                </div>
            </div>

            <div
                className={`flex-row mt-4 rounded-lg md:hidden list-todo ${bgNav}`}
            >
                <div className="flex items-center justify-around w-full px-1 py-4 todo-list">
                    <div className="flex justify-between w-56 px-2">
                        <a
                            href="http://"
                            className="cursor-pointer hover:text-lightGrayishBlueHover"
                        >
                            All
                        </a>
                        <a
                            href="http://"
                            className="cursor-pointer hover:text-lightGrayishBlueHover"
                        >
                            Active
                        </a>
                        <a
                            href="http://"
                            className="cursor-pointer hover:text-lightGrayishBlueHover"
                        >
                            Completed
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Nav;
