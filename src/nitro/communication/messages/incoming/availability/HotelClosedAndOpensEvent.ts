import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { HotelClosedAndOpensMessageParser } from '../../parser';

export class HotelClosedAndOpensEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HotelClosedAndOpensMessageParser);
    }

    public getParser(): HotelClosedAndOpensMessageParser
    {
        return this.parser as HotelClosedAndOpensMessageParser;
    }
}
