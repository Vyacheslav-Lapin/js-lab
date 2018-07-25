install:
	npm install
start:
	npm run babel-node -- ./src/index.js
build:
	npm run-script build
publish:
	npm publish