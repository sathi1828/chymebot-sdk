/**
    @class Context-

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class Context {
    /**
        @member key -
        @member value -
    */
    key: string;
    value: string;
    /**
        @constructor initialise the context
    */
    constructor(key: string, value: string);
}
export { Context };
