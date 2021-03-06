/* --------------------
 * react-lazy-ssr module
 * Test fixtures
 * ------------------*/

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import lazy from 'react-lazy-ssr';

// Import app
import App from './App.jsx';

// Hydrate app
lazy.preloadAll().then(() => {
	if (window._preloaded) window._preloaded();

	const root = document.getElementById('app');
	ReactDOM.hydrate(<App />, root, () => {
		if (window._hydrated) window._hydrated();
	});
});
