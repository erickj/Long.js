/*
 Copyright 2013 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * Long.js Build Script (c) 2013 Erick Johnson <ejohnson82@gmail.com>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/Long.js for details
 */

var Preprocessor = require("preprocessor"),
    fs = require("fs"),
    pkg = require(__dirname+"/package.json");

var pp = new Preprocessor(fs.readFileSync(__dirname+"/src/Long.js"), __dirname+"/src");
fs.writeFileSync(__dirname+"/Long.js", pp.process({
    "GOOG": false
}));

var pp = new Preprocessor(fs.readFileSync(__dirname+"/src/Long.js"), __dirname+"/src");
fs.writeFileSync(__dirname+"/Long.goog.js", pp.process({
    "GOOG": true
}));
