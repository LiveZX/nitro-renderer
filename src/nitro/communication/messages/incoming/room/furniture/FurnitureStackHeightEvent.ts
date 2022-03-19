import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FurnitureStackHeightParser } from '../../../parser/room/furniture/FurnitureStackHeightParser';

export class FurnitureStackHeightEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureStackHeightParser);
    }

    public getParser(): FurnitureStackHeightParser
    {
        return this.parser as FurnitureStackHeightParser;
    }
}
