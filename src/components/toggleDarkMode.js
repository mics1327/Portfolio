import React, {useState, useEffect} from 'react';

export const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect (() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if(savedDarkMode === 'true'){
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
    };
    return(
        <div className={`container mx-auto p-4 ${isDarkMode ? 'dark' : ''}`}>
            <button 
            className="bg-gray-300 dark:bg-gray-799 px-4 py-2 rounded-md"
            onClick={toggleDarkMode}
            ></button>
        </div>
    );
}

