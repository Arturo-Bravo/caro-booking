<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
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
	<button onclick={switchToLanguage}>
		<h1>{m.switch_lang()}</h1>
	</button>
</nav>
