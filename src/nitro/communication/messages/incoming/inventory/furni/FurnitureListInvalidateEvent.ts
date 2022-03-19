import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FurnitureListInvalidateParser } from '../../../parser/inventory/furniture/FurnitureListInvalidateParser';

export class FurnitureListInvalidateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureListInvalidateParser);
    }

    public getParser(): FurnitureListInvalidateParser
    {
        return this.parser as FurnitureListInvalidateParser;
    }
}
