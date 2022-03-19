import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomUnitParser } from '../../../parser/room/unit/RoomUnitParser';

export class RoomUnitEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitParser);
    }

    public getParser(): RoomUnitParser
    {
        return this.parser as RoomUnitParser;
    }
}
