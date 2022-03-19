import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomHeightMapUpdateParser } from '../../../parser/room/mapping/RoomHeightMapUpdateParser';

export class RoomHeightMapUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomHeightMapUpdateParser);
    }

    public getParser(): RoomHeightMapUpdateParser
    {
        return this.parser as RoomHeightMapUpdateParser;
    }
}
