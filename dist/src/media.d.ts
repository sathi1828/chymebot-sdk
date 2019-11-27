/**
    @class Media - this class is used to handle attachments sent by the user
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class Media {
    /**
        @member mediaId - attachment id
        @member fileName - attachment name
        @member mimeType - attachment type
    */
    mediaId: string;
    fileName: string;
    mimeType: string;
    /**
        @constructor - initialise all the attachment details
    */
    constructor();
}
export { Media };
