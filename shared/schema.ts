import { z } from "zod";

// Core data types for the Salary Survey Dashboard
export type Organisation = {
  id: string;
  name: string;
  region: "London" | "Outside London" | "Both";
  headcount: number;
  turnover_gbp_m: number;
  working_week_hours: number | { note: string; range?: [number, number] };
};

// Comprehensive pay award data from 2024 survey
export type PayAward2024 = {
  org_id?: string;
  pay_award_range: "0-2%" | "2.1-3%" | "3.1-5%" | "5.1-7%" | "7.1%+" | "Fixed Amount (NJC)" | "Other";
  count: number;
  details?: string;
  prioritized_groups?: string[];
};

// Future pay awards and market analysis
export type PayForecast = {
  year: 2025;
  consolidated_increase_pct: number; // 55.6% planning consolidated
  undecided_pct: number; // 22.2% undecided
  key_concerns: string[];
  market_context: {
    median_forecast_pct: number;
    national_living_wage_gbp: number;
    london_living_wage_gbp: number;
    employer_ni_increase: boolean;
  };
};

// Comprehensive benefits structure
export type DetailedBenefits = {
  holiday: {
    start_days_common: number;
    max_days_common: number;
    buy_sell_available_pct: number;
    service_increases: boolean;
  };
  pension: {
    employer_contribution_range: string;
    auto_enrollment: boolean;
    additional_benefits?: string[];
  };
  healthcare: {
    offered_pct: number;
    types: ("health_cash_plan" | "private_medical" | "eye_tests" | "life_assurance" | "critical_illness")[];
  };
  overtime: {
    weekend_standard_rate_pct: number;
    weekend_enhanced_rate_pct: number;
    sleep_in_arrangements: string[];
  };
  on_call: {
    structured_allowance_pct: number;
    rate_range_gbp: [number, number]; // e.g., [20, 80] per shift
  };
  wellbeing: {
    employee_assistance_pct: number;
    mental_health_support: boolean;
    flexible_working: boolean;
  };
  family: {
    enhanced_maternity: boolean;
    enhanced_paternity: boolean;
    shared_parental_leave: boolean;
  };
};

// Extended KPI data with detailed analysis
export type DetailedKPI = {
  org_id?: string;
  year: string;
  sickness_ltr: {
    percentage: number;
    trend: "improving" | "declining" | "stable";
    notes?: string;
  };
  turnover_global: {
    percentage: number;
    decline_from_previous: boolean;
    trend: "improving" | "declining" | "stable";
  };
  turnover_voluntary: {
    percentage: number;
    as_percent_of_global: number;
  };
  conflict_index: {
    percentage: number;
    range_category: "0-3%" | "3-5%" | "5-8%" | "8%+";
    context?: string;
  };
  agency_spend: {
    percent_of_payroll: number;
    trend: "reducing" | "increasing" | "stable";
    strategies?: string[];
  };
};

// National Minimum Wage and Living Wage comprehensive data
export type WagePolicy = {
  national_living_wage: {
    current_rate_gbp: number;
    increase_pct: number;
    annual_salary_37_5_hours: number;
    impact_on_orgs_pct: number;
  };
  living_wage: {
    london_rate_gbp: number;
    national_rate_gbp: number;
    adoption_rate_pct: number;
    implementation_deadline?: string;
  };
  impact_analysis: {
    bottom_market_increase_pct: number;
    differential_erosion: boolean;
    ripple_effect_ranges: string[];
  };
};

// Comprehensive role salary data with extended geographic breakdown
export type DetailedRoleRate = {
  role: string;
  category: "entry_level" | "support_worker" | "specialist" | "management" | "senior_management" | "executive";
  geography: "Total" | "Inside London" | "Outside London" | "Wider Market – London" | "Wider Market – National" | "Both";
  sample_size?: number;
  quartiles: {
    LQ?: number;
    Median?: number;
    UQ?: number;
    Average?: number;
  };
  market_context: {
    market_movement_pct?: number;
    recruitment_difficulty?: "low" | "medium" | "high";
    notes?: string;
  };
  comparable_roles?: string[];
};

// Market analysis and economic context
export type MarketAnalysis = {
  economic_context: {
    cpi_rate: number;
    interest_rate: number;
    unemployment_trend: "rising" | "falling" | "stable";
    wage_inflation_pct: number;
  };
  sector_analysis: {
    recruitment_pressure: "high" | "medium" | "low";
    skills_shortage_areas: string[];
    contract_value_challenges: boolean;
    affordability_concerns: string[];
  };
  pay_trends: {
    bottom_market_increase_pct: number;
    senior_roles_trend: "flat" | "declining" | "modest_growth";
    differential_compression: boolean;
  };
};

// Legacy types - keeping for backward compatibility during transition
export type KPI = {
  orgId?: string;
  year: string;
  sickness_ltr_pct?: number;
  turnover_global_pct?: number;
  turnover_voluntary_pct?: number;
  conflict_index_pct?: number;
  agency_spend_pct_payroll?: number;
};

export type RoleRate = {
  role: string;
  geography: "Total" | "Inside London" | "Outside London" | "Wider Market – London" | "Wider Market – National";
  sample_size?: number;
  LQ?: number;
  Median?: number;
  UQ?: number;
  Average?: number;
};

// Dashboard summary metrics - enhanced with comprehensive report data
export type SummaryMetrics = {
  total_participants: number;
  participant_range: {
    headcount: [number, number];
    turnover_gbp: [number, number];
  };
  geographic_distribution: {
    london_only: number;
    outside_london_only: number;
    both_regions: number;
  };
  pay_rise_summary: {
    all_implemented_2024: boolean;
    range: string;
    highest_pct_range: string;
  };
  consolidated_2025_pct: number;
  undecided_2025_pct: number;
  weekend_overtime_standard_pct: number;
  on_call_allowance_pct: number;
  common_holiday_start: number;
  holiday_buy_sell_pct: number;
  healthcare_benefits_pct: number;
  turnover_decline_pct: number;
  conflict_index_range: string;
  nlw_impact_pct: number;
  living_wage_adoption_pct: number;
};

// Comprehensive pay framework analysis
export type DetailedPayFramework = {
  framework_type: "pay_spine" | "broad_banded" | "job_families" | "market_ranges";
  prevalence_pct: number;
  by_location: {
    london_pct: number;
    outside_london_pct: number;
  };
  by_size: {
    small_pct: number; // <250 employees
    large_pct: number; // 250+ employees
  };
  characteristics: string[];
  market_positioning: "below" | "at" | "above" | "mixed";
};

// Legacy PayFramework for backward compatibility
export type PayFramework = {
  type: "pay_spine" | "broad_banded" | "job_families" | "market_ranges";
  prevalence_pct: number;
  by_location: {
    london_pct: number;
    outside_london_pct: number;
  };
  by_size: {
    small_pct: number;
    large_pct: number;
  };
};

// Filter state for the application
export const filterSchema = z.object({
  regions: z.array(z.enum(["London", "Outside London", "Both"])).default([]),
  organisations: z.array(z.string()).default([]),
  roleSearch: z.string().default(""),
  salaryRange: z.object({
    min: z.number().optional(),
    max: z.number().optional()
  }).default({})
});

export type FilterState = z.infer<typeof filterSchema>;