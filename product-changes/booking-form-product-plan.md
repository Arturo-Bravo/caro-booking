# Booking Form - Product Plan

## Overview

This document outlines the requirements and implementation plan for the booking form feature for the esthetician appointment system. The form allows users to book appointments with specific time slots while enforcing business rules.

## Business Requirements

### 1. Date Selection

- Calendar view showing a 60-day window from the current date
- Users must book at least 7 days in advance (no same-week bookings)
- Available dates are fetched in a single API call for the entire 60-day period
- Past dates, dates within 7 days, and dates beyond the 60-day window are disabled
- Loading state is shown while fetching available dates
- Uses `@internationalized/date` for robust date handling

### 2. Time Slot Selection

- Two available time slots per day:
  1. **Morning Session**: 9:00 AM - 12:00 PM (3-hour block)
  2. **Afternoon Session**: 1:45 PM - 4:45 PM (3-hour block)
- Users must select one of these two time slots when booking
- Time slots are displayed as radio button options

## Technical Implementation

### Frontend Updates

1. **Date Picker**

   - Update to disable dates within the next 7 days
   - Show clear messaging about the 7-day advance requirement

2. **Time Slot Selector**

   - New component to display the two available time slots
   - Radio button interface for slot selection
   - Clear visual indication of selected slot

3. **Form Validation**
   - Ensure date is at least 7 days in the future
   - Require time slot selection
   - Client-side validation before submission

### Backend Integration

- Update `/available-days` endpoint to respect the 7-day advance rule
- Add time slot validation to ensure only the two allowed slots are bookable
- Return appropriate error messages for invalid selections

### Data Flow

1. On component mount, fetch available days for the next 60 days
2. Filter out dates within the next 7 days
3. Display available dates with time slot options
4. On form submission, validate selections and submit booking

## Implementation Plan

### Phase 1: Update Date Selection

- [ ] Update DatePicker to enforce 7-day advance rule
- [ ] Add validation for minimum booking date
- [ ] Update UI to show disabled dates clearly

### Phase 2: Implement Time Slot Selection

- [ ] Create TimeSlotSelector component
- [ ] Implement two-slot selection UI
- [ ] Add visual feedback for selected time slot

### Phase 3: Form Integration

- [ ] Update form validation rules
- [ ] Add error handling for time slot selection
- [ ] Update form submission to include time slot data

## Open Questions

1. Are there any blackout dates or holidays to consider?
2. Should there be a maximum number of bookings per time slot?
3. What is the cancellation policy for appointments?

## Future Enhancements

1. Add calendar integration (Google Calendar, iCal)
2. Implement email/SMS reminders
3. Add waitlist functionality for fully booked slots
