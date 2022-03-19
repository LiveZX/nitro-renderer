import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomVisitsMessageParser } from '../../parser/moderation/RoomVisitsMessageParser';

export class RoomVisitsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomVisitsMessageParser);
    }

    public getParser(): RoomVisitsMessageParser
    {
        return this.parser as RoomVisitsMessageParser;
    }
}
