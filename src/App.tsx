import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./global/styles/default";
import { Router } from "./routes/Router";
import { GlobalDefault } from "./global/global";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      
      <GlobalDefault/>
    </ThemeProvider>
  )
}
