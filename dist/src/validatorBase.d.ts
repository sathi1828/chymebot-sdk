import { ApiBase } from './apiBase';
import { Parameter } from './parameter';
import { Cache } from './cache';
/**
    @class ValidatorBase- This class acts as a base class for validator and prevalidator.

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class ValidatorBase extends ApiBase {
    /**
        @member param it holds the name and value of a parameter
        @member validatedParams it holds all the parameters
    */
    param?: Parameter;
    validatedParams?: Array<Parameter>;
    /**
        @constructor initialise redis cache
    */
    constructor(cache: Cache);
    /**
        @method getValidatedParams this method returns validated parameter
        @param param parameter
        @returns returns validated parameter
    */
    getValidatedParams(param: string): string;
}
export { ValidatorBase };
