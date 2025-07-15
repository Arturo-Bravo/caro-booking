<script lang="ts">
	import { onMount } from 'svelte';
	import { getLocalTimeZone, today, CalendarDate, isSameDay } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import { bookingService } from '$lib/services/booking.service';

	const todayDate = today(getLocalTimeZone());
	let value = todayDate;
	let availableDays: CalendarDate[] = [];
	let isLoading = true;

	onMount(async () => {
		try {
			// For now, we'll use the current month and year
			const now = new Date();
			const response = await bookingService.getAvailableDays(
				now.getMonth() + 1, // months are 0-indexed in JS
				now.getFullYear(),
				1 // serviceId: 1 (you might want to make this dynamic)
			);

			// Convert the YYYY-MM-DD strings to CalendarDate objects
			availableDays = response.availableDays.map((dateString) => {
				const [year, month, day] = dateString.split('-').map(Number);
				return new CalendarDate(year, month, day);
			});
		} catch (error) {
			console.error('Failed to load available days:', error);
		} finally {
			isLoading = false;
		}
	});

	// Function to check if a date is available
	function isDateAvailable(date: CalendarDate): boolean {
		return availableDays.some((availableDate) => isSameDay(availableDate, date));
	}
</script>

<Calendar
	bind:value
	class="rounded-md border"
	minValue={todayDate}
	isDateUnavailable={(date) => !isDateAvailable(date as CalendarDate)}
/>

{#if isLoading}
	<div class="py-4 text-center text-gray-500">Loading available dates...</div>
{/if}
