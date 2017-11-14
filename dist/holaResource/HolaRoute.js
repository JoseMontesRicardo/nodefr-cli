'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _HolaController=require('./controllers/HolaController');var _HolaController2=_interopRequireDefault(_HolaController);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var HolaRoute=function(_Bases$BaseRoute){(0,_inherits3.default)(HolaRoute,_Bases$BaseRoute);/**
    * construct for HolaRoute
    * 
    * @param {json} router instance of ExpressJS router 
    */function HolaRoute(app){(0,_classCallCheck3.default)(this,HolaRoute);return(0,_possibleConstructorReturn3.default)(this,(HolaRoute.__proto__||(0,_getPrototypeOf2.default)(HolaRoute)).call(this,app));}(0,_createClass3.default)(HolaRoute,[{key:'resourceInit',value:function resourceInit(){this.resource(this.nameRoute,_HolaController2.default);}}]);return HolaRoute;}(Bases.BaseRoute);exports.default=HolaRoute;