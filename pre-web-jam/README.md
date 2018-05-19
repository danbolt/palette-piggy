# pre-indie-jam

## Web port
Use the love.js builder provided by Tanner on npm:
`npm install -g love.js`

## Modifying
In order to get this working, I had to increase the amount of available RAM in the emscripten build. Before updating, take a look at index.html and look for the variable called `memSize`.

