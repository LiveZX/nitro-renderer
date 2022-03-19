import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { AvailabilityStatusMessageParser } from '../../parser/availability/AvailabilityStatusMessageParser';

export class AvailabilityStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AvailabilityStatusMessageParser);
    }

    public getParser(): AvailabilityStatusMessageParser
    {
        return this.parser as AvailabilityStatusMessageParser;
    }
}
