import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomUnitNumberParser } from '../../../parser/room/unit/RoomUnitNumberParser';

export class RoomUnitNumberEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitNumberParser);
    }

    public getParser(): RoomUnitNumberParser
    {
        return this.parser as RoomUnitNumberParser;
    }
}
