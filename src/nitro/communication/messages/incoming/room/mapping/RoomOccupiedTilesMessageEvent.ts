import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomOccupiedTilesMessageParser } from '../../../parser/room/mapping/RoomOccupiedTilesMessageParser';

export class RoomOccupiedTilesMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomOccupiedTilesMessageParser);
    }

    public getParser(): RoomOccupiedTilesMessageParser
    {
        return this.parser as RoomOccupiedTilesMessageParser;
    }
}
