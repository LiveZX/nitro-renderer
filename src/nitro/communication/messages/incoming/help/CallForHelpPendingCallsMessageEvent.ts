import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CallForHelpPendingCallsMessageParser } from '../../parser/help/CallForHelpPendingCallsMessageParser';

export class CallForHelpPendingCallsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CallForHelpPendingCallsMessageParser);
    }

    public getParser(): CallForHelpPendingCallsMessageParser
    {
        return this.parser as CallForHelpPendingCallsMessageParser;
    }
}
