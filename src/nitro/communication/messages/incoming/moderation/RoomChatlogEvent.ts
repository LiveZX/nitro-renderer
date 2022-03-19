import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomChatlogMessageParser } from '../../parser/moderation/RoomChatlogMessageParser';

export class RoomChatlogEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomChatlogMessageParser);
    }

    public getParser(): RoomChatlogMessageParser
    {
        return this.parser as RoomChatlogMessageParser;
    }
}
