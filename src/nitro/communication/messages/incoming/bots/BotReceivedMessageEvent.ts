import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { BotReceivedMessageParser } from '../../parser/bots/BotReceivedMessageParser';

export class BotReceivedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BotReceivedMessageParser);
    }

    public getParser(): BotReceivedMessageParser
    {
        return this.parser as BotReceivedMessageParser;
    }
}
