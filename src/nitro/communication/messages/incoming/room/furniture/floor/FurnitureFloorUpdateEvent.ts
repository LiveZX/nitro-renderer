import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FurnitureFloorUpdateParser } from '../../../../parser/room/furniture/floor/FurnitureFloorUpdateParser';

export class FurnitureFloorUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureFloorUpdateParser);
    }

    public getParser(): FurnitureFloorUpdateParser
    {
        return this.parser as FurnitureFloorUpdateParser;
    }
}
