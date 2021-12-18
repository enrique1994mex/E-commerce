import React from 'react'; 
import Head from 'next/head';
import {AppBar, Toolbar, Typography, Container, Link} from '@mui/material';
import useStyles from '../utils/styles'; 
import NextLink from 'next/link'; 

export default function Layout({title, description, children}) {
    const classes = useStyles(); 
    return (
        <div>
            <Head>
                <title>
                    {title? `${title} - Next Market México`: ' Next Market México'} 
                    {description && <meta name="description" content={description}></meta>}
                </title>
            </Head>
            <AppBar position='static' className={classes.navBar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className="text-2xl font-bold">Market México</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
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