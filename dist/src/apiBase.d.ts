import { Cache } from './cache';
import { Message } from './message';
import { Context } from './context';
/**
    @class ApiBase - This class is root class for the sdk and initialises all the necessary params
*/
export declare class ApiBase {
    /**
        @member cache -  cache instance
        @member result - final result to be sent back to the user
        @member botName - name of the bot used for conversation
        @member userName - name of the user having the conversation
        @member domain - company name
        @member conversation - messages
        @member conversationId - unique ID associated with the message
        @member context -
        @member messenger - messenger used for chatting
    */
    cache: Cache;
    result: string;
    botName: string;
    userName: string;
    domain: string;
    conversation: Array<Message>;
    conversationId: string;
    context: Array<Context>;
    messenger: string;
    /**
        @constructor initialise all the necessary params and redis cache
    */
    constructor(cache: Cache);
    /**
        @method setResult - this method is called to set the result into a json
        @param json - json which holds the final result.
        @returns JSON
    */
    setResult(json: string): void;
}
