# fastify-warning

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  ![build](https://github.com/fastify/fastify-warning/workflows/build/badge.svg)

A small utility, used by Fastify itself, for generating consistent warning objects across your codebase and plugins.
It also exposes a utility for emitting those warnings, guaranteeing that they are issued only once.

### Install
```
npm i fastify-warning
```

### Usage

The module exports a builder function that returns an utility for creating warnings and emitting them.

```js
const warning = require('fastify-warning')()
```

#### Methods

```
warning.create(name, code, message)
```

- `name` (`string`, required) - The error name, you can access it later with `error.name`. For consistency, we recommend to prefix plugin error names with `FastifWarning{YourPluginName}`
- `code` (`string`, required) - The warning code, you can access it later with `error.code`. For consistency, we recommend to prefix plugin error codes with `FST_{YourPluginName}_`
- `message` (`string`, required) - The warning message. You can also use interpolated strings for formatting the message.

The utility also contains an `emit` function that you can use for emitting the warnings you have previously created by passing their respective code. A warning is guaranteed to be emitted only once.

```
warning.emit(code [, a [, b [, c]]])
```

- `code` (`string`, required) - The warning code you intend to emit.
- `[, a [, b [, c]]]` (`any`, optional) - Parameters for string interpolation.

```js
const warning = require('fastify-warning')()
warning.create('FastifyWarning', 'FST_ERROR_CODE', 'message')
warning.emit('FST_ERROR_CODE')
```

How to use a interpolated string:
```js
const warning = require('fastify-warning')()
warning.create('FastifyWarning', 'FST_ERROR_CODE', 'Hello %s')
warning.emit('FST_ERROR_CODE', 'world')
```

The module also exports an `warning.emitted` [Map](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Map), which contains all the warnings already emitted. Useful for testing.
```js
const warning = require('fastify-warning')()
warning.create('FastifyWarning', 'FST_ERROR_CODE', 'Hello %s')
console.log(warning.emitted.get('FST_ERROR_CODE')) // false
warning.emit('FST_ERROR_CODE', 'world')
console.log(warning.emitted.get('FST_ERROR_CODE')) // true
```

## License

Licensed under [MIT](./LICENSE).
