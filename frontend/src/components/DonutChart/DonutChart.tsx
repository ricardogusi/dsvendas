import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/Sale';
import { BASE_URL } from 'utils/Requests';

type ChartData = { 
    series: number[]; 
    labels:string[];
}

export default function DonutChart() {

    let chartData: ChartData = {labels: [], series:[]};

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(r=> {
            const data = r.data as SaleSum[];
            const myLabels = data.map( x => x.sellerName)
            const mySeries = data.map( x => x.sum)

            chartData = { labels: myLabels, series: mySeries}
        })

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }
    
    const options = {
        legend: {
            show: true
        }
    }


    return (
        <>
            <Chart
                options={{...options, labels: chartData.labels}}
                series={chartData.series}
                type="donut"
                height="240"
            />
        </>
    )
}
