import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FurnitureDataParser } from '../../../parser/room/furniture/FurnitureDataParser';

export class FurnitureDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureDataParser);
    }

    public getParser(): FurnitureDataParser
    {
        return this.parser as FurnitureDataParser;
    }
}
