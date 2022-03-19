import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FurniturePostItStickyPoleOpenParser } from '../../../parser/room/furniture/FurniturePostItStickyPoleOpenParser';

export class FurniturePostItStickyPoleOpenEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurniturePostItStickyPoleOpenParser);
    }

    public getParser(): FurniturePostItStickyPoleOpenParser
    {
        return this.parser as FurniturePostItStickyPoleOpenParser;
    }
}
