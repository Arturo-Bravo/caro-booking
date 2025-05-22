<script>
	import * as m from '$lib/paraglide/messages.js';
	import styles from './+page.module.scss';
	import BookingForm from '../components/BookingForm.svelte';
</script>

<main class="page-container">
	<div class="welcome-section">
		<h1>{m.welcome()}</h1>
		<p>Book your appointment today</p>
	</div>
	
	<BookingForm />
</main>

<style>
	.page-container {
		max-width: 32rem;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.welcome-section {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.welcome-section h1 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.welcome-section p {
		font-size: 1.125rem;
		color: #4b5563;
	}
</style>
