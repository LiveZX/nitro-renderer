import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { AvailabilityTimeMessageParser } from '../../parser';

export class AvailabilityTimeMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AvailabilityTimeMessageParser);
    }

    public getParser(): AvailabilityTimeMessageParser
    {
        return this.parser as AvailabilityTimeMessageParser;
    }
}
