# Admin Panel - Product Plan

## Overview
This document outlines the requirements and specifications for the admin panel of the esthetician booking system. The admin panel will allow the esthetician to manage appointments, set availability, and handle client communications.

## Core Features

### 1. Authentication
- Secure login with email and password
- Password reset functionality
- Session management (auto-logout after period of inactivity)

### 2. Dashboard
- Today's appointments at a glance
- Quick actions (add blackout dates, view calendar)
- Notification bell for new appointment requests

### 3. Appointment Management
- Calendar view of all appointments
- Filter appointments by status (pending/confirmed/cancelled)
- View appointment details:
  - Client information
  - Appointment date and time
  - Status
  - Any notes
- Actions per appointment:
  - Confirm (sends confirmation email to client)
  - Cancel (with optional reason, sends cancellation email to client)
  - Reschedule (with calendar picker)
  - Add notes (internal use only)

### 4. Blackout Dates Management
- Add/remove blackout date ranges
- Calendar view showing all blackout periods
- Prevent scheduling during blackout dates

### 5. Working Hours Management
- Set standard working hours
- Option for different hours on specific days
- Special hours for holidays (future enhancement)

### 6. Notifications
- Email notifications for new booking requests
- In-app notifications for new activities
- Email templates for:
  - Appointment confirmation
  - Appointment cancellation
  - Reschedule notifications

## Technical Requirements

### Frontend
- Responsive design (works on mobile and desktop)
- Svelte components for consistent UI
- Real-time updates for new appointments
- Form validation and error handling

### Backend
- Secure API endpoints for all admin actions
- Authentication and authorization
- Email service integration
- Data validation and sanitization

### Data Structure
```typescript
interface AdminUser {
  id: string;
  email: string;
  passwordHash: string;
  lastLogin: string; // ISO date string
}

interface BlackoutDate {
  id: string;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  reason?: string;
}

interface WorkingHours {
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  isWorkingDay: boolean;
  startTime?: string; // '09:00'
  endTime?: string;   // '17:00'
}
```

## User Flow
1. Admin logs in to the admin panel
2. Views dashboard for quick overview
3. Navigates to calendar to see all appointments
4. For new appointment requests:
   - Reviews request details
   - Clicks "Confirm" or "Cancel"
   - Adds any internal notes if needed
5. Manages blackout dates as needed
6. Updates working hours when necessary

## Future Enhancements
- Client management system
- Multiple admin roles and permissions
- Advanced reporting and analytics
- Integration with external calendars
- Custom email templates
- Client history and notes
- Special hours for specific dates
- Dashboard with key metrics

## Open Questions
1. What are the standard working hours for each day of the week?
2. Should there be any restrictions on when appointments can be made (e.g., no same-day bookings)?
3. What information should be included in the appointment confirmation/cancellation emails?
4. Should there be a limit on how far in advance appointments can be booked?
5. Any specific requirements for the mobile experience of the admin panel?
