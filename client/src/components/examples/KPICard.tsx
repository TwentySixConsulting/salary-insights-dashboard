import KPICard from '../KPICard';

export default function KPICardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <KPICard
        title="Pay Rise Implementation"
        value="100"
        format="percentage"
        description="All participants implemented a 2024 pay rise"
        tooltip="All 9 organizations in the survey implemented pay increases for 2024"
      />
      
      <KPICard
        title="Healthcare Benefits"
        value="67"
        format="percentage"
        description="Organizations offering healthcare benefits"
        change={{ value: 5.2, type: 'positive' }}
        tooltip="Percentage of organizations providing healthcare benefits to employees"
      />
      
      <KPICard
        title="Starting Annual Leave"
        value="25"
        description="Most common starting annual leave days"
        tooltip="The most frequently offered starting annual leave entitlement"
      />
      
      <KPICard
        title="NLW Impact"
        value="44"
        format="percentage"
        description="Organizations impacted by NLW rise to £12.21"
        change={{ value: -2.1, type: 'negative' }}
        tooltip="Percentage of organizations that will be impacted by the National Living Wage increase"
      />
    </div>
  );
}