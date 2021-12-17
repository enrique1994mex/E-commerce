import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    navBar: {
        backgroundColor: '#203040',
        '& a': {
            color:'#ffffff',
            marginLeft: 10,
        },
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
    }, 
})

export default useStyles; 