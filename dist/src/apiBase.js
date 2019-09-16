"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
    @class ApiBase - This class is root class for the sdk and initialises all the necessary params
*/
var ApiBase = /** @class */ (function () {
    /**
        @constructor initialise all the necessary params and redis cache
    */
    function ApiBase(cache) {
        this.result = '{}';
        this.botName = '';
        this.userName = '';
        this.domain = '';
        this.messenger = '';
        this.conversation = [];
        this.conversationId = '';
        this.context = [];
        this.cache = cache;
        this.cache.chymeUser = this.userName;
        this.cache.conversationId = this.conversationId;
        this.cache.messengerType = this.messenger;
        this.cache.domain = this.domain;
    }
    /**
        @method setResult - this method is called to set the result into a json
        @param json - json which holds the final result.
        @returns JSON
    */
    ApiBase.prototype.setResult = function (json) {
        this.result = json;
    };
    return ApiBase;
}());
exports.ApiBase = ApiBase;
