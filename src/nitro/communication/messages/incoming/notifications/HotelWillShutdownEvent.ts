import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { HotelWillShutdownParser } from '../../parser/notifications/HotelWillShutdownParser';

export class HotelWillShutdownEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HotelWillShutdownParser);
    }

    public getParser(): HotelWillShutdownParser
    {
        return this.parser as HotelWillShutdownParser;
    }
}
