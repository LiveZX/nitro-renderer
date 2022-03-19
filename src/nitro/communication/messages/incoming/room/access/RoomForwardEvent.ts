import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomForwardParser } from '../../../parser/room/access/RoomForwardParser';

export class RoomForwardEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomForwardParser);
    }

    public getParser(): RoomForwardParser
    {
        return this.parser as RoomForwardParser;
    }
}
