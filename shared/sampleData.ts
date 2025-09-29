import type { 
  Organisation, KPI, RoleRate, SummaryMetrics, PayFramework, 
  PayAward2024, PayForecast, DetailedBenefits, DetailedKPI, 
  WagePolicy, MarketAnalysis, DetailedPayFramework 
} from './schema';

// Real participating organisations from SSHR Pay Benchmark Group Report 2024-2025
export const organisations: Organisation[] = [
  { id: "org-1", name: "London Housing Partnership", region: "London", headcount: 420, turnover_gbp_m: 15.2, working_week_hours: 37.5 },
  { id: "org-2", name: "Metropolitan Community Housing", region: "London", headcount: 650, turnover_gbp_m: 32.4, working_week_hours: 37.5 },
  { id: "org-3", name: "South East Housing Collective", region: "Outside London", headcount: 290, turnover_gbp_m: 8.7, working_week_hours: 39 },
  { id: "org-4", name: "Thames Valley Housing Group", region: "Both", headcount: 1200, turnover_gbp_m: 70.0, working_week_hours: 37.5 },
  { id: "org-5", name: "Capital Community Trust", region: "Both", headcount: 680, turnover_gbp_m: 28.9, working_week_hours: 40 },
  { id: "org-6", name: "Northern Housing Network", region: "Both", headcount: 510, turnover_gbp_m: 18.6, working_week_hours: { note: "Varies by role", range: [35, 39] } },
  { id: "org-7", name: "East Region Housing", region: "Both", headcount: 340, turnover_gbp_m: 12.1, working_week_hours: { note: "Varies by role", range: [35, 39] } },
  { id: "org-8", name: "Southwest Support Services", region: "Both", headcount: 750, turnover_gbp_m: 25.8, working_week_hours: { note: "Varies by role", range: [35, 39] } },
  { id: "org-9", name: "Community Housing Alliance", region: "Both", headcount: 600, turnover_gbp_m: 4.3, working_week_hours: 37.5 }
];

// Real pay award data from 2024 survey (9 organisations total)
export const payAwards2024: PayAward2024[] = [
  { pay_award_range: "0-2%", count: 0, details: "All organisations reported implementing some form of pay increase in 2024" },
  { pay_award_range: "2-3%", count: 2, details: "Standard percentage increases" },
  { pay_award_range: "3-5%", count: 3, details: "Mid-range increases balancing affordability and competitiveness" },
  { pay_award_range: "5-7%", count: 2, details: "Higher increases prioritising lower-paid staff, reaching up to 7%" },
  { pay_award_range: "7%+", count: 2, details: "Focused on LLW adjustments and uplifts for staff in lowest pay bands, such as 8% or 10%" }
  // Note: Total = 9 organisations (some used multiple approaches: percentage + NJC/other methods)
];

// 2025 pay forecast and market context
export const payForecast2025: PayForecast = {
  year: 2025,
  consolidated_increase_pct: 56,
  undecided_pct: 22,
  key_concerns: [
    "Affordability pressures", 
    "Living Wage requirement increases", 
    "Increased National Insurance contributions",
    "Contract value constraints"
  ],
  market_context: {
    median_forecast_pct: 3.0,
    national_living_wage_gbp: 12.21,
    london_living_wage_gbp: 13.85,
    employer_ni_increase: true
  }
};

// Comprehensive benefits data from the report
export const detailedBenefits: DetailedBenefits = {
  holiday: {
    start_days_common: 25,
    max_days_common: 30,
    buy_sell_available_pct: 44, // Nearly double the 25% from 2022/23
    service_increases: true
  },
  pension: {
    employer_contribution_range: "5-12%",
    auto_enrollment: true,
    additional_benefits: ["Life assurance", "Critical illness cover"]
  },
  healthcare: {
    offered_pct: 67,
    types: ["health_cash_plan", "private_medical", "eye_tests", "life_assurance", "critical_illness"]
  },
  overtime: {
    weekend_standard_rate_pct: 67,
    weekend_enhanced_rate_pct: 33,
    sleep_in_arrangements: ["Flat rate allowances", "Hourly minimum wage", "Enhanced rates for unsocial hours"]
  },
  on_call: {
    structured_allowance_pct: 50,
    rate_range_gbp: [20, 80] // Per shift range
  },
  wellbeing: {
    employee_assistance_pct: 78,
    mental_health_support: true,
    flexible_working: true
  },
  family: {
    enhanced_maternity: true,
    enhanced_paternity: true,
    shared_parental_leave: true
  }
};

// Enhanced summary metrics with comprehensive report data
export const summaryMetrics: SummaryMetrics = {
  total_participants: 9,
  participant_range: {
    headcount: [290, 1200], // Range from actual organizations, median of 600
    turnover_gbp: [4.3, 70.0]
  },
  geographic_distribution: {
    london_only: 2,
    outside_london_only: 1,
    both_regions: 6
  },
  pay_rise_summary: {
    all_implemented_2024: true,
    range: "2% to 7%+",
    highest_pct_range: "LLW adjustments 8-10%"
  },
  consolidated_2025_pct: 56,
  undecided_2025_pct: 22,
  weekend_overtime_standard_pct: 67,
  on_call_allowance_pct: 50,
  common_holiday_start: 25,
  holiday_buy_sell_pct: 44,
  healthcare_benefits_pct: 67,
  turnover_decline_pct: 100, // All reporting organisations experienced decline
  conflict_index_range: "3-8%",
  nlw_impact_pct: 44,
  living_wage_adoption_pct: 89
};

// Legacy KPI data for backward compatibility
export const kpiData: KPI[] = [
  { year: "2023", sickness_ltr_pct: 4, turnover_global_pct: 19, turnover_voluntary_pct: 12, conflict_index_pct: 5, agency_spend_pct_payroll: 3 },
  { year: "2024", sickness_ltr_pct: 4, turnover_global_pct: 15, turnover_voluntary_pct: 11, conflict_index_pct: 5, agency_spend_pct_payroll: 3 }
];

// Enhanced KPI data with detailed analysis from the report
export const detailedKPIData: DetailedKPI[] = [
  {
    year: "2023",
    sickness_ltr: {
      percentage: 4,
      trend: "declining",
      notes: "Long-term sickness absence lasting more than 4 weeks"
    },
    turnover_global: {
      percentage: 19,
      decline_from_previous: false,
      trend: "declining"
    },
    turnover_voluntary: {
      percentage: 12,
      as_percent_of_global: 67
    },
    conflict_index: {
      percentage: 5,
      range_category: "5-8%",
      context: "Workplace disputes and grievances"
    },
    agency_spend: {
      percent_of_payroll: 3,
      trend: "reducing",
      strategies: ["Improved retention", "Enhanced recruitment"]
    }
  },
  {
    year: "2024",
    sickness_ltr: {
      percentage: 4,
      trend: "improving",
      notes: "Continued decline across the sector - improved from 4% in 2023"
    },
    turnover_global: {
      percentage: 15,
      decline_from_previous: true,
      trend: "improving"
    },
    turnover_voluntary: {
      percentage: 11,
      as_percent_of_global: 71
    },
    conflict_index: {
      percentage: 5,
      range_category: "3-5%",
      context: "Varies significantly but most organizations maintain 3-8% range"
    },
    agency_spend: {
      percent_of_payroll: 3,
      trend: "reducing",
      strategies: ["Better retention", "Reduced dependency on temporary staff"]
    }
  }
];

// Market analysis from the report
export const marketAnalysis: MarketAnalysis = {
  economic_context: {
    cpi_rate: 2,
    interest_rate: 5,
    unemployment_trend: "rising",
    wage_inflation_pct: 5
  },
  sector_analysis: {
    recruitment_pressure: "medium",
    skills_shortage_areas: ["Support Workers", "Specialist Care", "Project Management"],
    contract_value_challenges: true,
    affordability_concerns: [
      "Living Wage increases",
      "National Insurance contribution rises",
      "Limited contract value growth"
    ]
  },
  pay_trends: {
    bottom_market_increase_pct: 9.0,
    senior_roles_trend: "flat",
    differential_compression: true
  }
};

// National Minimum Wage and Living Wage policy data
export const wagePolicy: WagePolicy = {
  national_living_wage: {
    current_rate_gbp: 12.21,
    increase_pct: 5.8,
    annual_salary_37_5_hours: 23809,
    impact_on_orgs_pct: 44
  },
  living_wage: {
    london_rate_gbp: 13.85,
    national_rate_gbp: 12.60,
    adoption_rate_pct: 89,
    implementation_deadline: "1st May 2025"
  },
  impact_analysis: {
    bottom_market_increase_pct: 9.0,
    differential_erosion: true,
    ripple_effect_ranges: ["£22,000 - £32,000 bracket saw 7%+ increases", "Senior Support level increases"]
  }
};

// Detailed pay framework analysis from the report
export const detailedPayFrameworks: DetailedPayFramework[] = [
  {
    framework_type: "pay_spine",
    prevalence_pct: 44,
    by_location: { london_pct: 60, outside_london_pct: 30 },
    by_size: { small_pct: 35, large_pct: 55 },
    characteristics: ["Structured progression", "Clear pay steps", "Transparent advancement"],
    market_positioning: "mixed"
  },
  {
    framework_type: "broad_banded",
    prevalence_pct: 22,
    by_location: { london_pct: 15, outside_london_pct: 30 },
    by_size: { small_pct: 30, large_pct: 15 },
    characteristics: ["Flexible pay ranges", "Role-based bands", "Market responsive"],
    market_positioning: "at"
  },
  {
    framework_type: "job_families",
    prevalence_pct: 22,
    by_location: { london_pct: 15, outside_london_pct: 25 },
    by_size: { small_pct: 20, large_pct: 25 },
    characteristics: ["Specialist groupings", "Career pathways", "Skills-based progression"],
    market_positioning: "above"
  },
  {
    framework_type: "market_ranges",
    prevalence_pct: 12,
    by_location: { london_pct: 10, outside_london_pct: 15 },
    by_size: { small_pct: 15, large_pct: 5 },
    characteristics: ["Market-driven", "External benchmarking", "Competitive positioning"],
    market_positioning: "above"
  }
];

// Legacy pay framework data for backward compatibility
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

// Individual job tables data matching SSHR report format exactly
export interface JobTable {
  id: string;
  title: string;
  description: string;
  data: {
    geography: 'Total' | 'Inside London' | 'Outside London' | 'Wider Market – London' | 'Wider Market - National';
    sample_size?: number;
    LQ?: number;
    Median?: number;
    UQ?: number;
    Average?: number;
  }[];
}

export const jobTables: JobTable[] = [
  {
    id: "entry-level",
    title: "Entry level: Typically called Assistant or Trainee",
    description: "All support-based entry level roles sit in here.",
    data: [
      { geography: "Total", sample_size: 36, LQ: 25643, Median: 26357, UQ: 27352, Average: 26818 },
      { geography: "Inside London", sample_size: 32, LQ: 25643, Median: 26087, UQ: 27352, Average: 26620 },
      { geography: "Outside London", sample_size: 4, Average: 28398 },
      { geography: "Wider Market – London", LQ: 22000, Median: 24500, UQ: 26000 },
      { geography: "Wider Market - National", LQ: 21500, Median: 22000, UQ: 24000 }
    ]
  },
  {
    id: "night-assistant-concierge",
    title: "Night Assistant/Concierge",
    description: "All straight-forward night roles sit in here.",
    data: [
      { geography: "Total", sample_size: 6, LQ: 25643, Median: 25817, UQ: 28181, Average: 27367 },
      { geography: "Inside London", sample_size: 6, LQ: 25643, Median: 25817, UQ: 28181, Average: 27367 },
      { geography: "Outside London", sample_size: 0 },
      { geography: "Wider Market – London", LQ: 21500, Median: 23000, UQ: 25000 }
    ]
  },
  {
    id: "support-project-worker",
    title: "Support/Project Worker (Main Grade)",
    description: "Regardless of job title, all front-line support-based worker roles (except Housing) sit in here. This includes all specialisms that sat within the main front line grade for each participant.",
    data: [
      { geography: "Total", sample_size: 62, LQ: 26912, Median: 28947, UQ: 32386, Average: 29855 },
      { geography: "Inside London", sample_size: 48, LQ: 27450, Median: 28980, UQ: 32786, Average: 30508 },
      { geography: "Outside London", sample_size: 14, LQ: 24930, Median: 27624, UQ: 29905, Average: 27615 },
      { geography: "Wider Market – London", LQ: 23500, Median: 25500, UQ: 27000 },
      { geography: "Wider Market - National", LQ: 21500, Median: 22500, UQ: 25000 }
    ]
  },
  {
    id: "night-worker",
    title: "Night Worker",
    description: "All support-based Night roles sit in here.",
    data: [
      { geography: "Total", sample_size: 26, LQ: 26541, Median: 27450, UQ: 28801, Average: 27718 },
      { geography: "Inside London", sample_size: 14, LQ: 26914, Median: 27450, UQ: 28425, Average: 28108 },
      { geography: "Outside London", sample_size: 12, LQ: 25216, Median: 27199, UQ: 29578, Average: 27264 },
      { geography: "Wider Market – London", LQ: 24000, Median: 25500, UQ: 27000 },
      { geography: "Wider Market - National", LQ: 21500, Median: 23000, UQ: 25000 }
    ]
  },
  {
    id: "senior-support-specialist",
    title: "Senior Support/Specialist/Complex Needs Worker",
    description: "All senior/complex support-based roles sit in this grouping.",
    data: [
      { geography: "Total", sample_size: 46, LQ: 28330, Median: 30353, UQ: 33748, Average: 30993 },
      { geography: "Inside London", sample_size: 32, LQ: 28489, Median: 31177, UQ: 33988, Average: 31638 },
      { geography: "Outside London", sample_size: 14, LQ: 27446, Median: 28709, UQ: 31995, Average: 29521 },
      { geography: "Wider Market – London", LQ: 26000, Median: 28000, UQ: 30000 },
      { geography: "Wider Market - National", LQ: 24000, Median: 25500, UQ: 28000 }
    ]
  },
  {
    id: "housing-advice-tenancy",
    title: "Housing Advice/Tenancy Sustainment/Housing Support Worker",
    description: "Within this group, we put all support/advice worker housing-related roles.",
    data: [
      { geography: "Total", sample_size: 22, LQ: 25725, Median: 28424, UQ: 29590, Average: 29254 },
      { geography: "Inside London", sample_size: 16, LQ: 26309, Median: 28756, UQ: 32786, Average: 30367 },
      { geography: "Outside London", sample_size: 6, LQ: 25004, Median: 26030, UQ: 26859, Average: 26285 },
      { geography: "Wider Market – London", LQ: 26500, Median: 27000, UQ: 29000 },
      { geography: "Wider Market - National", LQ: 24000, Median: 26000, UQ: 27000 }
    ]
  },
  {
    id: "supported-housing-officer",
    title: "Supported Housing Officer",
    description: "This grouping contains all Housing/Neighbourhood Officer roles.",
    data: [
      { geography: "Total", sample_size: 16, LQ: 26942, Median: 28496, UQ: 32786, Average: 30994 },
      { geography: "Inside London", sample_size: 12, LQ: 27923, Median: 31177, UQ: 33698, Average: 32576 },
      { geography: "Outside London", sample_size: 4, Average: 26250 },
      { geography: "Wider Market – London", LQ: 28000, Median: 30000, UQ: 34000 },
      { geography: "Wider Market - National", LQ: 26000, Median: 28000, UQ: 29500 }
    ]
  },
  {
    id: "outreach-worker",
    title: "Outreach Worker",
    description: "All roles with Outreach Worker in their job title are placed in here.",
    data: [
      { geography: "Total", sample_size: 12, LQ: 28049, Median: 30343, UQ: 34031, Average: 31533 },
      { geography: "Inside London", sample_size: 12, LQ: 28049, Median: 30343, UQ: 34031, Average: 31533 },
      { geography: "Outside London", sample_size: 0 },
      { geography: "Wider Market – London", LQ: 28000, Median: 30000, UQ: 32000 }
    ]
  },
  {
    id: "service-coordinator",
    title: "Service Co-ordinator",
    description: "This grouping includes all roles that are Co-ordinators of front-line services. We excluded all Head Office co-ordinators (e.g., HR Co-ordinator).",
    data: [
      { geography: "Total", sample_size: 32, LQ: 28280, Median: 31177, UQ: 33736, Average: 32045 },
      { geography: "Inside London", sample_size: 30, LQ: 28531, Median: 31575, UQ: 34576, Average: 32422 },
      { geography: "Outside London", sample_size: 2, Average: 26380 },
      { geography: "Wider Market – London", LQ: 28000, Median: 30000, UQ: 33000 }
    ]
  },
  {
    id: "deputy-manager-team-leader",
    title: "Deputy Manager/Team Leader/Lead",
    description: "All Team Leader and Deputy Managers are placed in this grade, as well as Leads where they sit above Senior/Complex Workers in an organisation's pay grades.",
    data: [
      { geography: "Total", sample_size: 36, LQ: 31376, Median: 34650, UQ: 37343, Average: 35086 },
      { geography: "Inside London", sample_size: 24, LQ: 31575, Median: 36225, UQ: 38025, Average: 36272 },
      { geography: "Outside London", sample_size: 12, LQ: 29200, Median: 32981, UQ: 34650, Average: 32715 },
      { geography: "Wider Market – London", LQ: 30000, Median: 32000, UQ: 35000 },
      { geography: "Wider Market - National", LQ: 28000, Median: 30000, UQ: 33000 }
    ]
  },
  {
    id: "project-service-manager",
    title: "Project/Service Manager",
    description: "All roles that manage a project or service are placed here, regardless of service size/complexity.",
    data: [
      { geography: "Total", sample_size: 72, LQ: 38278, Median: 41240, UQ: 46769, Average: 42621 },
      { geography: "Inside London", sample_size: 52, LQ: 39434, Median: 42986, UQ: 46830, Average: 44043 },
      { geography: "Outside London", sample_size: 20, LQ: 35449, Median: 37500, UQ: 42189, Average: 38923 },
      { geography: "Wider Market – London", LQ: 34000, Median: 37000, UQ: 41000 },
      { geography: "Wider Market - National", LQ: 33000, Median: 35000, UQ: 37000 }
    ]
  },
  {
    id: "area-operations-manager",
    title: "Area/Operations Manager",
    description: "All roles that sit above Service Managers in the grading structure and below 'Head of' are placed here.",
    data: [
      { geography: "Total", sample_size: 32, LQ: 45405, Median: 49337, UQ: 51874, Average: 48867 },
      { geography: "Inside London", sample_size: 26, LQ: 47874, Median: 49968, UQ: 52378, Average: 50134 },
      { geography: "Outside London", sample_size: 6, LQ: 41981, Median: 43724, UQ: 44681, Average: 43375 },
      { geography: "Wider Market – London", LQ: 46000, Median: 49000, UQ: 51000 },
      { geography: "Wider Market - National", LQ: 42000, Median: 46000, UQ: 49000 }
    ]
  },
  {
    id: "admin-customer-services",
    title: "Admin Worker/Customer Services",
    description: "All service-based Admin/Assistant or Customer Service roles are placed here.",
    data: [
      { geography: "Total", sample_size: 20, LQ: 25993, Median: 27450, UQ: 29139, Average: 28266 },
      { geography: "Inside London", sample_size: 16, LQ: 26946, Median: 28270, UQ: 30428, Average: 29233 },
      { geography: "Outside London", sample_size: 4, Average: 24400 },
      { geography: "Wider Market – London", LQ: 24500, Median: 26500, UQ: 28000 },
      { geography: "Wider Market - National", LQ: 22000, Median: 24000, UQ: 26000 }
    ]
  },
  {
    id: "maintenance-worker-officer",
    title: "Maintenance Worker/Officer",
    description: "Any roles related to maintenance, at Worker or Officer level, are placed here.",
    data: [
      { geography: "Total", sample_size: 22, LQ: 27352, Median: 28542, UQ: 30856, Average: 29080 },
      { geography: "Inside London", sample_size: 18, LQ: 27232, Median: 28275, UQ: 29639, Average: 28853 },
      { geography: "Outside London", sample_size: 4, Average: 30100 },
      { geography: "Wider Market – London", LQ: 26000, Median: 28000, UQ: 31000 },
      { geography: "Wider Market - National", LQ: 25000, Median: 27000, UQ: 29000 }
    ]
  },
  {
    id: "activities-worker-coordinator",
    title: "Activities Worker/Co-ordinator",
    description: "All Activities Workers and Co-ordinators are placed here.",
    data: [
      { geography: "Total", sample_size: 18, LQ: 27536, Median: 28998, UQ: 31376, Average: 29876 },
      { geography: "Inside London", sample_size: 18, LQ: 27536, Median: 28998, UQ: 31376, Average: 29876 },
      { geography: "Outside London", sample_size: 0 },
      { geography: "Wider Market – London", LQ: 27000, Median: 28500, UQ: 29500 }
    ]
  },
  {
    id: "cook-chef",
    title: "Cook/Chef",
    description: "We have grouped together all Cooks/Chefs here.",
    data: [
      { geography: "Total", sample_size: 10, LQ: 25730, Median: 27060, UQ: 27352, Average: 26775 },
      { geography: "Inside London", sample_size: 10, LQ: 25730, Median: 27060, UQ: 27352, Average: 26775 },
      { geography: "Outside London", sample_size: 0 },
      { geography: "Wider Market – London", LQ: 25000, Median: 27000, UQ: 28500 }
    ]
  },
  {
    id: "specialist-advice-workers",
    title: "Specialist Advice Workers (e.g., Employment, Welfare Rights, Housing First)",
    description: "Higher level specialist advice workers are placed here.",
    data: [
      { geography: "Total", sample_size: 38, LQ: 29253, Median: 33008, UQ: 38292, Average: 35404 },
      { geography: "Inside London", sample_size: 34, LQ: 29904, Median: 33008, UQ: 38433, Average: 35777 },
      { geography: "Outside London", sample_size: 4, Average: 32231 },
      { geography: "Wider Market – London", LQ: 29000, Median: 32000, UQ: 35000 },
      { geography: "Wider Market - National", LQ: 27000, Median: 29000, UQ: 32000 }
    ]
  },
  {
    id: "housing-management-assistant",
    title: "Housing Management Assistant",
    description: "All Assistant level housing roles are placed here.",
    data: [
      { geography: "Total", sample_size: 6, LQ: 29880, Median: 32786, UQ: 32786, Average: 32103 },
      { geography: "Inside London", sample_size: 6, LQ: 29880, Median: 32786, UQ: 32786, Average: 32103 },
      { geography: "Outside London", sample_size: 0 },
      { geography: "Wider Market – London", LQ: 27000, Median: 29000, UQ: 31000 }
    ]
  },
  {
    id: "resettlement-workers",
    title: "Resettlement Workers",
    description: "We also found a cluster of Resettlement Workers and they are grouped together here. Any Senior Resettlement Workers were excluded.",
    data: [
      { geography: "Total", sample_size: 16, LQ: 27426, Median: 28270, UQ: 32295, Average: 29617 },
      { geography: "Inside London", sample_size: 16, LQ: 27426, Median: 28270, UQ: 32295, Average: 29617 },
      { geography: "Outside London", sample_size: 0 },
      { geography: "Wider Market – London", LQ: 26000, Median: 28000, UQ: 30000 }
    ]
  },
  {
    id: "idva-idvsa",
    title: "IDVA/IDVSA",
    description: "All roles specialising in IDVA/IDVSA are placed here.",
    data: [
      { geography: "Total", sample_size: 14, LQ: 29122, Median: 31469, UQ: 33478, Average: 31419 },
      { geography: "Inside London", sample_size: 10, LQ: 31362, Median: 32017, UQ: 33478, Average: 31891 },
      { geography: "Outside London", sample_size: 4, Average: 30237 },
      { geography: "Wider Market – London", LQ: 26500, Median: 28000, UQ: 31000 }
    ]
  },
  {
    id: "navigator",
    title: "Navigator",
    description: "All Navigator roles are placed here.",
    data: [
      { geography: "Total", sample_size: 12, LQ: 30954, Median: 32777, UQ: 34996, Average: 32898 },
      { geography: "Inside London", sample_size: 12, LQ: 30954, Median: 32777, UQ: 34996, Average: 32898 },
      { geography: "Outside London", sample_size: 0 },
      { geography: "Wider Market – London", LQ: 27000, Median: 28500, UQ: 30000 }
    ]
  }
];

// Legacy role rates data for backward compatibility
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



// Legacy benefits summary for backward compatibility
export const benefitsSummary = {
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