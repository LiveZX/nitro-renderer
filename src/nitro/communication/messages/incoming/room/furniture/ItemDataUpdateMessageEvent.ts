import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ItemDataUpdateMessageParser } from '../../../parser/room/furniture/ItemDataUpdateMessageParser';


export class ItemDataUpdateMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ItemDataUpdateMessageParser);
    }

    public getParser(): ItemDataUpdateMessageParser
    {
        return this.parser as ItemDataUpdateMessageParser;
    }
}
