import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { HotelMergeNameChangeParser } from '../../parser/help/HotelMergeNameChangeParser';

export class HotelMergeNameChangeEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HotelMergeNameChangeParser);
    }

    public getParser(): HotelMergeNameChangeParser
    {
        return this.parser as HotelMergeNameChangeParser;
    }
}
