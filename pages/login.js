import React, {useState} from 'react';
import { Typography, List, TextField, ListItem, Button, Link } from '@mui/material';
import axios from 'axios'; 
import Layout from '../components/Layout'; 
import useStyles from '../utils/styles';
import NextLink from 'next/link';  

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const classes = useStyles();
    const submitHandler = async (e) => {
        e.preventDefault(); 
        try {
            const {data} = await axios.post('/api/users/login', {email, password});
            alert('Success login'); 
        } catch (error) {
            alert(error.message); 
        }
    }
    return (
        <Layout title="Login">
            <form onSubmit={submitHandler} className={classes.form}>
                <Typography component="h1" variant="h1">Login</Typography>
                <List>
                    <ListItem>
                        <TextField variant="outlined" fullWidth id="email" label="Email" inputProps={{ type: 'email' }}
                        onChange={e => setEmail(e.target.value)}>
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <TextField variant="outlined" fullWidth id="password" label="Password" inputProps={{ type: 'password' }}
                        onChange={e => setPassword(e.target.value)}>
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained" type="submit" fullWidth color="primary">Login</Button>
                    </ListItem>
                    <ListItem>
                        Don't have an account? &nbsp; <NextLink href="/register" passHref><Link>Register</Link></NextLink>
                    </ListItem>
                </List>
            </form>
        </Layout>
    )
}