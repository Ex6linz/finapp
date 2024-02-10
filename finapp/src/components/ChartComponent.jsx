// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ChartStyles.css'
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// eslint-disable-next-line react/prop-types
const ChartComponent = () => {
    // State hooks for variables
    const [variable1, setVariable1] = useState(0);
    const [variable2, setVariable2] = useState(0);
    const [variable3, setVariable3] = useState(0);
    const [chartData, setChartData] = useState([0, 0, 0]); // Initial chart data
    const [labels, setLabels] = useState([]);
    // Function to fetch processed data from Flask and update chart
    const updateChart = async () => {
        try {
            const response = await fetch('http://localhost:5000/process-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ variable1, variable2, variable3 }),
            });
            const data = await response.json();
            setChartData(data.result); // Assuming the result is an array for the chart data
        } catch (error) {
            console.error('Error:', error);
        }
    };const handleNumLabelsChange = (e) => {
        const numLabels = Number(e.target.value);
        const newLabels = Array.from({ length: numLabels }, (_, i) => `Label ${i + 1}`);
        setLabels(newLabels);
    };

    // Chart data configuration
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: chartData,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'yellow',
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="chart-container">

            <input type="number" value={variable1} onChange={(e) => setVariable1(Number(e.target.value))}/>
            <input type="number" value={variable2} onChange={(e) => setVariable2(Number(e.target.value))}/>
            <input type="number" value={variable3} onChange={(e) => setVariable3(Number(e.target.value))}/>

            <button onClick={updateChart}>Update Chart</button>

            <Line data={data} options={options}/>
        </div>
    );
};

export default ChartComponent;