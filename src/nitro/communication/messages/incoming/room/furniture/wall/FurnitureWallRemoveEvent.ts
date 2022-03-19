import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FurnitureWallRemoveParser } from '../../../../parser/room/furniture/wall/FurnitureWallRemoveParser';

export class FurnitureWallRemoveEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureWallRemoveParser);
    }

    public getParser(): FurnitureWallRemoveParser
    {
        return this.parser as FurnitureWallRemoveParser;
    }
}
