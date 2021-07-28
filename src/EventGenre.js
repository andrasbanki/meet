import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
  const COLORS = ['#6f8575', '#e5eb98', '#cf7c69', '#71828a', '#a3687c']

  const getData = () => {
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value };
    });
    return data;
  }

  useEffect(() => { setData(() => getData()); }, [events]);

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400} >
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
          { data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))
          }
        </Pie>
        <Legend align="center" height={40} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre;