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
var parameter_1 = require("./parameter");
/**
    @class MediaParameter - this class is used to handle attachment parameters
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var MediaParameter = /** @class */ (function (_super) {
    __extends(MediaParameter, _super);
    /**
        @constructor -
    */
    function MediaParameter() {
        var _this = _super.call(this, '', '') || this;
        _this.media = [];
        return _this;
    }
    /**
        @method isMedia - this method is used to check whether the message is an attachment or text.
        @returns true - if message is an attachment else false.
    */
    MediaParameter.prototype.isMedia = function () {
        return true;
    };
    return MediaParameter;
}(parameter_1.Parameter));
exports.MediaParameter = MediaParameter;
