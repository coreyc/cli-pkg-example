#!/usr/bin/env node
const program = require('commander')

const { toUpperCase, toLowerCase } = require('./')

program
  .version('1.0.0')
  .description('An example CLI for formatting names')
  .option('-u, --uppercase <name>', 'To all uppercase')
  .option('-l, --lowercase <name>', 'To all lowercase')
  .parse(process.argv)

if (program.uppercase) console.log(toUpperCase(program.uppercase))
if (program.lowercase) console.log(toLowerCase(program.lowercase))