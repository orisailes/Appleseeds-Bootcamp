import React from 'react'
import { Line } from 'react-chartjs-2'

function myLine({ product, color }) {


    console.log(product)
    return (
        <>
            <Line
                data={{
                    labels: ['Stocks', 'Total assets', 'test', 'lorem'],
                    datasets: [
                        {
                            label: 'Past 12 month compare',
                            data: [1, 2, -2, 1, 4, 2, 1, 6],
                            lineTension: 0.1,
                            borderColor: [
                                "rgb(75, 192, 192)",
                            ],
                            fill: false,
                        },
                        {
                            label: 'Past 12 month compare',
                            data: [0, 4, 2, -1, -4, 12, 1, 0],
                            lineTension: 0.1,
                            borderColor: [
                                "rgb(75, 192, 192)",
                            ],
                            fill: false,
                        },
                    ]
                }}

                options={{
                    maintainAspectRatio: false,
                    responsive: false,
                }}
                height={350}
                width={580}

            />
        </>
    )
}

export default myLine;