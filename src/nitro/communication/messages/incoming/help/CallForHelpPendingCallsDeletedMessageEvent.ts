import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CallForHelpPendingCallsDeletedMessageParser } from '../../parser/help/CallForHelpPendingCallsDeletedMessageParser';

export class CallForHelpPendingCallsDeletedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CallForHelpPendingCallsDeletedMessageParser);
    }

    public getParser(): CallForHelpPendingCallsDeletedMessageParser
    {
        return this.parser as CallForHelpPendingCallsDeletedMessageParser;
    }
}
