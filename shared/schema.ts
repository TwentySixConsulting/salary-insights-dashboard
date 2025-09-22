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

export type PayAward = {
  year: 2024 | 2025;
  type: "consolidated" | "unconsolidated" | "fixed_amount" | "percentage";
  value?: number; // e.g., 3.0 for 3%
  notes?: string;
};

export type BenefitSummary = {
  holiday_start_days: number;
  holiday_max_days: number;
  has_buy_sell: boolean;
  healthcare_offered: boolean;
  details?: string[];
};

export type KPI = {
  orgId?: string; // optional for per-org lines later
  year: string;
  sickness_ltr_pct?: number;
  turnover_global_pct?: number;
  turnover_voluntary_pct?: number;
  conflict_index_pct?: number;
  agency_spend_pct_payroll?: number;
};

export type WagePolicy = {
  nlw_impact: boolean;
  rlw_or_llw_adopted: boolean;
  strategies?: string[];
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

// Dashboard summary metrics
export type SummaryMetrics = {
  total_participants: number;
  pay_rise_range: string;
  consolidated_2025_pct: number;
  weekend_overtime_standard_pct: number;
  on_call_allowance_pct: number;
  common_holiday_start: number;
  healthcare_benefits_pct: number;
  turnover_decline_pct: number;
  conflict_index_range: string;
  nlw_impact_pct: number;
  living_wage_adoption_pct: number;
};

// Pay framework data
export type PayFramework = {
  type: "pay_spine" | "broad_banded" | "job_families" | "market_ranges";
  prevalence_pct: number;
  by_location: {
    london_pct: number;
    outside_london_pct: number;
  };
  by_size: {
    small_pct: number; // <250
    large_pct: number; // 250+
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