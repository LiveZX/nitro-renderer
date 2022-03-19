import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomDimmerPresetsMessageParser } from '../../../parser/room/furniture/RoomDimmerPresetsMessageParser';

export class RoomDimmerPresetsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomDimmerPresetsMessageParser);
    }

    public getParser(): RoomDimmerPresetsMessageParser
    {
        return this.parser as RoomDimmerPresetsMessageParser;
    }
}
