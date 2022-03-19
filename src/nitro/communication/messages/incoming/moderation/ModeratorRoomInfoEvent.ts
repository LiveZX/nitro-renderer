import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ModeratorRoomInfoMessageParser } from '../../parser/moderation/ModeratorRoomInfoMessageParser';

export class ModeratorRoomInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ModeratorRoomInfoMessageParser);
    }

    public getParser(): ModeratorRoomInfoMessageParser
    {
        return this.parser as ModeratorRoomInfoMessageParser;
    }
}
