// global.console.log('hello node')
// console.log('hello node')
// get the directory
console.log(__dirname)
console.log(__filename)

// import chalk - common js
const chalk = require('chalk');
// for this to work 
// import chalk from 'chalk'
console.log(chalk.blue('Hello world!'));

// this is a node internal module (package)
// you don't need to install it but you need to 
// require it

const crypto = require('crypto')
const randomString = crypto.randomBytes(64).toString('Hex')
console.log(randomString)

// here we import the add function
const addNumbers = require('./add')
console.log(addNumbers(3, 5))

// const functionsObj = require('./functions')
// console.log(functionsObj.goodbyeFunction())

// more common would be to use object destructuring
const { helloFunction, goodbyeFunction } = require('./functions')
const greeting = helloFunction()
console.log(greeting)

// this is how you can access a parameter that is passed
// via : $ node index.js <param>

const param = process.argv[2]
console.log(param)
