import type { Organisation, PayAward, BenefitSummary, KPI, WagePolicy, RoleRate, SummaryMetrics, PayFramework } from './schema';

// Sample organisations (9 total as mentioned in the report)
export const organisations: Organisation[] = [
  { id: "org-1", name: "Central London Housing", region: "London", headcount: 420, turnover_gbp_m: 15.2, working_week_hours: 37.5 },
  { id: "org-2", name: "Metropolitan Housing Association", region: "London", headcount: 850, turnover_gbp_m: 32.4, working_week_hours: 37.5 },
  { id: "org-3", name: "South East Housing Group", region: "Outside London", headcount: 290, turnover_gbp_m: 8.7, working_week_hours: 39 },
  { id: "org-4", name: "Thames Valley Homes", region: "Both", headcount: 1200, turnover_gbp_m: 70.0, working_week_hours: 37.5 },
  { id: "org-5", name: "Capital Community Housing", region: "Both", headcount: 680, turnover_gbp_m: 28.9, working_week_hours: 40 },
  { id: "org-6", name: "Northern Housing Collective", region: "Both", headcount: 510, turnover_gbp_m: 18.6, working_week_hours: { note: "Varies", range: [35, 39] } },
  { id: "org-7", name: "East Midlands Housing", region: "Both", headcount: 340, turnover_gbp_m: 12.1, working_week_hours: { note: "Varies", range: [35, 39] } },
  { id: "org-8", name: "Southwest Housing Trust", region: "Both", headcount: 750, turnover_gbp_m: 25.8, working_week_hours: { note: "Varies", range: [35, 39] } },
  { id: "org-9", name: "Community Housing Network", region: "Both", headcount: 600, turnover_gbp_m: 4.3, working_week_hours: 37.5 }
];

// Summary metrics from the report
export const summaryMetrics: SummaryMetrics = {
  total_participants: 9,
  pay_rise_range: "2.1% to 7.1%+",
  consolidated_2025_pct: 55.6,
  weekend_overtime_standard_pct: 67,
  on_call_allowance_pct: 50,
  common_holiday_start: 25,
  healthcare_benefits_pct: 67,
  turnover_decline_pct: 100,
  conflict_index_range: "3-8%",
  nlw_impact_pct: 44,
  living_wage_adoption_pct: 89
};

// KPI data
export const kpiData: KPI[] = [
  { year: "2023", sickness_ltr_pct: 4.2, turnover_global_pct: 18.5, turnover_voluntary_pct: 12.3, conflict_index_pct: 5.1, agency_spend_pct_payroll: 3.2 },
  { year: "2024", sickness_ltr_pct: 3.8, turnover_global_pct: 15.2, turnover_voluntary_pct: 10.8, conflict_index_pct: 4.7, agency_spend_pct_payroll: 2.8 }
];

// Pay framework data
export const payFrameworks: PayFramework[] = [
  {
    type: "pay_spine",
    prevalence_pct: 44,
    by_location: { london_pct: 60, outside_london_pct: 30 },
    by_size: { small_pct: 35, large_pct: 55 }
  },
  {
    type: "broad_banded",
    prevalence_pct: 22,
    by_location: { london_pct: 15, outside_london_pct: 30 },
    by_size: { small_pct: 30, large_pct: 15 }
  },
  {
    type: "job_families",
    prevalence_pct: 22,
    by_location: { london_pct: 15, outside_london_pct: 25 },
    by_size: { small_pct: 20, large_pct: 25 }
  },
  {
    type: "market_ranges",
    prevalence_pct: 12,
    by_location: { london_pct: 10, outside_london_pct: 15 },
    by_size: { small_pct: 15, large_pct: 5 }
  }
];

// Role rates data (comprehensive list from the report)
export const roleRates: RoleRate[] = [
  // Entry Level
  { role: "Entry Level", geography: "Total", sample_size: 36, LQ: 25643, Median: 26357, UQ: 27352, Average: 26818 },
  { role: "Entry Level", geography: "Inside London", sample_size: 32, LQ: 25643, Median: 26087, UQ: 27352, Average: 26620 },
  { role: "Entry Level", geography: "Outside London", sample_size: 4, Average: 28398 },
  { role: "Entry Level", geography: "Wider Market – London", LQ: 22000, Median: 24500, UQ: 26000 },
  { role: "Entry Level", geography: "Wider Market – National", LQ: 21500, Median: 22000, UQ: 24000 },
  
  // Support/Project Worker
  { role: "Support/Project Worker (Main Grade)", geography: "Total", sample_size: 62, LQ: 26912, Median: 28947, UQ: 32386, Average: 29855 },
  { role: "Support/Project Worker (Main Grade)", geography: "Inside London", sample_size: 48, LQ: 27450, Median: 28980, UQ: 32786, Average: 30508 },
  { role: "Support/Project Worker (Main Grade)", geography: "Outside London", sample_size: 14, LQ: 24930, Median: 27624, UQ: 29905, Average: 27615 },
  { role: "Support/Project Worker (Main Grade)", geography: "Wider Market – London", LQ: 23500, Median: 25500, UQ: 27000 },
  { role: "Support/Project Worker (Main Grade)", geography: "Wider Market – National", LQ: 21500, Median: 22500, UQ: 25000 },
  
  // Senior Support/Specialist
  { role: "Senior Support/Specialist/Complex Needs", geography: "Total", sample_size: 46, LQ: 28330, Median: 30353, UQ: 33748, Average: 30993 },
  { role: "Senior Support/Specialist/Complex Needs", geography: "Inside London", LQ: 28489, Median: 31177, UQ: 33988, Average: 31638 },
  { role: "Senior Support/Specialist/Complex Needs", geography: "Outside London", LQ: 27446, Median: 28709, UQ: 31995, Average: 29521 },
  
  // Deputy Manager/Team Leader
  { role: "Deputy Manager/Team Leader/Lead", geography: "Total", sample_size: 36, LQ: 31376, Median: 34650, UQ: 37343, Average: 35086 },
  { role: "Deputy Manager/Team Leader/Lead", geography: "Inside London", LQ: 31575, Median: 36225, UQ: 38025, Average: 36272 },
  { role: "Deputy Manager/Team Leader/Lead", geography: "Outside London", LQ: 29200, Median: 32981, UQ: 34650, Average: 32715 },
  
  // Project/Service Manager
  { role: "Project/Service Manager", geography: "Total", sample_size: 72, LQ: 38278, Median: 41240, UQ: 46769, Average: 42621 },
  { role: "Project/Service Manager", geography: "Inside London", LQ: 39434, Median: 42986, UQ: 46830, Average: 44043 },
  { role: "Project/Service Manager", geography: "Outside London", LQ: 35449, Median: 37500, UQ: 42189, Average: 38923 },
  
  // Area/Operations Manager
  { role: "Area/Operations Manager", geography: "Total", sample_size: 32, LQ: 45405, Median: 49337, UQ: 51874, Average: 48867 },
  { role: "Area/Operations Manager", geography: "Inside London", LQ: 47874, Median: 49968, UQ: 52378, Average: 50134 },
  { role: "Area/Operations Manager", geography: "Outside London", LQ: 41981, Median: 43724, UQ: 44681, Average: 43375 },
  
  // Additional roles
  { role: "Admin/Customer Services", geography: "Total", sample_size: 20, LQ: 25993, Median: 27450, UQ: 29139, Average: 28266 },
  { role: "Admin/Customer Services", geography: "Inside London", Average: 29233 },
  { role: "Admin/Customer Services", geography: "Wider Market – London", LQ: 24500, Median: 26500, UQ: 28000 },
  
  { role: "Maintenance Worker/Officer", geography: "Total", sample_size: 22, LQ: 27352, Median: 28542, UQ: 30856, Average: 29080 },
  
  { role: "Housing Advice/Tenancy Sustainment/Housing Support Worker", geography: "Total", sample_size: 22, LQ: 25725, Median: 28424, UQ: 29590, Average: 29254 },
  { role: "Housing Advice/Tenancy Sustainment/Housing Support Worker", geography: "Inside London", Average: 30367 },
  { role: "Housing Advice/Tenancy Sustainment/Housing Support Worker", geography: "Outside London", Average: 26285 },
  
  { role: "Outreach Worker", geography: "Total", sample_size: 12, LQ: 28049, Median: 30343, UQ: 34031, Average: 31533 },
  
  { role: "Service Co-ordinator", geography: "Total", sample_size: 32, LQ: 28280, Median: 31177, UQ: 33736, Average: 32045 },
  
  { role: "Night Worker", geography: "Total", sample_size: 26, LQ: 26541, Median: 27450, UQ: 28801, Average: 27718 },
  
  { role: "Night Assistant/Concierge", geography: "Total", sample_size: 6, LQ: 25643, Median: 25817, UQ: 28181, Average: 27367 },
  
  { role: "Activities Worker/Coordinator", geography: "Total", sample_size: 18, LQ: 27536, Median: 28998, UQ: 31376, Average: 29876 },
  
  { role: "Cook/Chef", geography: "Total", sample_size: 10, LQ: 25730, Median: 27060, UQ: 27352, Average: 26775 },
  
  { role: "Specialist Advice Workers", geography: "Total", sample_size: 38, LQ: 29253, Median: 33008, UQ: 38292, Average: 35404 },
  
  { role: "Housing Management Assistant", geography: "Total", sample_size: 6, LQ: 29880, Median: 32786, UQ: 32786, Average: 32103 },
  
  { role: "Resettlement Worker", geography: "Total", sample_size: 16, LQ: 27426, Median: 28270, UQ: 32295, Average: 29617 },
  
  { role: "IDVA/IDVSA", geography: "Total", sample_size: 14, LQ: 29122, Median: 31469, UQ: 33478, Average: 31419 },
  { role: "IDVA/IDVSA", geography: "Inside London", Average: 31891 },
  
  { role: "Navigator", geography: "Total", sample_size: 12, LQ: 30954, Median: 32777, UQ: 34996, Average: 32898 }
];

// Benefits summary
export const benefitsSummary: BenefitSummary = {
  holiday_start_days: 25,
  holiday_max_days: 30,
  has_buy_sell: true,
  healthcare_offered: true,
  details: [
    "44% offer buy/sell leave arrangements",
    "67% provide healthcare benefits",
    "Health cash plans and PMI available",
    "Eye tests and life assurance commonly offered",
    "Enhanced maternity/paternity leave at some organizations"
  ]
};

// Wage policy data
export const wagePolicy: WagePolicy = {
  nlw_impact: true,
  rlw_or_llw_adopted: true,
  strategies: [
    "Adjusting grades above NLW to maintain differentials",
    "Implementing Real Living Wage rates",
    "London Living Wage adoption for London-based roles",
    "Grade structure reviews to address compression"
  ]
};