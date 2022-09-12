import { NetflixApp } from './components/NetflixApp';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { dark } from '@mui/material/styles/createPalette';

const theme = createTheme({
  palette: {
    type: dark,
    primary: {
      main: '#111'
    },
    secondary:{
      main: '#000'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NetflixApp />
    </ThemeProvider>
  );
}

export default App;
