import { apiService } from './api.service';

export interface AvailableDaysResponse {
	month: number;
	year: number;
	availableDays: string[]; // Array of dates in YYYY-MM-DD format
}

export const bookingService = {
	/**
	 * Fetches available days for a given month, year, and service
	 * @param month Month (1-12)
	 * @param year Full year (e.g., 2025)
	 * @param serviceId The ID of the service
	 * @returns Promise with the available days response
	 */
	getAvailableDays: async (
		month: number,
		year: number,
		serviceId: number
	): Promise<AvailableDaysResponse> => {
		return apiService.get<AvailableDaysResponse>('/available-days', {
			month,
			year,
			serviceId
		});
	}

	// Add more booking-related API calls here as needed
};
