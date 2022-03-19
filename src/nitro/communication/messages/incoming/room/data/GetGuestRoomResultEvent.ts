import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomInfoParser } from '../../../parser/room/data/RoomInfoParser';

export class GetGuestRoomResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomInfoParser);
    }

    public getParser(): RoomInfoParser
    {
        return this.parser as RoomInfoParser;
    }
}
