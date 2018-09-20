#!/usr/bin/env node
var fs = require('fs-extra');
var build_dir = './dist';
fs.removeSync(build_dir);
console.log("clean build dir success");