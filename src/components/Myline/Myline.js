import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Myline = () => {
  const data = [
    {
      name: "Suplier",
      price: 4000,
      sell: 2400,
      amt: 2400,
    },
    {
      name: "Suplier B",
      price: 3000,
      sell: 1398,
      amt: 2210,
    },
    {
      name: "Suplier C",
      price: 2000,
      sell: 9800,
      amt: 2290,
    },
    {
      name: "Suplier D",
      price: 2780,
      sell: 3908,
      amt: 2000,
    },
    {
      name: "Suplier E",
      price: 1890,
      sell: 4800,
      amt: 2181,
    },
    {
      name: "Suplier F",
      price: 2390,
      sell: 3800,
      amt: 2500,
    },
    {
      name: "Suplier G",
      price: 3490,
      sell: 4300,
      amt: 2100,
    },
  ];

  return (
      <LineChart width={800} height={500} data={data}>
          <Line dataKey={'price'} ></Line>
          <Line dataKey={'sell'} ></Line>
          <XAxis dataKey={'name'}></XAxis>
          <Tooltip></Tooltip>
          <YAxis></YAxis>
      </LineChart>
  )
};

export default Myline;
