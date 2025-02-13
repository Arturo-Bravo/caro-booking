<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import './styles.css';
	import styles from './+layout.module.scss';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class={styles.main}>
		<Navbar />
		{@render children()}
	</div>
</ParaglideJS>
