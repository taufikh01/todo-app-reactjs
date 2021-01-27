import React, { useContext } from "react";
import "./header.css";
import { ThemeContext } from "../context/ThemeContext";
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";

export default function Header() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    let iconTheme = darkMode ? iconSun : iconMoon;
    return (
        <header className="flx">
            <span className="text-3xl header-title md:text-4xl ">Todo</span>
            <img
                src={iconTheme}
                alt=""
                className="cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
            />
        </header>
    );
}
