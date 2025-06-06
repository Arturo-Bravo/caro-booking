<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import FlowerBackground from '$lib/components/FlowerBackground.svelte';
	import './styles.css';
	import styles from './+layout.module.scss';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<FlowerBackground />
	<div class={styles.main}>
		<Navbar />
		{@render children()}
	</div>
</ParaglideJS>
