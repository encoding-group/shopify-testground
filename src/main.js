import './scss/global.scss';

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		domain: 'encoding-group',
		token: '8dab23e99be5dccb58cca35e4a49d473'
	}
});

export default app;
