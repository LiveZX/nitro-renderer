import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomRightsClearParser } from '../../../../parser/room/access/rights/RoomRightsClearParser';

export class RoomRightsClearEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomRightsClearParser);
    }

    public getParser(): RoomRightsClearParser
    {
        return this.parser as RoomRightsClearParser;
    }
}
