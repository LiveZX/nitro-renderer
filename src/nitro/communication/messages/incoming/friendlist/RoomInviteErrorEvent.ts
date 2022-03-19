import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomInviteErrorParser } from '../../parser/friendlist/RoomInviteErrorParser';

export class RoomInviteErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomInviteErrorParser);
    }

    public getParser(): RoomInviteErrorParser
    {
        return this.parser as RoomInviteErrorParser;
    }
}
