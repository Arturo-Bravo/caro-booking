<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';

	let langKey = i18n.getLanguageFromUrl(page.url);

	const switchToLanguage = async () => {
		const newLang = langKey === 'en' ? 'es' : 'en';
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLang);
		goto(localisedPath);
	};
</script>

<nav>
	<button class="btn" onclick={switchToLanguage}>
		<h1>{m.switch_lang()}</h1>
	</button>
</nav>

<style>
	.btn {
		background-color: #000;
		color: #fff;
		border: 1px solid #fff;
		padding: 10px 20px;
		cursor: pointer;
	}
</style>
