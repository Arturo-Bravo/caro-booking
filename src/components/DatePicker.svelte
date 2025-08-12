<script lang="ts">
	import { onMount } from 'svelte';
	import { getLocalTimeZone, today, CalendarDate, isSameDay } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import { bookingService } from '$lib/services/booking.service';

	const todayDate = today(getLocalTimeZone());
	// Destructure the props we care about
	let { value = $bindable(''), ...restProps } = $props();

	// Set maximum date to 60 days from today if not provided
	const maxDateValue = todayDate.add({ days: 60 });

	let availableDays: CalendarDate[] = [];
	let isLoading = $state(true);
	let minDate = $state(todayDate);

	let selectedDate = $state(todayDate);

	// Function to load available days for the next 60 days
	const loadAvailableDays = async () => {
		try {
			isLoading = true;
			const response = await bookingService.getAvailableDays({
				serviceId: 1, // You might want to make this dynamic
				daysInAdvance: 60
			});

			// Convert the YYYY-MM-DD strings to CalendarDate objects and sort them
			availableDays = response.availableDays
				.map((dateString: string) => {
					const [year, month, day] = dateString.split('-').map(Number);
					return new CalendarDate(year, month, day);
				})
				.sort((a, b) => a.compare(b));

			// Set the minimum date to the earliest available date and select it
			if (availableDays.length > 0) {
				minDate = availableDays[0];
				selectedDate = minDate; // Set the selected value to the earliest available date
			}

			console.log(
				'Loaded available days:',
				availableDays.length,
				'days available in the next 60 days',
				'Earliest available date:',
				minDate?.toString()
			);
		} catch (error) {
			console.error('Failed to load available days:', error);
		} finally {
			isLoading = false;
		}
	};

	onMount(() => {
		loadAvailableDays();
	});

	// Function to check if a date is available
	const isDateAvailable = (date: CalendarDate): boolean => {
		return availableDays.some((availableDate) => isSameDay(availableDate, date));
	};

	$effect(() => {
		if (selectedDate.toString() !== value) {
			value = selectedDate.toString();
			console.log(value);
		}
	});
</script>

{#if isLoading}
	<div class="py-4 text-center text-gray-500">Loading available dates...</div>
{:else}
	<div>
		<Calendar
			bind:value={selectedDate}
			class="rounded-md border"
			minValue={minDate}
			maxValue={maxDateValue}
			isDateUnavailable={(date) => !isDateAvailable(date as CalendarDate)}
			{...restProps}
		/>
	</div>
{/if}
