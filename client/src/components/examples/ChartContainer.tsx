import ChartContainer from '../ChartContainer';

export default function ChartContainerExample() {
  // Sample KPI data
  const kpiData = [
    { name: 'Sickness LTR', '2023': 4.2, '2024': 3.8 },
    { name: 'Global Turnover', '2023': 18.5, '2024': 15.2 },
    { name: 'Voluntary Turnover', '2023': 12.3, '2024': 10.8 },
    { name: 'Conflict Index', '2023': 5.1, '2024': 4.7 },
  ];

  // Pay framework data
  const frameworkData = [
    { name: 'Pay Spine', value: 44 },
    { name: 'Broad Banded', value: 22 },
    { name: 'Job Families', value: 22 },
    { name: 'Market Ranges', value: 12 },
  ];

  // Forecast data
  const forecastData = [
    { name: 'Conservative', value: 2.0 },
    { name: 'Moderate', value: 3.0 },
    { name: 'Optimistic', value: 4.0 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
      <ChartContainer
        title="KPI Trends (2023 vs 2024)"
        data={kpiData}
        type="bar"
        multiSeries={true}
        seriesKeys={['2023', '2024']}
        description="Year-over-year comparison of key performance indicators"
        allowTypeToggle={true}
        height={300}
      />
      
      <ChartContainer
        title="Pay Framework Distribution"
        data={frameworkData}
        type="pie"
        description="Prevalence of different pay framework types"
        allowTypeToggle={true}
        height={300}
      />
      
      <ChartContainer
        title="2025 Pay Rise Forecast"
        data={forecastData}
        type="line"
        description="Expected pay increase ranges for 2025"
        allowTypeToggle={true}
        height={250}
      />
    </div>
  );
}