const { error } = console,
  { warn } = console

console.error = function (message) {
  error.apply(console, arguments)
  throw message instanceof Error ? message : new Error(message)
}

console.warn = function (message) {
  warn.apply(console, arguments)
  throw message instanceof Error ? message : new Error(message)
}
