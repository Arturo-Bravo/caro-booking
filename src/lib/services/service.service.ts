import { apiService } from './api.service';

export interface Service {
	id: number;
	name: string;
	description: string | null;
	durationMinutes: number;
	price: string;
	isActive: boolean;
	createdAt: string;
}

export const serviceService = {
	/**
	 * Fetches all available services
	 * @returns Promise with an array of services
	 */
	getAllServices: async (): Promise<Service[]> => {
		return apiService.get<Service[]>('/services');
	}
};
