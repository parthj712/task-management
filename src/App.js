import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme/theme';
import Login from './Componenets/Login';
import './App.css';
import Layout from './Componenets/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Login /> */}
        <Layout/>
      </div>
    </ThemeProvider>
  );
}

export default App;
