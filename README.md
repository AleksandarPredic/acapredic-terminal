# My personal website as terminal
New look and behaviour for my new website [acapredic.com](https://acapredic.com)
## Getting Started
Install [node.js](http://nodejs.org).

	npm install

You are done.

Please not that you need to have [webpack and webpack cli](https://webpack.js.org/guides/installation) globally for ease of use.

### `npm run dev` or `npm run watch`

Use `npm run dev` or `npm run watch` for on–the–fly updates of your code

### `npm run prod`

This will create a `dist` directory for project. **This directory represents distribution package**.

## Directory Structure

Plese keep in mind that `dist` directory is rebuilt with each `npm dev`, `npm watch` or `npm prod` command.

	dist/ [generated via webpack]
	src/
	├── assets/ [images, js, scss]
	├───data.js [acting as DB]
	└── index.html
	.editorconfig
	.eslintrc
	.gitignore
	.stylelintrc
	mix-manifest.json
	package.json
	README.md
	webpack.config.js
