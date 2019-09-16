"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var apiBase_1 = require("./apiBase");
/**
    @class ValidatorBase- This class acts as a base class for validator and prevalidator.

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var ValidatorBase = /** @class */ (function (_super) {
    __extends(ValidatorBase, _super);
    /**
        @constructor initialise redis cache
    */
    function ValidatorBase(cache) {
        return _super.call(this, cache) || this;
    }
    /**
        @method getValidatedParams this method returns validated parameter
        @param param parameter
        @returns returns validated parameter
    */
    ValidatorBase.prototype.getValidatedParams = function (param) {
        return param;
    };
    return ValidatorBase;
}(apiBase_1.ApiBase));
exports.ValidatorBase = ValidatorBase;
