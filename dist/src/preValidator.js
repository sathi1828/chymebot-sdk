"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var validatorBase_1 = require("./validatorBase");
/**

    @class PreValidator- This class is used to determine whether the user needs to provide input for the parameter.

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var PreValidator = /** @class */ (function (_super) {
    __extends(PreValidator, _super);
    /**
        @constructor calls the base class and instantiates the cache
    */
    function PreValidator(cache) {
        return _super.call(this, cache) || this;
    }
    /**
        @method required this method is called when the user needs to enter a value for a parameter.
        The bot can also suggest the list of values for the user to choose.

        @param prompt text used to ask the user for an input
        @param followUp is the array of suggested input/parameter values the bot can ask the user to choose .
    */
    PreValidator.prototype.required = function (prompt, followUp) {
        var obj = {
            'required': 'yes',
            'prompt': prompt
        };
        if (followUp && followUp.length)
            Object.assign(obj, { 'followUp': followUp });
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    /**
        @method requiredAs
        @param value text passed
    */
    PreValidator.prototype.requiredAs = function (value) {
        var obj = {
            required: 'yes',
            value: value
        };
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    /**
        @method skip this method is called when the parameter is optional
        @returns JSON with required property set to 'no'
    */
    PreValidator.prototype.skip = function () {
        var obj = {
            required: 'no'
        };
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    /**
        @method abort
        @param message abort message
    */
    PreValidator.prototype.abort = function (message) {
        var obj = {
            required: 'abort',
            message: message
        };
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    return PreValidator;
}(validatorBase_1.ValidatorBase));
exports.PreValidator = PreValidator;
