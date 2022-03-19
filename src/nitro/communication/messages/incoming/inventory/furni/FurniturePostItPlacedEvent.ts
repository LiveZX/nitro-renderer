import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FurniturePostItPlacedParser } from '../../../parser/inventory/furniture/FurniturePostItPlacedParser';

export class FurniturePostItPlacedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurniturePostItPlacedParser);
    }

    public getParser(): FurniturePostItPlacedParser
    {
        return this.parser as FurniturePostItPlacedParser;
    }
}
