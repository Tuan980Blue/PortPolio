import React from "react";
import { Moon, Sun } from "lucide-react";

const ButtonDark = ({ darkMode, toggleDarkMode }) => {
    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md border border-gray-400 transition-all hover:bg-gray-200 dark:hover:bg-gray-800"
        >
            {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
        </button>
    );
};

export default ButtonDark;
