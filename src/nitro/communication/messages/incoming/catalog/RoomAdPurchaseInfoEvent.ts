import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomAdPurchaseInfoEventParser } from '../../parser';

export class RoomAdPurchaseInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomAdPurchaseInfoEventParser);
    }

    public getParser(): RoomAdPurchaseInfoEventParser
    {
        return this.parser as RoomAdPurchaseInfoEventParser;
    }
}
