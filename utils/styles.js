import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    navBar: {
        backgroundColor: '#203040',
        '& a': {
            color:'#ffffff',
            marginLeft: 10,
        },
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    grow: {
        flexGrow: 1,
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
    }, 
    form: {
        width: '100%',
        maxWidth: 800,
        margin: '0 auto'
    },
    navbarButton: {
        color: '#ffffff',
        textTransform: 'initial',
    },
    transparentBackground: {
        backgroundColor: 'transparent',
    },
    error: {
        color: '#f04040',
    }, 
    fullWidth: {
        width: '100%',
    }, 
})

export default useStyles; 