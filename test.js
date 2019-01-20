const each = require('.')
const tape = require('tape')

tape.test('aaeach', (t) => {
  let c = 0
  const fns = [ () => Promise.resolve().then(() => { c++ }) ]
  ;(async () => {
    await each(fns, async (f) => {
      await f()
      t.equal(c, 1, 'works')
      t.end()
    })
  })()
})
