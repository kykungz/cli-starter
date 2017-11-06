const Conf = require('conf')
const inquirer = require('inquirer')

const constants = require('./constants')
const prompts = require('./prompts')

const config = new Conf()

class AppCli {
  constructor () {
    if (!config.get(constants.USERNAME) || !config.get(constants.PASSWORD)) {
      this.config()
    }
  }

  command1 () {}

  command2 () {}

  config () {
    inquirer.prompt(prompts.config).then(answers => {
      config.set(constants.USERNAME, answers[constants.USERNAME])
      config.set(constants.PASSWORD, answers[constants.PASSWORD])
    })
  }

  clear () {
    config.delete(constants.USERNAME)
    config.delete(constants.PASSWORD)
  }
}
module.exports = AppCli
