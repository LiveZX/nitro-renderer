import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { BadgeReceivedParser } from '../../../parser/inventory/badges/BadgeReceivedParser';

export class BadgeReceivedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BadgeReceivedParser);
    }

    public getParser(): BadgeReceivedParser
    {
        return this.parser as BadgeReceivedParser;
    }
}
