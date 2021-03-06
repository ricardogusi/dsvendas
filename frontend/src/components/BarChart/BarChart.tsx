import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/Sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/Requests';

type SeriesData = { 
    name: string, 
    data: number[]
}

type ChartData = { 
    labels: {
        categories: string[]
    }
    series: SeriesData[]
}

export default function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        }, 
        series: [
            {
                name: "", 
                data:[]
            }
        ]
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then(r => {
                const data = r.data as SaleSuccess[];
                const myLabels = data.map(x => x.sellerName)
                const mySeries = data.map(x => round(100 * x.deals / x.visited , 1))

                setChartData({
                    labels: {
                        categories: myLabels
                    }, 
                    series: [
                        {
                            name: "% Sucesso", 
                            data: mySeries
                        }
                    ]
                })
            })       
    },[])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
        

    return (
        <>
            <Chart 
                options={{...options, xaxis: chartData.labels}}
                series={chartData.series}
                type="bar"
                height="240"
            />
        </>
    )
}
