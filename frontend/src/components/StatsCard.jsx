// https://mui.com/x/react-charts/pie/
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

const StatsCard = () => {
    return (
        <div className='flex flex-col scale-75 border h-full justify-between items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='font-black text-2xl'>
                    Activity
                </div>
                <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 180,
                        cx: 150,
                        cy: 150,
                    },
                ]}
                width={400}
                height={200}
            />
            </div>

            
            <div className='flex flex-col justify-center items-center'>
                <div className='font-black text-2xl'>
                    Productivity
                </div>
                <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={500}
                height={300}
            />
            </div>
        </div>
    );
}



export default StatsCard





