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

## IMPORTANT: Compatibility fix when you have node > 14

### Remove node modules

Remove node modules as a first step or if you just cloned the repo, you can skip this step

### Remember which is your current node version

Run `node -v` and write your version so you can revert to it later

### Use nvm to use node 14

```bash
nvm install 14
nvm use 14
```

### Run npm install or npm install --legacy-peer-deps

Run `npm install or npm install --legacy-peer-deps`

### Add terminal library dependency

Previousluy we had this in the package.json `"dom-terminal": "git+https://github.com/AleksandarPredic/dom-terminal.git"` as dependency.
It was creating a lot of issues with new node version so I removed it from the package.json.

```bash
mkdir -p node_modules/dom-terminal/dist && curl -o node_modules/dom-terminal/dist/terminal-1.0.2.min.js https://raw.githubusercontent.com/AleksandarPredic/dom-terminal/master/dist/terminal-1.0.2.min.js
```

This command will install the Terminal dependency used in main.js

### Compile assets

Run `npm run prod`

### Return to the lastes node version

Run `nvm use node`

If you want that your tremina always start with the latest node version run the `nvm alias default node`

To see all the node versions installed to switch to `nvm ls` but for this project use `node 14`

### Using nvm node version vs system version

If you have node version installed via system and nvm, running `nvm use node` will return to the latest system version.
In my case that was also 14, while my system version was 25.

To go back to the system version run `nvm use system` and you will be back to this version.
