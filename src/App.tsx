import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./theme";
import Routes from './routes'
import {GlobalStyled} from './global.styled'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ?  'dark' : 'light')
  }

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyled/>
        <button onClick={toggleTheme}>Сменить тему</button>
        <Routes/>
      </ThemeProvider>
  );
}

export default App;
