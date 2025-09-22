# Salary Survey Insights Dashboard

## Overview

This is a professional web application designed for HR/Reward leaders in housing associations to compare pay and reward data across organizations. The dashboard provides comprehensive salary benchmarking tools with an intuitive interface for analyzing compensation trends, KPIs, benefits, and salary rates across different roles and geographies.

The application follows Material Design principles with a data-heavy enterprise focus, featuring clean information hierarchy, functional layouts, and professional aesthetics suitable for housing association staff. It includes interactive charts, filterable data tables, and comprehensive reporting capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing with persistent URL query parameters
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system following Material Design principles
- **Data Tables**: TanStack Table v8 for advanced table features including sorting, filtering, and virtualization
- **Charts**: Recharts for interactive data visualizations
- **State Management**: TanStack Query for server state management and caching

### Design System
- **Color Palette**: Dark blue primary (#0B2C54), gold accents (#D4AF37), with neutral grays
- **Typography**: Inter font family for clean, readable text in data-heavy contexts
- **Components**: Comprehensive UI library with cards, tables, charts, filters, and navigation
- **Responsive Layout**: Mobile-first design with sidebar navigation and adaptive content areas
- **Accessibility**: WCAG AA compliance with proper ARIA labels and keyboard navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL session store
- **API Structure**: RESTful API design with /api prefix for all endpoints

### Data Management
- **ORM**: Drizzle ORM with PostgreSQL dialect for database operations
- **Schema**: Shared TypeScript types between client and server using Zod validation
- **Sample Data**: Comprehensive mock data for organisations, KPIs, salary rates, and benefits
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

### Key Features
- **Interactive Dashboard**: Overview page with KPI cards and summary metrics
- **Salary Benchmarking**: Comprehensive salary tables with quartile analysis (LQ, Median, UQ)
- **Data Filtering**: Advanced filtering by region, organization size, and custom criteria
- **Export Capabilities**: CSV export functionality for data tables
- **Chart Visualizations**: Multiple chart types (bar, line, pie) with interactive controls
- **Responsive Design**: Mobile-optimized interface with collapsible sidebar navigation

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity optimized for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations with PostgreSQL support
- **express**: Web application framework for Node.js backend
- **react**: Frontend UI library with TypeScript support
- **vite**: Modern build tool and development server

### UI and Component Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives for complex components
- **@tanstack/react-table**: Advanced table functionality with sorting, filtering, and virtualization
- **@tanstack/react-query**: Server state management and data fetching
- **tailwindcss**: Utility-first CSS framework for styling
- **recharts**: Composable charting library built on React and D3

### Development and Build Tools
- **typescript**: Static type checking for JavaScript
- **drizzle-kit**: Database migration and schema management tools
- **esbuild**: Fast JavaScript bundler for production builds
- **postcss**: CSS post-processing for Tailwind CSS
- **autoprefixer**: CSS vendor prefix automation

### Utility Libraries
- **clsx**: Utility for constructing className strings conditionally
- **date-fns**: Modern JavaScript date utility library
- **wouter**: Minimalist routing library for React
- **lucide-react**: Beautiful and consistent icon library
- **zod**: TypeScript-first schema validation library

### Session and Authentication
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **express-session**: Session middleware for Express applications