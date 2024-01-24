// src/App.js
import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Container, CssBaseline, TextField, Typography, Paper, Avatar } from '@mui/material';
import Home from './components/Home';
import BrandInfo from './components/BrandInfo';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'demo' && password === '123456') {
      onLogin();
      navigate('/home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <Avatar alt="Logo" src="/logo.png" style={{ backgroundColor: '#f50057' }}></Avatar>
        <Typography component="h1" variant="h5" style={{ marginTop: '10px' }}>
          Login
        </Typography>
        <form style={{ width: '100%', marginTop: '1em' }}>
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
          <Button
            type="button"
            fullWidth
            variant="contained"
            style={{ margin: '20px 0', backgroundColor: '#f50057', color: 'white' }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        console.log('Data fetched successfully:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/brand-info/:brand" element={<BrandInfo />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
