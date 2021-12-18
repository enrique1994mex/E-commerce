import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container, Link, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Layout({ title, description, children }) {
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            body1: {
                fontWeight: 'normal',
            },
        },
        palette: {
            type: 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        }, 
    });
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>
                    {title ? `${title} - Next Market México` : ' Next Market México'}
                    {description && <meta name="description" content={description}></meta>}
                </title>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
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
                <footer className={classes.footer}>
                    <Typography>All rights reserved. Market México.</Typography>
                </footer>
            </ThemeProvider>
        </div>
    )
}