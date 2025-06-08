<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  
  export let selectedTime: string = '';
  export let onTimeSelect: (time: string) => void = () => {};
  
  // Generate time slots from 9am to 4pm in 1-hour intervals
  const timeSlots = Array.from({ length: 8 }, (_, i) => {
    const hour = 9 + i;
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    const timeString = `${hour.toString().padStart(2, '0')}:00`;
    const displayString = `${displayHour} ${period}`;
    
    return { value: timeString, display: displayString };
  });
</script>

<div class="time-slot-selector">
  <div class="grid grid-cols-2 gap-2" role="group" aria-labelledby="time-slot-label">
    <span id="time-slot-label" class="sr-only">{m.time_selector_aria_label()}</span>
    <span class="col-span-2 block text-sm font-medium text-gray-700 mb-2">{m.time_selector_label()}</span>
    {#each timeSlots as slot}
      <button
        type="button"
        class="time-slot-btn {selectedTime === slot.value ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border border-gray-300'}"
        on:click={() => onTimeSelect(slot.value)}
      >
        {slot.display}
      </button>
    {/each}
  </div>
</div>

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
