import { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const DarkModeContext = createContext()
const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(false, 'theme')

    useEffect(() => {

        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode')
            document.documentElement.classList.remove('light-mode')
        } else {
            document.documentElement.classList.add('light-mode')
            document.documentElement.classList.remove('dark-mode')
        }
    }, [isDarkMode])
    const toggleDarkMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode)
    }

    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children} </DarkModeContext.Provider>
}

const useDarkMode = () => useContext(DarkModeContext)

export { useDarkMode, DarkModeProvider }