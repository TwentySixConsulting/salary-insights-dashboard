import { useState } from 'react';
import FilterPanel from '../FilterPanel';
import { organisations } from '@shared/sampleData';

export default function FilterPanelExample() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedOrgs, setSelectedOrgs] = useState<string[]>([]);

  const handleReset = () => {
    console.log('Filters reset');
    setSelectedRegions([]);
    setSelectedOrgs([]);
  };

  return (
    <div className="p-4 max-w-sm">
      <FilterPanel
        organisations={organisations}
        selectedRegions={selectedRegions}
        selectedOrgs={selectedOrgs}
        onRegionChange={setSelectedRegions}
        onOrgChange={setSelectedOrgs}
        onReset={handleReset}
      />
    </div>
  );
}