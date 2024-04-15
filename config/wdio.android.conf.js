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
    'appium:deviceName': 'nightwatch-android-11',
    'appium:platformVersion': '11',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(),'App/Android/ApiDemos-debug.apk')
}],
config.services= ['appium']
exports.config = config
