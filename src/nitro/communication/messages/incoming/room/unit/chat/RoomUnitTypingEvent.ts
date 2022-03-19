import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomUnitTypingParser } from '../../../../parser/room/unit/chat/RoomUnitTypingParser';

export class RoomUnitTypingEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitTypingParser);
    }

    public getParser(): RoomUnitTypingParser
    {
        return this.parser as RoomUnitTypingParser;
    }
}
