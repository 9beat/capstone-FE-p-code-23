import { useMemo } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// Redux
import { useSelector } from 'react-redux';
// Material UI
import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';
// Custom theme
import { themeSettings } from './theme.js';
// Framer effect
import AnimatedRoutes from './views/Layout/AnimatedRoutes.jsx';



export default function App() {
  // mode initialState
  const mode = useSelector((state) => state.mode)

  // theme state settings 
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  // // framer
  // const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  // const itemVariants = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible
  // };

  return (
    <div className="App">
      <Router> 
        <ThemeProvider theme={theme} >
          <CssBaseline /> {/* CSS reset */} 
          <AnimatedRoutes />
        </ThemeProvider>
      </Router>
    </div>
  );
}
