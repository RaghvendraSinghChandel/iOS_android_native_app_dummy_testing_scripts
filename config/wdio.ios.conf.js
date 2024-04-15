const path = require('path')
const {config} = require("./wdio.shared.conf")

// ===========================
// Runner Configuration
// ===========================
//
config.port = 4723;

// ===========================
// Spec
// ===========================
//
config.specs = [
    '../test/specs/iOSSpec/**.spec.js'
],

// ===========================
// Capabilities
// ===========================
//
config.capabilities = [{
    // capabilities for local Appium web tests on iOS
    platformName: 'iOS',
    // browserName: 'Safari',
    'appium:deviceName': 'iPhone 12 Pro',
    'appium:platformVersion': '17.0',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(),'App/iOS/MVCTodo.app')
}],
config.services= ['appium'],

exports.config = config

