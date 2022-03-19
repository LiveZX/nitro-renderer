import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomUnitRemoveParser } from '../../../parser/room/unit/RoomUnitRemoveParser';

export class RoomUnitRemoveEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitRemoveParser);
    }

    public getParser(): RoomUnitRemoveParser
    {
        return this.parser as RoomUnitRemoveParser;
    }
}
