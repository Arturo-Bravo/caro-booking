<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import DatePicker from './DatePicker.svelte';
	import TimeSlotSelector from './TimeSlotSelector.svelte';
	import ServiceDropdown from './ui/ServiceDropdown.svelte';
	import { onMount } from 'svelte';
	import type { Service } from '$lib/services/service.service';

	let selectedServiceId = $state('');

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		notes: '',
		selectedTime: '',
		selectedDate: '',
		serviceId: 0
	});

	const resetForm = () => {
		formData = {
			name: '',
			email: '',
			phone: '',
			notes: '',
			selectedTime: '',
			selectedDate: formData.selectedDate, // Keep the selected date when resetting
			serviceId: formData.serviceId
		};
	};

	// Reset form when component mounts
	onMount(() => {
		resetForm();
	});

	const formatPhoneNumber = (value: string): string => {
		// Remove all non-digit characters
		const numbers = value.replace(/\D/g, '');

		// Format as (XXX) XXX-XXXX
		let formatted = '';
		if (numbers.length > 0) {
			formatted = `(${numbers.substring(0, 3)}`;
			if (numbers.length > 3) {
				formatted += `) ${numbers.substring(3, 6)}`;
			}
			if (numbers.length > 6) {
				formatted += `-${numbers.substring(6, 10)}`;
			}
		}
		return formatted;
	};

	const handlePhoneInput = (event: Event) => {
		const target = event.target as HTMLInputElement;

		// Save cursor position
		const cursorPosition = target.selectionStart || 0;
		const input = target.value;

		// Get the raw value without formatting
		const rawValue = input.replace(/\D/g, '');

		// Format the phone number
		const formattedValue = formatPhoneNumber(rawValue);

		// Update the form data
		formData.phone = formattedValue;

		// Set cursor position after the state update
		requestAnimationFrame(() => {
			// Calculate new cursor position
			let newCursorPosition = cursorPosition;
			const inputLength = input.length;
			const formattedLength = formattedValue.length;

			// If we added formatting characters, adjust cursor position
			if (formattedLength > inputLength) {
				// If we're at the end, keep cursor at end
				if (cursorPosition >= inputLength) {
					newCursorPosition = formattedLength;
				} else if (
					input[cursorPosition - 1] === ' ' ||
					input[cursorPosition - 1] === '-' ||
					input[cursorPosition - 1] === ')'
				) {
					// If we're at a formatting character, move past it
					newCursorPosition = cursorPosition + 1;
				}
			}

			target.setSelectionRange(newCursorPosition, newCursorPosition);
		});
	};

	const handlePhoneKeyDown = (event: KeyboardEvent) => {
		// Allow: backspace, delete, tab, escape, enter, and decimal point
		if (
			[8, 9, 27, 13, 110, 190].includes(event.keyCode) ||
			// Allow: Ctrl+A, Cmd+A
			(event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true)) ||
			// Allow: Ctrl+C, Cmd+C
			(event.keyCode === 67 && (event.ctrlKey === true || event.metaKey === true)) ||
			// Allow: Ctrl+X, Cmd+X
			(event.keyCode === 88 && (event.ctrlKey === true || event.metaKey === true)) ||
			// Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39)
		) {
			// Let it happen, don't do anything
			return;
		}

		// Ensure that it is a number and stop the keypress if not
		if (event.keyCode < 48 || event.keyCode > 57) {
			if (event.keyCode < 96 || event.keyCode > 105) {
				event.preventDefault();
			}
		}
	};

	const handleSubmit = () => {
		// Will handle form submission later
		console.log('Form submitted:', formData);
	};
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();
		handleSubmit();
	}}
	class="form-container"
>
	<h2 class="form-title">{m.booking_form_title()}</h2>

	<!-- Service Selection -->
	<div class="form-group">
		<label for="service" class="form-label">{m.booking_form_service_label()}</label>
		<ServiceDropdown bind:value={formData.serviceId} />
	</div>

	<!-- Name Field -->
	<div class="form-group">
		<label for="name" class="form-label">{m.booking_form_name_label()}</label>
		<input
			type="text"
			id="name"
			bind:value={formData.name}
			required
			class="form-input"
			placeholder={m.booking_form_name_placeholder()}
		/>
	</div>

	<!-- Email Field -->
	<div class="form-group">
		<label for="email" class="form-label">{m.booking_form_email_label()}</label>
		<input
			type="email"
			id="email"
			bind:value={formData.email}
			required
			class="form-input"
			placeholder={m.booking_form_email_placeholder()}
		/>
	</div>

	<!-- Phone Field -->
	<div class="form-group">
		<label for="phone" class="form-label">{m.booking_form_phone_label()}</label>
		<input
			type="tel"
			id="phone"
			bind:value={formData.phone}
			oninput={handlePhoneInput}
			onkeydown={handlePhoneKeyDown}
			maxlength="14"
			required
			class="form-input"
			placeholder={m.booking_form_phone_placeholder()}
			inputmode="numeric"
		/>
	</div>

	<!-- Date and Time Selection -->
	<fieldset class="form-group space-y-4">
		<legend class="form-label mb-2 block">{m.booking_form_date_label()}</legend>
		<div class="flex flex-col gap-4 md:flex-row">
			<div class="date-picker">
				<DatePicker bind:value={formData.selectedDate} />
			</div>
			<div class="w-full md:w-3/5">
				<TimeSlotSelector
					bind:selectedTime={formData.selectedTime}
					selectedDate={formData.selectedDate}
				/>
			</div>
		</div>
	</fieldset>

	<!-- Notes Field -->
	<div class="form-group">
		<label for="notes" class="form-label">{m.booking_form_notes_label()}</label>
		<textarea
			id="notes"
			bind:value={formData.notes}
			class="form-input"
			rows="3"
			placeholder={m.booking_form_notes_placeholder()}
		></textarea>
	</div>

	<!-- Submit Button -->
	<button type="submit" class="submit-btn">
		{m.booking_form_submit()}
	</button>
</form>

<style>
	.form-container {
		width: 100%;
		max-width: 50rem;
		margin: 0 auto;
		padding: 1.5rem;
		background: white;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
	}

	.form-title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.form-group {
		margin-bottom: 1rem;
		box-sizing: border-box;
		/* Remove max-width to allow DatePicker to use its own width */
	}

	/* Specific style for the date-picker container */
	:global(.date-picker) {
		width: 100%;
		display: flex;
		justify-content: center;
		margin: 0 auto;
	}

	.form-group:last-child {
		margin-bottom: 0;
	}

	.form-label {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		color: #374151;
		margin-bottom: 0.5rem;
	}

	.form-input {
		width: 100%;
		padding: 0.5rem 0;
		border: 1px solid #d1d5db;
		border-radius: 0.375rem;
		font-size: 1rem;
		line-height: 1.5;
		transition:
			border-color 0.15s ease-in-out,
			box-shadow 0.15s ease-in-out;
		resize: vertical;
		min-height: 2rem;
	}

	textarea.form-input {
		min-height: 6rem;
	}

	.form-input:focus {
		outline: none;
		border-color: #3b82f6;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
	}

	.submit-btn {
		width: 100%;
		padding: 0.5rem 1rem;
		background-color: #2563eb;
		color: white;
		border: none;
		border-radius: 0.375rem;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;
		margin-top: 1rem;
	}

	.submit-btn:hover {
		background-color: #1d4ed8;
	}

	.submit-btn:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
	}

	.date-picker {
		width: 200px;
		display: flex;
		justify-content: center;
		margin: 0 auto;
	}
</style>
