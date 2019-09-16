"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preValidator_1 = require("./preValidator");
var validator_1 = require("./validator");
var command_1 = require("./command");
/**
    @class Chyme - this class is used for instanciating the sdk with suitable context(runner)
 */
var Chyme = /** @class */ (function () {
    /**
        @constructor initialises context/runner
    */
    function Chyme(runner) {
        switch (true) {
            case runner instanceof preValidator_1.PreValidator:
                this.preValidator = runner; //runner as PreValidator.this is an equiavalent syntax for casting
                this.cache = this.preValidator.cache;
                break;
            case runner instanceof validator_1.Validator:
                this.validator = runner;
                this.cache = this.validator.cache;
                break;
            case runner instanceof command_1.Command:
                this.command = runner;
                this.cache = this.command.cache;
                break;
            // case runner instanceof Event :                
            //     this.events =  runner
            // break;  
            // case runner instanceof OnBoarding :                 
            //     this.onBoarding = runner;  
            // break;         
        }
    }
    return Chyme;
}());
exports.Chyme = Chyme;
/*
    Note :
        let pv  = <PreValidator>runner ;
        let pv =  runner as PreValidator;
    both are valid syntax for type assertion or casting

    'as' syntax is the recommended one
*/ 
