<script lang="ts">
	import { getLocalTimeZone, today } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar/index.js';

	const todayDate = today(getLocalTimeZone());
	let value = todayDate;
</script>

<Calendar 
	bind:value 
	class="rounded-md border" 
	minValue={todayDate}
/>
