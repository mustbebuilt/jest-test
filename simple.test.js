const myModule = require('./simple');

test('myModule returns the expected value', () => {
  expect(myModule.myFunction(42)).toEqual('Hello, 42!');
});
