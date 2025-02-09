<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Navbar />
	{@render children()}
</ParaglideJS>
