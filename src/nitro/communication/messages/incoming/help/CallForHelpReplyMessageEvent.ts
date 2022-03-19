import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CallForHelpReplyMessageParser } from '../../parser/help/CallForHelpReplyMessageParser';

export class CallForHelpReplyMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CallForHelpReplyMessageParser);
    }

    public getParser(): CallForHelpReplyMessageParser
    {
        return this.parser as CallForHelpReplyMessageParser;
    }
}
