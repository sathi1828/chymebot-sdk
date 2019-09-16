import { Media } from './media';
import { Parameter } from './parameter';
/**
    @class MediaParameter - this class is used to handle attachment parameters
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
export declare class MediaParameter extends Parameter {
    /**
        @member media - holds multiple attachments sent by the user
    */
    media: Array<Media>;
    /**
        @constructor -
    */
    constructor();
    /**
        @method isMedia - this method is used to check whether the message is an attachment or text.
        @returns true - if message is an attachment else false.
    */
    isMedia(): boolean;
}
