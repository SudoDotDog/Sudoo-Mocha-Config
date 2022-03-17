# Sudoo-Mocha-Config

[![npm version](https://badge.fury.io/js/%40sudoo%2Fmocha-config.svg)](https://www.npmjs.com/package/@sudoo/mocha-config)
[![downloads](https://img.shields.io/npm/dm/@sudoo/mocha-config.svg)](https://www.npmjs.com/package/@sudoo/mocha-config)

Mocha configuration for TypeScript

## Install

```sh
yarn add @sudoo/mocha-config --dev
# Or
npm install @sudoo/mocha-config --save-dev
```

## Usage

Run the following command

```makefile
mocha := node_modules/.bin/mocha
mocha-config := node_modules/@sudoo/mocha-config/.mocharc.json
$(mocha) --config $(mocha-config)
```
