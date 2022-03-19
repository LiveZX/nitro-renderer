import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FurnitureListAddOrUpdateParser } from '../../../parser/inventory/furniture/FurnitureListAddOrUpdateParser';

export class FurnitureListAddOrUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureListAddOrUpdateParser);
    }

    public getParser(): FurnitureListAddOrUpdateParser
    {
        return this.parser as FurnitureListAddOrUpdateParser;
    }
}
