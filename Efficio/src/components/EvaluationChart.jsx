import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

import TasksData from "../data/TasksData"; 
import EmployeeData from "../data/EmployeeData"; 

const EvaluationChart = () => {
  const { tasks } = TasksData();
  const { users } = EmployeeData(); 

 
  const grouped = tasks.reduce((acc, task) => {
    if (!acc[task.assignedTo]) {
      const user = users.find(u => u.id === task.assignedTo);
      acc[task.assignedTo] = {
        name: user ? user.name : task.assignedTo,
        total: 0,
        count: 0,
      };
    }
    acc[task.assignedTo].total += task.status;
    acc[task.assignedTo].count += 1;
    return acc;
  }, {});

  const colors = ["#B8C480", "#FFB6B9", "#FAD6A5", "#9AD0EC", "#D291BC"]; 

  const chartData = Object.keys(grouped).map((userId, index) => ({
    name: grouped[userId].name, 
    performance: Math.round(grouped[userId].total / grouped[userId].count),
    fill: colors[index % colors.length], 
  }));

  return (
    <div className="bg-[#FAFAD2] p-6 rounded-2xl shadow-md h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#6B705C]">
        Employee Performance Evaluation
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar
            dataKey="performance"
            radius={[8, 8, 0, 0]}
            
            isAnimationActive={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EvaluationChart;


