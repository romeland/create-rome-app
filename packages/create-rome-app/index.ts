#!/usr/bin/env node
import semver from 'semver'


const currentVersion = process.versions.node
const minimalRequiredVersion = '13.2.0'

if (semver.lt(currentVersion, minimalRequiredVersion)) {
    console.error(`The version of Node.js is too low. Please update to ${minimalRequiredVersion} or higher`)
    process.exit(1)
}


