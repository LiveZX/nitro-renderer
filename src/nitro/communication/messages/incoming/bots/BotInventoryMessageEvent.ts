import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { BotInventoryMessageParser } from '../../parser/bots/BotInventoryMessageParser';

export class BotInventoryMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BotInventoryMessageParser);
    }

    public getParser(): BotInventoryMessageParser
    {
        return this.parser as BotInventoryMessageParser;
    }
}
