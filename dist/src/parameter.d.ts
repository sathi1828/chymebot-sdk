/**
    @class Parameter - this class represents a parameter as name-value pair
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
export declare class Parameter {
    /**
        @member name - name of the parameter
        @member value - value of the parameter
    */
    name: string;
    value: string;
    /**
        @constructor initialise the parmater
    */
    constructor(name: string, value: string);
    /**
        @method isMedia - checks whether the message is an attachment or text;
    */
    isMedia(): boolean;
}
