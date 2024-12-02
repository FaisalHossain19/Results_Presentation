import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface TestResultsPieChartProps {
  testResults: any[];
}

const countTestResults = (testResults: any[]) => {
  const counts = {
    passed: 0,
    failed: 0,
  };

  testResults.forEach((result) => {
    if (result.test_case_result === 'passed') {
      counts.passed++;
    } else if (result.test_case_result === 'fail') {
      counts.failed++;
    }
  });

  return counts;
};

const TestResultsPieChart: React.FC<TestResultsPieChartProps> = ({ testResults }) => {
  const counts = countTestResults(testResults);

  // Dynamically get colors from CSS variables
  const getCssVariable = (variable: string, fallback: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(variable) || fallback;

  const legendColor = getCssVariable('--chart-label-color', '#333'); // Fallback to black
  const tooltipBgColor = getCssVariable('--tooltip-bg', '#333'); // Fallback to dark gray
  const tooltipTextColor = getCssVariable('--tooltip-text', '#fff'); // Fallback to white

  const data = {
    labels: ['Pass', 'Fail'],
    datasets: [
      {
        data: [counts.passed, counts.failed],
        backgroundColor: ['#36A2EB', '#FF6384'], // Blue for "Passed" and Red for "Failed"
        hoverBackgroundColor: ['#5CC0F0', '#FF8097'], // Slightly lighter hover colors for better visual feedback
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 14, // Adjust the font size for labels
          },
        //   color: legendColor, // Adapt to light/dark mode dynamically
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: tooltipBgColor, // Dynamic tooltip background color
        titleColor: tooltipTextColor, // Dynamic title color
        bodyColor: tooltipTextColor, // Dynamic body text color
        borderColor: '#fff', // White border for better visibility
        borderWidth: 1,
        cornerRadius: 4, // Rounded corners
      },
    },
  };

  return (
    <div
      className="p-4 bg-card border rounded-md shadow-md"
      style={{ width: '350px', height: '350px', margin: 'auto' }}
    >
      <h3 className="text-center font-semibold mb-4">Test Results Summary</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default TestResultsPieChart;
