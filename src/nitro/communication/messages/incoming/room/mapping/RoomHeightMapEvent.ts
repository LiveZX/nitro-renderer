import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomHeightMapParser } from '../../../parser/room/mapping/RoomHeightMapParser';

export class RoomHeightMapEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomHeightMapParser);
    }

    public getParser(): RoomHeightMapParser
    {
        return this.parser as RoomHeightMapParser;
    }
}
