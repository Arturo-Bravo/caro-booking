import { apiService } from './api.service';

export interface BookingRequest {
  email: string;
  firstName: string;
  lastName: string;
  notes?: string;
  phone: string;
  selectedDate: string; // YYYY-MM-DD format
  selectedTime: string; // HH:mm:ss.SSS - HH:mm:ss.SSS format
  serviceId: number;
}

export interface BookingResponse {
  id: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  bookingRef: string;
  // Add other fields as needed from your API response
}

export interface AvailableDaysResponse {
	availableDays: string[]; // Array of dates in YYYY-MM-DD format
}

export interface TimeSlot {
	start: string; // ISO date string
	end: string; // ISO date string
	available: boolean;
}

export interface AvailableSlotsResponse {
	date: string; // YYYY-MM-DD
	available: boolean;
	slots: TimeSlot[];
}

type AvailableDaysOptions =
	| { serviceId: number; month: number; year: number }
	| { serviceId: number; daysInAdvance: number };

type AvailableSlotsOptions = {
	serviceId: number;
	date: string; // YYYY-MM-DD
};

export const bookingService = {
	/**
	 * Fetches available days for a service
	 * Can fetch by month/year or by days in advance
	 * @param options Configuration options including serviceId and either month/year or daysInAdvance
	 * @returns Promise with the available days response
	 */
	getAvailableDays: async (options: AvailableDaysOptions): Promise<AvailableDaysResponse> => {
		return apiService.get<AvailableDaysResponse>('/available-days', options);
	},

	/**
	 * Fetches available time slots for a specific date and service
	 * @param options Configuration including serviceId and date
	 * @returns Promise with the available slots response
	 */
	getAvailableSlots: async (options: AvailableSlotsOptions): Promise<AvailableSlotsResponse> => {
		return apiService.get<AvailableSlotsResponse>('/available-slots', options);
	},

	/**
	 * Creates a new booking
	 * @param bookingData The booking data to submit
	 * @returns Promise with the booking response
	 */
	createBooking: async (bookingData: BookingRequest): Promise<BookingResponse> => {
		return apiService.post<BookingResponse>('/bookings', bookingData);
	}
};
