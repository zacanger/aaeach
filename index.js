const aaeach = async (xs, cb) => {
  for (let i = 0; i < xs.length; i++) {
    await cb(xs[i])
  }
}

// UMD-ish + ES modules
if (typeof module !== 'undefined' && typeof exports === 'object') {
  Object.defineProperty(exports, '__esmodule', {
    value: true
  })
  module.exports = aaeach
  module.exports.default = aaeach
} else if (typeof window !== 'undefined') {
  window.aaeach = aaeach
} else if (typeof global !== 'undefined' && typeof global === 'object') {
  global.aaeach = aaeach
}
