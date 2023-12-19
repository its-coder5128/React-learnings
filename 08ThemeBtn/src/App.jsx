import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'


function App() {

    const [themeMode,setThemeMode] = useState("light")

    const darkMode = () => {
      setThemeMode("dark")
    }
    const lightMode = () => {
      setThemeMode("light")
    }

  useEffect(() => {
      document.querySelector("html").classList.remove("light","dark")
      document.querySelector("html").classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value = {{themeMode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen bg-slate-800 dark:bg-slate-400 items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                   <ThemeBtn/>     
              </div>

              <div className="w-full max-w-sm mx-auto">
                    <Card/>   
              </div>
          </div>
      </div>
    </ThemeProvider>

  )
}

export default App
