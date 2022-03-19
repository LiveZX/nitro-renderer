import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomMutedParser } from '../../parser/roomevents/RoomMutedParser';

export class RoomMutedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomMutedParser);
    }

    public getParser(): RoomMutedParser
    {
        return this.parser as RoomMutedParser;
    }
}
