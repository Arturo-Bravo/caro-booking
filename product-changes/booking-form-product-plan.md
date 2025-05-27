# Booking Form - Product Plan

## Overview
This document outlines the requirements and specifications for the booking form feature of the esthetician appointment system. The form will allow users to book appointments by selecting available time slots and providing their contact information.

## Core Features

### 1. Date and Time Selection
- Calendar view for selecting appointment date
- Available time slots based on:
  - Esthetician's working hours
  - Existing appointments (prevent double-booking)
  - Blackout dates (predefined dates when esthetician is unavailable)
  - Minimum notice period (if any)
  - Maximum booking window (how far in advance can be booked)
- Standard appointment duration (to be determined)
- Gray out unavailable/past dates and times, including blackout dates
- Show loading state while fetching availability
- Real-time validation to prevent race conditions when multiple users are booking

### 2. Contact Information Form
- First Name (required)
- Last Name (required)
- Email (required, with validation)
- Phone Number (required, with validation)
- Notes/Requests (optional, text area)

### 3. Form Validation
- Real-time validation for all fields
- Clear error messages
- Prevent form submission if validation fails

### 4. Confirmation
- Summary of booking details before submission
- Success message with booking reference
- Email confirmation (to be implemented later)

## Technical Requirements

### Frontend
- Svelte components for form elements
- Responsive design
- Loading states and error handling
- Form state management
- Real-time validation of time slot availability
- Optimistic UI updates when selecting time slots

### Backend
- Endpoint to fetch available time slots based on:
  - Selected date
  - Standard appointment duration
  - Existing appointments
- Transaction-based booking system to prevent race conditions
- Validation to ensure no double-booking occurs

### Data Structure
```typescript
interface Booking {
  date: string; // ISO date string
  time: string; // ISO time string
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes?: string;
  };
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string; // ISO date string
}
```

## User Flow
1. User lands on booking page
2. Chooses available date and time
3. Fills in contact information
4. Reviews booking details
5. Submits the form
6. Sees immediate confirmation that their request was received
7. Receives email confirmation that their request is being processed
8. Receives second email when esthetician confirms the appointment
   - This email includes all appointment details and any next steps

## Success Metrics
- User satisfaction (to be measured via survey)

## Open Questions
1. What are the working hours for the esthetician?
2. How far in advance can appointments be made?
3. What is the cancellation policy?
