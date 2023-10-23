import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'
import { ThemeProvider } from './context/theme.js'


function App() {
  
  const [themeMode, setThemeMode] = useState("light")

  // the following lightTheme and darkTheme functions are defined to pass inside the Provider below.
  
  const lightTheme = () => setThemeMode("light");

  const darkTheme = () => setThemeMode("dark");

  useEffect( () => {
    document.querySelector('html').classList.remove("light", "dark");

    document.querySelector('html').classList.add(themeMode);

  } , [themeMode])

  return (

    <ThemeProvider value = { {themeMode, lightTheme, darkTheme} } >
      
      {/* have a look at the value attribute above. it sets the value of the context we defined in the theme,js file. */}
      
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
            </div>
        </div>
    </ThemeProvider>


  )
}

export default App
