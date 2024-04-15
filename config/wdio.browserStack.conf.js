const {config} = require("./wdio.shared.conf")
require('dotenv').config()
// ===========================
// BrowserStack credentials
// ===========================
//
config.user = process.env.BROWSERSTACK_USER,
config.key = process.env.BROWSERSTACK_KEY,
// config.user = process.env.BROWSERSTACK_USER,
// config.key = process.env.BROWSERSTACK_KEY,

// ===========================
// Spec
// ===========================
//
config.specs = [
    '../test/specs/androidSpec/**.spec.js'
],

// ===========================
// Capabilities
// ===========================
//
config.capabilities= [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'Android',
    // browserName: 'Chrome',
    'appium:deviceName': 'Google Pixel 3',
    'appium:platformVersion': '10.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://076c741e487d354a216e410ef987e202ab780f40',
    'appium:autoGrantPermission': true
}],

config.services = [
    ['browserstack', {
        testObservability: true,
    },
    config.browserstackLocal= true,
    config.auth = {
        user: process.env.BROWSERSTACK_USER,
        key: process.env.BROWSERSTACK_KEY,
    }
 ]
],
exports.config = config
