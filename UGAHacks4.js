/*
 * Skill Name: Alexa Feels
 * Developed by: Jamison Johnson
 * Developer Email:
 * Developer Website:
 *
 * Description:
 */

/* Housekeeping */
'use strict';

const Alexa = require('alexa-sdk');     // Load the SDK

const APP_ID = undefined;      // Define the app ID

const SKILL_NAME = 'Alexa Feels';
const HELP_MESSAGE = 'How are you feeling today?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Have a nice day!';
const FALLBACK_MESSAGE = 'You screwed up';

const WELCOME_MESSAGE =  HELP_MESSAGE;

/* Set responses */

const WORST_RESPONSE_MESSAGE ='Life is hard sometimes, but it will get better. Just keep your head up and keep pushing forward.';
const BAD_RESPONSE_MESSAGE = 'If you can survive the battle, you can survive the war';
const GOOD_RESPONSE_MESSAGE = 'That is great.Keep up the good attitude.';
const NORMAL_RESPONSE_MESSAGE = 'Try to make every day better.';
const GREAT_RESPONSE_MESSAGE = 'That is really good. Continue to live your best life.';


/* Set up handlers */

const handlers = {
    'LaunchRequest': function() {
        this.emit('WelcomeIntent');
        this.emit('GetWorstResponseIntent');            // Replace with name of Intent
        this.emit('GetGoodResponseIntent');             // Replace with name of Intent
        this.emit('GetBadResponseIntent');              // Replace with name of Intent
        this.emit('GetNormalResponseIntent');
        this.emit('GetGreatResponseIntent');
    },
    'WelcomeIntent': function() {
        this.response.speak(WELCOME_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'GetWorstResponseIntent': function() {
        this.response.speak(WORST_RESPONSE_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'GetGoodResponseIntent': function() {
        this.response.speak(GOOD_RESPONSE_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'GetBadResponseIntent': function() {
        this.response.speak(BAD_RESPONSE_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'GetNormalResponseIntent': function() {
        this.response.speak(NORMAL_RESPONSE_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'GetGreatResponseIntent': function() {
        this.response.speak(GREAT_RESPONSE_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        this.response.speak(HELP_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'AMAZON.FallbackIntent': function () {
        this.response.speak(FALLBACK_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
