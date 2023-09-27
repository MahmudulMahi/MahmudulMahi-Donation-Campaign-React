import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Define colors for segments

const Statistics = () => {
  const [card, setCard] = useState([]);
  const [localCard, setLocalCard] = useState([]);

  useEffect(() => {
    fetch('cards.json')
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem('donations');
    const parsedData = JSON.parse(storedData);
    setLocalCard(parsedData || []); // Set to an empty array if data is not available
  }, []);

  // Combine card and localCard data into a single dataset
  const mergedData = [
    { name: 'API Data', value: card.length },
    { name: 'Local Storage Data', value: localCard.length },
  ];

  return (
    <div>
      <h1>Data from API: {card.length}</h1>
      <h1>Data from Local Storage: {localCard.length}</h1>
      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Pie
            data={mergedData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {mergedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;