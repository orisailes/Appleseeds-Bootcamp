import React from 'react'
import { Bar } from 'react-chartjs-2'

function myBar({product,color}){

console.log(product)
    return(
        <>
            <Bar
                data={{
                    labels: ['Alpha', 'Sharpe ratio', 'Standard deviation'],
                    datasets: [{
                        label: 'Risk & Performance',
                        data: [product[0].alpha, product[0].sharpeRatio, product[0].standardDeviation,],
                        backgroundColor: [
                          color[0],
                          color[0],
                          color[0],
                        ],
                        borderWidth: 1
                    }]
                }}
                
                options={{
                    maintainAspectRatio:false,
                    responsive:false,
                    legend:{
                        labels:{
                            boxWidth:0
                        }
                    }
                }}
                height={150}
                width={400}

            />
        </>
    )
}

export default myBar;