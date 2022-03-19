import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomEntryInfoMessageParser } from '../../../parser/room/data/RoomEntryInfoMessageParser';

export class RoomEntryInfoMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomEntryInfoMessageParser);
    }

    public getParser(): RoomEntryInfoMessageParser
    {
        return this.parser as RoomEntryInfoMessageParser;
    }
}
