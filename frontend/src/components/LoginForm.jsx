import React from 'react'
import axios from 'axios';
import {Button, Card, CardContent, Grid, TextField, Typography, } from '@mui/material'

export default function LoginFrom() {
  const baseURL = `${import.meta.env.SERVER_URL}/api/users/login`;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await axios.post(baseURL, {
        username,
        password,
    });
    } catch (error) {
    console.error(error);
    }
  };
  return (
    <Card style={{maxWidth:'50%', margin:"0 auto"}}>
    <CardContent>
        <Typography variant='h4' marginBottom={2}>Login</Typography>
        <form>
        <Grid container spacing={1}>
                <Grid xs={12} item>
                    <TextField type="text" required label="Username" placeholder='Enter usernamw    ' variant='outlined'></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField type="password" required label="Password"  placeholder='Enter Password' variant='outlined'></TextField>
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
