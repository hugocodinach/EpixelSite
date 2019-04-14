import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#323f4f',
            main: '#0B1927',
            dark: '#000000'
        },
        secondary: {
            light: '#fff84f',
            main: '#F9C500',
            dark: '#c19500'
        },
        error: {
            main: '#9b2d12',
            dark: '#670000',
        },
        home: {
            light: '#d25c3c',
            primary: '#0B1927',
            secondary: "#F9C500",
        },
    },
    typography: {
        fontFamily: 'Roboto',
        blackColor: '#1e272c',
        useNextVariants: true,
    },
});

export default theme;

//25375E