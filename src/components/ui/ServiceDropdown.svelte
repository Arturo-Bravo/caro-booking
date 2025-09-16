<script lang="ts">
	import { onMount } from 'svelte';
	import { serviceService, type Service } from '$lib/services/service.service';
	import * as m from '$lib/paraglide/messages.js';

	let { value = $bindable('') } = $props<{ value?: string }>();
	let services = $state<Service[]>([]);
	let isLoading = $state(true);

	const loadServices = async () => {
		try {
			services = await serviceService.getAllServices();
			console.log('Loaded services:', services);

			// Set the first service as selected by default if none is selected
			if (services.length > 0 && !value) {
				value = services[0].name;
				console.log(value);
			}
		} catch (error) {
			console.error('Failed to load services:', error);
		} finally {
			isLoading = false;
		}
	};

	onMount(() => {
		loadServices();
	});
</script>

{#if isLoading}
	<div class="py-2 text-gray-500">Loading services...</div>
{:else if services.length === 0}
	<div class="py-2 text-gray-500">{m.service_dropdown_no_services()}</div>
{:else}
	<select bind:value class="form-select w-full" aria-label={m.booking_form_service_label()}>
		{#each services as service}
			<option value={service.name}>{service.name}</option>
		{/each}
	</select>
{/if}
