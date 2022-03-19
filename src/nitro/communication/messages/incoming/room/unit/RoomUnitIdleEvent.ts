import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomUnitIdleParser } from '../../../parser/room/unit/RoomUnitIdleParser';

export class RoomUnitIdleEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitIdleParser);
    }

    public getParser(): RoomUnitIdleParser
    {
        return this.parser as RoomUnitIdleParser;
    }
}
