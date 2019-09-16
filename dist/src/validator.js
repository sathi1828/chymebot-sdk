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
var validatorBase_1 = require("./validatorBase");
/**

    @class Validator- This class is used to validate the input for the parameter and returns validated result back to user
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var Validator = /** @class */ (function (_super) {
    __extends(Validator, _super);
    /**
        @constructor calls the base class and instantiates the cache
    */
    function Validator(cache) {
        return _super.call(this, cache) || this;
    }
    /**
        @method accept this method is used to indicate that the input is acceptable.
    */
    Validator.prototype.accept = function () {
    };
    /**
        @method acceptAs this method is used to indicate that the input is acceptable and
        if the method is called with a <value> then it will be overriden with a equivalent value for subsequent
        use in the business process

        @param value this value will be overriden with a equivalent value for subsequent use in the business process.
        i.e Alternate/equivalent value for the users input
    */
    Validator.prototype.acceptAs = function (value) {
    };
    /**
        @method acceptMedia
        @param flag
        @param promptText
        @param followUp
    */
    Validator.prototype.acceptMedia = function (flag, promptText, followUp) {
    };
    /**
        @method reject this method is used to indicate that the input is not acceptable.
        The method returns a rejection  message to the user .
        It can also suggest the acceptable inputs to the user

        @param promptText This contains rejection message.
        @param followUp This contains  an array of suggestions that a user can choose from
    */
    Validator.prototype.reject = function (promptText, followUp) {
    };
    /**
        @method abort This method is used to abort the validation process.
        Returns cancellation message
        @param text This contains abort messsage
    */
    Validator.prototype.abort = function (text) {
    };
    return Validator;
}(validatorBase_1.ValidatorBase));
exports.Validator = Validator;
