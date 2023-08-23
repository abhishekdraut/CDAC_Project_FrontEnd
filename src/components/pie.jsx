import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'paid' },
            { id: 1, value: 15, label: 'unpaid' },
            { id: 2, value: 20, label: 'partilly paid' },
            { id: 2, value: 20, label: 'overdue' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}