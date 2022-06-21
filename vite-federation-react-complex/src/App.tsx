import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import Settings from './components/Settings';
import defaultTheme from './shared/themes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: defaultTheme.colors.primary, dark: defaultTheme.colors.primary },
    divider: defaultTheme.colors.support,
    secondary: { main: defaultTheme.colors.secondary, dark: defaultTheme.colors.secondary },
    text: { primary: defaultTheme.colors.primary, secondary: defaultTheme.colors.primary },
    background: { default: defaultTheme.colors.background, paper: defaultTheme.colors.background },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <Settings />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
