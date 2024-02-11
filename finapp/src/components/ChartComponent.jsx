
import './ChartStyles.css'
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

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

const ChartComponent = () => {
    const [variable1, setVariable1] = useState(0);
    const [variable2, setVariable2] = useState(0);
    const [variable3, setVariable3] = useState(0);
    //const [chartData, setChartData] = useState([0, 0, 0]);


    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Dataset 1',
                data: [],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    });

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
            setChartData({
                labels: data.x_values,
                datasets: [
                    {
                        label: 'Quadratic Function',
                        data: data.y_values,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }
                ]
            });
        } catch (error) {
            console.error('Error:', error);
            // Optionally set an error state here and display it
        }
    };




    const options = {
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    autoSkip: false,
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    autoSkip: false,
                }
            }
        }
    };

    return (
        <div className="chart-container">
           <div className="input-container">
            <input type="number" value={variable1} onChange={(e) => setVariable1(Number(e.target.value))}/>
            <input type="number" value={variable2} onChange={(e) => setVariable2(Number(e.target.value))}/>
            <input type="number" value={variable3} onChange={(e) => setVariable3(Number(e.target.value))}/>
            <button onClick={updateChart}>Update Chart</button>
           </div>

            <Line data={chartData} options={options} />
        </div>
    );
};

export default ChartComponent;