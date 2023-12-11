import React, { useState, useEffect } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './Graph.css'; 

const ScatterGraph = ({ username, selectedMonth }) => {
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    fetchMonthlyData(username, selectedMonth);
  }, [username, selectedMonth]);

  const fetchMonthlyData = async (username, selectedMonth) => {
    try {
      const response = await fetch(
        `http://174.138.68.220:5000/getBudgetsByMonth?username=${username}&month=${selectedMonth}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setMonthlyData(data);
    } catch (error) {
      console.error('Error fetching monthly data:', error);
    }
  };

  const transformedData = monthlyData.map((item) => ({
    itemType: item.item,
    budget: item.budget || 0,
    capacity: item.capacity || 0,
  }));

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Monthly Capacity vs Budget (Scatter Plot)</h2>

      {transformedData.length > 0 ? (
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="budget" name="Budget" unit=" units" />
            <YAxis dataKey="capacity" name="Capacity" unit=" units" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="Monthly Data" data={transformedData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      ) : (
        <p>No data available for the selected month.</p>
      )}
    </div>
  );
};

export default ScatterGraph;
