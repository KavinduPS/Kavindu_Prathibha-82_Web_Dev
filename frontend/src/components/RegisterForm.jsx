import React from 'react'
import axios from 'axios';
import {Button, Card, CardContent, Grid, TextField, Typography, } from '@mui/material'


export default function RegisterForm() {
    const baseURL = `${import.meta.env.SERVER_URL}/api/users`;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await axios.post(baseURL, {
            firstName,
            lastName,
            username,
            password,
            password2
        });
    } catch (error) {
        console.error(error);
        }
    };

  return (
    <Card style={{maxWidth:'50%', margin:"0 auto"}}>
    <CardContent>
        <Typography variant='h4' marginBottom={2}>Register</Typography>
        <form>
        <Grid container spacing={1}>
                <Grid xs={12} item>
                    <TextField type="text" required label="First name" placeholder='Enter first name' variant='outlined'></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField type="text" required label="Last name" placeholder='Enter last name' variant='outlined'></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField type="text" required label="Username" placeholder='Enter usernamw    ' variant='outlined'></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField type="password" required label="Password"  placeholder='Enter Password' variant='outlined'></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField type="password" required label="Password" placeholder='Confirm Password' variant='outlined'></TextField>
                </Grid>
                <Grid xs={12} md={6} style={{margin: '5px auto'}}item>
                    <Button onClick={handleSubmit} type="submit" color="primary" variant='contained' fullWidth>Register</Button>
                </Grid>
                </Grid>
            </form>
    </CardContent>
</Card>

  )
}
