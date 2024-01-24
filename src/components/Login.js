// src/components/Login.js
import React, { useState } from 'react';
import { Button, Container, CssBaseline, TextField, Typography, Paper, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'demo' && password === '123456') {
      onLogin();
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3}>
        <Avatar />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/login">
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Link>
        </form>
        {errorMessage && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {errorMessage}
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
