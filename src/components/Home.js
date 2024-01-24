// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Button, Typography, Grid } from '@mui/material';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  // List of makeup brands
  const brands = [
    'almay', 'alva', 'anna sui', 'annabelle', 'benefit', 'boosh', 'burt\'s bees',
    'butter london', 'c\'est moi', 'cargo cosmetics', 'china glaze', 'clinique',
  ];

  // Calculate brands per row
  const brandsPerRow = 3;

  // Create rows
  const rows = [];
  for (let i = 0; i < brands.length; i += brandsPerRow) {
    rows.push(brands.slice(i, i + brandsPerRow));
  }

  return (
    <div className="home-container"> {/* Use a class for styling */}
      <Typography variant="h4" gutterBottom>
        Available Brands
      </Typography>
      <List>
        {rows.map((row, rowIndex) => (
          <Grid container spacing={2} key={rowIndex}>
            {row.map((brand, index) => (
              <Grid item xs={4} key={index}>
                <ListItem>
                  <Link to={`/brand-info/${brand}`} style={{ textDecoration: 'none', width: '100%' }}>
                    <Button variant="contained" color="secondary" size="large" fullWidth>
                      {brand}
                    </Button>
                  </Link>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        ))}
      </List>
    </div>
  );
};

export default Home;
