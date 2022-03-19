import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { BotErrorEventParser } from '../../parser/notifications/BotErrorEventParser';

export class BotErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BotErrorEventParser);
    }

    public getParser(): BotErrorEventParser
    {
        return this.parser as BotErrorEventParser;
    }
}
