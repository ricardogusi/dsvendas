import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/Sale';
import { BASE_URL } from 'utils/Requests';

type ChartData = {
    series: number[];
    labels: string[];
}

export default function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(r => {
                const data = r.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName)
                const mySeries = data.map(x => x.sum)

                setChartData({ labels: myLabels, series: mySeries })
            })       
    },[])

    
    const options = {
        legend: {
            show: true
        }
    }


    return (
        <>
            <Chart
                options={{ ...options, labels: chartData.labels }}
                series={chartData.series}
                type="donut"
                height="240"
            />
        </>
    )
}
