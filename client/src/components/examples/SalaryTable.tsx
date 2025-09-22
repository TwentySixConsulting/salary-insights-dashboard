import SalaryTable from '../SalaryTable';
import { roleRates } from '@shared/sampleData';

export default function SalaryTableExample() {
  // Use a subset of the data for the example
  const sampleData = roleRates.slice(0, 20);
  
  return (
    <div className="p-4">
      <SalaryTable 
        data={sampleData} 
        title="Salary Rates by Role (Sample Data)"
      />
    </div>
  );
}