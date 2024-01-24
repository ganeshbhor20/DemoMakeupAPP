// src/components/BrandInfo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BrandInfo = ({ params }) => {
  const [brandInfo, setBrandInfo] = useState(null);

  useEffect(() => {
    // Check if params and params.brand are defined before making the API call
    if (params && params.brand) {
      const fetchBrandInfo = async () => {
        try {
          const response = await axios.get(`http://makeupapi.herokuapp.com/api/v1/products.json?brand=${params.brand}`);
          setBrandInfo(response.data);
        } catch (error) {
          console.error('Error fetching brand information:', error);
        }
      };

      fetchBrandInfo();
    }
  }, [params]);

  const tileStyle = {
  background: 'rgba(245, 245, 245, 0.7)', // Light gray background color with 0.9 opacity
  padding: '20px',
  borderRadius: '10px',
  margin: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};


  return (
    <div style={tileStyle}>
      <h2>Brand Information: {params?.brand}</h2>
      {brandInfo ? (
        <ul>
          {brandInfo.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading brand information...</p>
      )}
    </div>
  );
};

export default BrandInfo;
