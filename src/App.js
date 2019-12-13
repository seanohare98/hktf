import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        secondary: {
            main: '#6262CB'
        },
    },
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Home/>
        </MuiThemeProvider>
   )
}
export default App;
