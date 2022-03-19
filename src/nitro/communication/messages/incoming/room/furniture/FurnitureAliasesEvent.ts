import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FurnitureAliasesParser } from '../../../parser/room/furniture/FurnitureAliasesParser';

export class FurnitureAliasesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureAliasesParser);
    }

    public getParser(): FurnitureAliasesParser
    {
        return this.parser as FurnitureAliasesParser;
    }
}
