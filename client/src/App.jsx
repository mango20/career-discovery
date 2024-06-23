import { BrowserRouter, Route, Routes } from "react-router-dom";

import Questionnaire from "./page/Questionnaire/index";
import { ThemeProvider, createTheme } from "@mui/material";
import Main from "./page/Questionnaire/Parts/Main";
import Response from "./page/Reponses/index";
const THEME = createTheme({
  typography: {
    h1: {
      fontFamily: "Archivo Black, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      color: "#002F89",
    },
    h2: {
      fontFamily: "Archivo Black, sans-serif",
      fontWeight: 800,
      fontSize: 25,
      color: "#002F89",
    },
    h3: {
      fontFamily: "Archivo Black, sans-serif",
      fontWeight: 800,
      fontSize: 21,
    },
    p: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: 15,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/response/:name/:age" element={<Response />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
