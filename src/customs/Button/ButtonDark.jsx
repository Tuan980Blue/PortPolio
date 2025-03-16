import React from "react";
import { Moon, Sun } from "lucide-react";

const ButtonDark = ({ darkMode, toggleDarkMode }) => {
    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md border transition-all 
                border-gray-400 
                ${darkMode ? "hover:bg-gray-200" : "hover:bg-gray-800"}`}
        >
            {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-600 hover:text-white" />}
        </button>
    );
};

export default ButtonDark;
