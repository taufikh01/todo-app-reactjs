import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const TodoList = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    return (
        <div className="w-full">
            <div className="list"></div>
        </div>
    );
};
