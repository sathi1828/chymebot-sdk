/**
    @class FollowUp - this class can be used to provide input suggestions for the user
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
export declare class FollowUp {
    /**
        @member title  name of the input
        @member payload value associated with the input
    */
    title: string;
    payload: string;
    /**
        @constructor - initialise the members
    */
    constructor(title: string, payload: string);
}
