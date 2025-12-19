const en = {
	home: {
		title: 'Astro i18n Example Site',
		heading: 'Hello, Astro!',
		currentLang: 'Current language: English (en)',
		descLines: [
			'You are now viewing the default language page for English at /en/.',
			'Click the button in the top-right corner to switch back to the Chinese version at /.',
		],
		switchLabel: 'Switch to Chinese',
	},
	about: {
		title: 'About This Astro i18n Demo',
		heading: 'About this site',
		paragraphs: [
			'This site demonstrates how to use Astro’s built-in i18n support for multilingual content.',
			'A single page template pulls copy from language dictionaries, so you only maintain layout once.',
			'Add more pages by expanding the dictionaries with the keys you need for new sections.',
		],
	},
} as const;

export type MessagesEn = typeof en;
export default en;

