# aaeach

Simple `forEach` for `async`/`await`
--------

## Installation

`npm i aaeach`

## Usage

```javascript
import each from 'aaeach'

const something = async () => {
  await each(somethingElse, async (thing) => {
    await thing()
  })
}
```

## License

[MIT](./LICENSE.md)
