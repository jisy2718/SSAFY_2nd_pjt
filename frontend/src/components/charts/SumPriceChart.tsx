import React, { FunctionComponent } from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};
// 라벨의 길이만큼 만들기 
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'prices',
      //라벨의 길이만큼 data 넣기,, 빈 데이터는??
      data: [3123, 12312, 54345, 21314.42, 87643, 101000, 89000],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
interface SumPriceChartProps {
  
}
 
const SumPriceChart: FunctionComponent<SumPriceChartProps> = () => {
  return <Line options={options} data={data} />;
}
 
export default SumPriceChart;