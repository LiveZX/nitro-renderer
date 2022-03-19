import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomUnitInfoParser } from '../../../parser/room/unit/RoomUnitInfoParser';

export class RoomUnitInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitInfoParser);
    }

    public getParser(): RoomUnitInfoParser
    {
        return this.parser as RoomUnitInfoParser;
    }
}
