import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomPaintParser } from '../../../parser/room/mapping/RoomPaintParser';

export class RoomPaintEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomPaintParser);
    }

    public getParser(): RoomPaintParser
    {
        return this.parser as RoomPaintParser;
    }
}
