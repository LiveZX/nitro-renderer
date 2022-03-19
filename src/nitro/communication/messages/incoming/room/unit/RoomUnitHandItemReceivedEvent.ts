import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomUnitHandItemReceivedParser } from '../../../parser/room/unit/RoomUnitHandItemReceivedParser';

export class RoomUnitHandItemReceivedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitHandItemReceivedParser);
    }

    public getParser(): RoomUnitHandItemReceivedParser
    {
        return this.parser as RoomUnitHandItemReceivedParser;
    }
}
