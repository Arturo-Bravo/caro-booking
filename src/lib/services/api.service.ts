import { browser } from '$app/environment';

class ApiService {
	private baseUrl: string;

	constructor() {
		// Use the environment variable with a fallback for development
		this.baseUrl = browser ? import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000' : ''; // For SSR
	}

	private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
		const url = `${this.baseUrl}${endpoint}`;

		const response = await fetch(url, {
			...options,
			headers: {
				'Content-Type': 'application/json',
				...options.headers
			}
		});

		if (!response.ok) {
			const error = await response.json().catch(() => ({}));
			throw new Error(error.message || 'Something went wrong');
		}

		return response.json();
	}

	public get<T>(endpoint: string, queryParams: Record<string, string | number> = {}): Promise<T> {
		const queryString = new URLSearchParams(
			Object.entries(queryParams).map(([key, value]) => [key, String(value)])
		).toString();

		const url = queryString ? `${endpoint}?${queryString}` : endpoint;
		return this.request<T>(url, { method: 'GET' });
	}

	/**
	 * Sends a POST request to the specified endpoint with the provided data
	 * @param endpoint The API endpoint to send the request to
	 * @param data The data to send in the request body
	 * @param queryParams Optional query parameters
	 * @returns Promise with the response data
	 */
	public post<T>(
		endpoint: string,
		data: unknown,
		queryParams: Record<string, string | number> = {}
	): Promise<T> {
		const queryString = new URLSearchParams(
			Object.entries(queryParams).map(([key, value]) => [key, String(value)])
		).toString();

		const url = queryString ? `${endpoint}?${queryString}` : endpoint;
		return this.request<T>(url, {
			method: 'POST',
			body: JSON.stringify(data)
		});
	}
}

export const apiService = new ApiService();
