<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { bookingService, type TimeSlot } from '$lib/services/booking.service';
	import { onMount } from 'svelte';

	// get selectedDate from props
	let { selectedDate, selectedTime = $bindable(''), onTimeSelect = $bindable(() => {}) } = $props();

	let isLoading = $state(true);
	let timeSlots: TimeSlot[] = [];

	const loadAvailableTimeSlots = async () => {
		try {
			isLoading = true;
			const response = await bookingService.getAvailableSlots({
				serviceId: 1,
				date: selectedDate.toString()
			});
			timeSlots = response.slots;
			console.log(response);
		} catch (error) {
			console.error('Failed to load available time slots:', error);
		} finally {
			isLoading = false;
		}
	};

	// onMount(() => {
	// loadAvailableTimeSlots();
	// });

	$effect(() => {
		loadAvailableTimeSlots();
	});
</script>

{#if isLoading}
	<div class="py-4 text-center text-gray-500">Loading available time slots...</div>
{:else}
	<div class="time-slot-selector">
		<div class="grid grid-cols-2 gap-2" role="group" aria-labelledby="time-slot-label">
			<span id="time-slot-label" class="sr-only">{m.time_selector_aria_label()}</span>
			<span class="col-span-2 mb-2 block text-sm font-medium text-gray-700"
				>{m.time_selector_label()}</span
			>
			{#each timeSlots as slot}
				<button
					type="button"
					class="time-slot-btn {selectedTime === slot.start
						? 'bg-blue-500 text-white'
						: 'border border-gray-300 bg-white text-gray-700'}"
					onclick={() => onTimeSelect(slot.start)}
				>
					{slot.start.split('T')[1]} - {slot.end.split('T')[1]}
				</button>
			{/each}
		</div>
	</div>
{/if}

<style>
	.time-slot-btn {
		padding: 0.5rem 0.25rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s;
	}

	.time-slot-btn:hover {
		background-color: #f3f4f6;
	}

	.time-slot-btn.bg-blue-500:hover {
		background-color: #3b82f6;
	}
</style>
