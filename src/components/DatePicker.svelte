<script lang="ts">
	import { onMount } from 'svelte';
	import { getLocalTimeZone, today, CalendarDate, isSameDay } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import { bookingService } from '$lib/services/booking.service';

	let currentMonth: number = new Date().getMonth() + 1;
	let currentYear: number = new Date().getFullYear();
	let calendarElement: HTMLElement;

	const todayDate = today(getLocalTimeZone());
	let availableDays: CalendarDate[] = [];
	let isLoading = true;
	let value: CalendarDate | undefined;

	// Function to load available days for a specific month and year
	async function loadAvailableDays(month: number, year: number) {
		try {
			isLoading = true;
			const response = await bookingService.getAvailableDays(
				month,
				year,
				1 // serviceId: 1 (you might want to make this dynamic)
			);

			// Convert the YYYY-MM-DD strings to CalendarDate objects
			availableDays = response.availableDays.map((dateString) => {
				const [year, month, day] = dateString.split('-').map(Number);
				return new CalendarDate(year, month, day);
			});

			// Log month change after loading data
			console.log('Month changed to:', {
				month,
				year,
				monthName: new Date(year, month - 1).toLocaleString('default', { month: 'long' })
			});
		} catch (error) {
			console.error('Failed to load available days:', error);
		} finally {
			isLoading = false;
		}
	}

	onMount(() => {
		// Load initial month data
		const now = new Date();
		loadAvailableDays(now.getMonth() + 1, now.getFullYear());

		// Wait for the calendar to be rendered
		setTimeout(() => {
			if (calendarElement) {
				const prevButton = calendarElement.querySelector('button[aria-label="Previous"]');
				const nextButton = calendarElement.querySelector('button[aria-label="Next"]');

				if (prevButton) {
					prevButton.addEventListener('click', () => {
						const prevMonth = currentMonth > 1 ? currentMonth - 1 : 12;
						const prevYear = currentMonth > 1 ? currentYear : currentYear - 1;
						currentMonth = prevMonth;
						currentYear = prevYear;
						console.log('Month changed to:', {
							month: currentMonth,
							year: currentYear,
							monthName: new Date(currentYear, currentMonth - 1).toLocaleString('default', {
								month: 'long'
							})
						});
					});
				}
				if (nextButton) {
					nextButton.addEventListener('click', () => {
						const nextMonth = currentMonth < 12 ? currentMonth + 1 : 1;
						const nextYear = currentMonth < 12 ? currentYear : currentYear + 1;
						currentMonth = nextMonth;
						currentYear = nextYear;
						console.log('Month changed to:', {
							month: currentMonth,
							year: currentYear,
							monthName: new Date(currentYear, currentMonth - 1).toLocaleString('default', {
								month: 'long'
							})
						});
					});
				}
			}
		}, 1000);
	});

	// Function to check if a date is available
	const isDateAvailable = (date: CalendarDate): boolean => {
		return availableDays.some((availableDate) => isSameDay(availableDate, date));
	};
</script>

{#if isLoading}
	<div class="py-4 text-center text-gray-500">Loading available dates...</div>
{:else}
	<div bind:this={calendarElement}>
		<Calendar
			bind:value
			class="rounded-md border"
			minValue={todayDate}
			isDateUnavailable={(date) => !isDateAvailable(date as CalendarDate)}
		/>
	</div>
{/if}
