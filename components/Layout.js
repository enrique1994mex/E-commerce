import React from 'react'; 
import Head from 'next/head';
import {AppBar, Toolbar, Typography, Container} from '@mui/material';
import useStyles from '../utils/styles'; 

export default function Layout({children}) {
    const classes = useStyles(); 
    return (
        <div>
            <Head>
                <title>
                    Next Market México 
                </title>
            </Head>
            <AppBar position='static' className={classes.navBar}>
                <Toolbar>
                    <Typography>Market México</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer>
                <Typography>All rights reserved. Market México.</Typography>
            </footer>
        </div>
    )
}