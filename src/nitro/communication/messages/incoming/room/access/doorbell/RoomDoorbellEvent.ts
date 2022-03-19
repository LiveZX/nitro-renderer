import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomDoorbellParser } from '../../../../parser/room/access/doorbell/RoomDoorbellParser';

export class RoomDoorbellEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomDoorbellParser);
    }

    public getParser(): RoomDoorbellParser
    {
        return this.parser as RoomDoorbellParser;
    }

    public get userName(): string
    {
        return this.getParser().userName;
    }
}
