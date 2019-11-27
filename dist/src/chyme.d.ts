import { ApiBase } from './apiBase';
import { PreValidator } from './preValidator';
import { Validator } from './validator';
import { Command } from './command';
import { Event } from './event';
import { OnBoarding } from './onBoarding';
import { Cache } from './cache';
/**
    @class Chyme - this class is used for instanciating the sdk with suitable context(runner)
 */
declare class Chyme {
    /**
        @member cache - redis cache client
    */
    cache?: Cache;
    preValidator?: PreValidator;
    validator?: Validator;
    onBoarding?: OnBoarding;
    command?: Command;
    event?: Event;
    /**
        @constructor initialises context/runner
    */
    constructor(runner: ApiBase);
}
export { Chyme };
