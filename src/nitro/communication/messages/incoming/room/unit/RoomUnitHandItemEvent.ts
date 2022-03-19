import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomUnitHandItemParser } from '../../../parser/room/unit/RoomUnitHandItemParser';

export class RoomUnitHandItemEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitHandItemParser);
    }

    public getParser(): RoomUnitHandItemParser
    {
        return this.parser as RoomUnitHandItemParser;
    }
}
