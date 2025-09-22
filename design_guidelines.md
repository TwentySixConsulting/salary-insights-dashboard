# Salary Survey Insights Dashboard Design Guidelines

## Design Approach: Material Design System
This data-heavy enterprise application follows Material Design principles, emphasizing clear information hierarchy, functional layouts, and professional aesthetics suitable for housing association stakeholders.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Dark Blue: 203 85% 19% (main brand, navigation, headers)
- Light Blue: 203 85% 95% (backgrounds, subtle accents)

**Accent Colors:**
- Gold: 43 85% 53% (highlights, active states, key metrics)
- Muted Gold: 43 20% 85% (subtle backgrounds, hover states)

**Neutral Colors:**
- Dark Gray: 210 10% 23% (text, borders)
- Light Gray: 210 15% 98% (card backgrounds, dividers)
- White: 0 0% 100% (primary backgrounds)

### Typography
- **Primary Font:** Inter (Google Fonts) - clean, readable for data tables
- **Headings:** 600-700 weight, dark gray
- **Body Text:** 400-500 weight, comfortable line height 1.6
- **Data Tables:** 400 weight, consistent sizing for scanability

### Layout System
**Spacing Units:** Tailwind classes using 2, 4, 6, 8, 12, 16 units
- Consistent 4-unit gutters between components
- 8-unit padding for cards and containers
- 16-unit margins for major section breaks

### Component Library

**Navigation:**
- Left sidebar navigation with dark blue background
- Organization selector in top header bar
- Breadcrumb navigation for deep sections

**Data Display:**
- Clean table design with alternating row colors
- Sticky headers with subtle shadows
- Interactive sorting indicators
- Search and filter controls above tables

**Cards & Containers:**
- Subtle drop shadows (shadow-sm)
- Rounded corners (rounded-lg)
- White backgrounds with light gray borders

**Interactive Elements:**
- Primary buttons: Dark blue with white text
- Secondary buttons: Outlined with dark blue border
- Gold accent for active/selected states
- Subtle hover transitions (150ms ease)

**Charts & Visualizations:**
- Consistent color palette across all charts
- Clear axis labels and legends
- Responsive sizing for different screen sizes
- Export functionality with subtle icon buttons

### Key Design Principles
1. **Information Hierarchy:** Clear visual separation between KPIs, charts, and data tables
2. **Scanability:** Generous whitespace and consistent alignment for easy data consumption  
3. **Professional Aesthetic:** Conservative color usage with strategic gold accents
4. **Responsive Design:** Mobile-first approach with collapsible navigation
5. **Accessibility:** High contrast ratios and clear focus states throughout

### Animations
Minimal, functional animations only:
- 150ms transitions for hover states
- Smooth table sorting animations
- Subtle loading states for data fetching

This design creates a trustworthy, professional environment optimized for data analysis and decision-making by housing association stakeholders.