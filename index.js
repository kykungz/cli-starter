#!/usr/bin/env node
'use strict'

const meow = require('meow')
const AppCli = require('./src/app')

const cli = meow(`
  Usage
    $ my-cli <command>

  Commands
    command1        Description of command1
    command2        Description of command2
    config          Configure (reset) configurations
    clear           Clear configurations

  Examples
    $ my-cli command1
    $ my-cli clear
`)

const input = cli.input[0]

const app = new AppCli()
const commands = {
  command1: () => app.command1(),
  command2: () => app.command2(),
  config: () => app.config(),
  clear: () => app.clear()
}

commands[input] ? commands[input]() : cli.showHelp()
