import { apiService } from './api.service';

export interface AvailableDaysResponse {
	availableDays: string[]; // Array of dates in YYYY-MM-DD format
}

type AvailableDaysOptions =
	| { serviceId: number; month: number; year: number }
	| { serviceId: number; daysInAdvance: number };

export const bookingService = {
	/**
	 * Fetches available days for a service
	 * Can fetch by month/year or by days in advance
	 * @param options Configuration options including serviceId and either month/year or daysInAdvance
	 * @returns Promise with the available days response
	 */
	getAvailableDays: async (options: AvailableDaysOptions): Promise<AvailableDaysResponse> => {
		return apiService.get<AvailableDaysResponse>('/available-days', options);
	}
};
