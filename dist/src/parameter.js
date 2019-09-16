"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
    @class Parameter - this class represents a parameter as name-value pair
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var Parameter = /** @class */ (function () {
    /**
        @constructor initialise the parmater
    */
    function Parameter(name, value) {
        this.name = name;
        this.value = value;
    }
    /**
        @method isMedia - checks whether the message is an attachment or text;
    */
    Parameter.prototype.isMedia = function () {
        return false;
    };
    return Parameter;
}());
exports.Parameter = Parameter;
