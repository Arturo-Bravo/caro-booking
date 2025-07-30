# Booking Form - Current Implementation

## Overview
This document describes the current implementation of the booking form feature for the esthetician appointment system. The form allows users to view available dates and book appointments within a 60-day window.

## Current Implementation

### 1. Date Selection
- Calendar view showing a 60-day window from the current date
- Available dates are fetched in a single API call for the entire 60-day period
- Past dates and dates beyond the 60-day window are disabled
- Loading state is shown while fetching available dates
- Uses `@internationalized/date` for robust date handling

### 2. Technical Implementation

#### Frontend
- Built with Svelte and TypeScript
- Uses a custom `DatePicker` component that extends the base calendar component
- Responsive design that works on mobile and desktop
- Loading states and error handling for API calls
- Form validation for required fields

#### Backend Integration
- Single endpoint `/available-days` that accepts:
  - `serviceId`: The ID of the service being booked
  - `daysInAdvance`: Number of days to fetch availability for (default: 60)
- Returns an array of available dates in YYYY-MM-DD format

#### Data Flow
1. On component mount, fetches available days for the next 60 days
2. Converts API response to `CalendarDate` objects for the calendar component
3. Disables dates that are not in the available days list
4. Handles errors and loading states appropriately

```typescript
// Simplified data flow
interface AvailableDaysResponse {
  availableDays: string[]; // Array of dates in YYYY-MM-DD format
}

// Booking service method
async getAvailableDays(options: {
  serviceId: number;
  daysInAdvance: number;
}): Promise<AvailableDaysResponse>;
```

## Current Limitations
1. No time slot selection yet - only date selection is implemented
2. No contact information form implemented yet
3. No booking submission flow yet
4. No email notifications or confirmations

## Next Steps
1. Implement time slot selection
2. Add contact information form
3. Implement form validation
4. Add booking submission flow
5. Add email notifications
6. Add confirmation page

## Open Questions
1. What are the working hours for the esthetician?
2. What is the standard appointment duration?
3. What is the cancellation policy?
