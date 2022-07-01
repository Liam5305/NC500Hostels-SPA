import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from 'axios';


const ChartData = () => {
    const [chartData, setChartData] = useState({});
    const [chartRatings, setChartRatings] = useState([]);
    const [hostelName, setHostelName] = useState([]);

    const Chart = () => {
        let charRat = [];
        let hostelName = [];
        axios.get("http://localhost:3000/hostels")
            .then(res => {
                console.log(res)
                for (const dataObj of res.data.data) {
                    charRat.push(parseInt(dataObj.ratings))
                    hostelName.push(parseInt(dataObj.name))
                }
                setChartData({
                    labels: [hostelName],
                    datasets: [
                        {
                            label: "Distribution of Ratings",
                            data: charRat,
                            backgroundColor: ["rgba(75, 192, 192, 0.6"],
                            borderWidth: 4
                        }
                    ]
                });
            })
            .catch(err => {
                console.log(err)
            });
        console.log(charRat, hostelName);

    };

    useEffect(() => {
        Chart();
    }, []);
    return (
        <div className="Chart">
            <h1>Distributions of Ratings</h1>
            <div>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: { text: "Ratings", display: true },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default ChartData;