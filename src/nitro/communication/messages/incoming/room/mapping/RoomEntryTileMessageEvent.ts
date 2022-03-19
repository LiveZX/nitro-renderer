import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomEntryTileMessageParser } from '../../../parser/room/mapping/RoomEntryTileMessageParser';

export class RoomEntryTileMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomEntryTileMessageParser);
    }

    public getParser(): RoomEntryTileMessageParser
    {
        return this.parser as RoomEntryTileMessageParser;
    }
}
