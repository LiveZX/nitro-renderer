import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomRightsOwnerParser } from '../../../../parser/room/access/rights/RoomRightsOwnerParser';

export class RoomRightsOwnerEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomRightsOwnerParser);
    }

    public getParser(): RoomRightsOwnerParser
    {
        return this.parser as RoomRightsOwnerParser;
    }
}
