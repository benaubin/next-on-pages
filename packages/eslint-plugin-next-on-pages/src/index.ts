import noNodeJsRuntime from './rules/no-nodejs-runtime';
import noUnsupportedConfigs from './rules/no-unsupported-configs';
import noAppNotFoundRuntime from './rules/no-app-not-found-runtime';

import type { ESLint } from 'eslint';

const config: ESLint.Plugin = {
	rules: {
		'no-nodejs-runtime': noNodeJsRuntime,
		'no-unsupported-configs': noUnsupportedConfigs,
		'no-app-not-found-runtime': noAppNotFoundRuntime,
	},
	configs: {
		recommended: {
			plugins: ['eslint-plugin-next-on-pages'],
			rules: {
				'next-on-pages/no-app-not-found-runtime': 'error',
				'next-on-pages/no-nodejs-runtime': 'error',
				'next-on-pages/no-unsupported-configs': 'error',
			},
		},
	},
};

export = config;
