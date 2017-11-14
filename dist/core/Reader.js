'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _promise=require('babel-runtime/core-js/promise');var _promise2=_interopRequireDefault(_promise);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);var _lineByLine=require('line-by-line');var _lineByLine2=_interopRequireDefault(_lineByLine);var _CliMessage=require('../utils/CliMessage');var _CliMessage2=_interopRequireDefault(_CliMessage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Reader=function(){function Reader(){(0,_classCallCheck3.default)(this,Reader);}(0,_createClass3.default)(Reader,null,[{key:'readTemplateByLines',value:function readTemplateByLines(path,templateSelector){return new _promise2.default(function(resolve,reject){try{var linesReader=new _lineByLine2.default(path);var file='';var newLine='';linesReader.on('error',function(error){return _CliMessage2.default.errorMsg(error);});linesReader.on('line',function(line){newLine=Reader.returnTemplateLine(templateSelector,line);if(newLine)file+=newLine;});linesReader.on('end',function(){return resolve(file);// All lines are read, file is closed now.
});}catch(error){return _CliMessage2.default.errorMsg(error);}});}},{key:'returnTemplateLine',value:function returnTemplateLine(criteriaSplit,line){var newLine=line.split(criteriaSplit);if(newLine.length>1){return newLine[newLine.length-1]+'\n';}else{return null;}}}]);return Reader;}();exports.default=Reader;