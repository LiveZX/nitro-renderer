import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CatalogPageMessageParser } from '../../parser/catalog/CatalogPageMessageParser';

export class CatalogPageMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CatalogPageMessageParser);
    }

    public getParser(): CatalogPageMessageParser
    {
        return this.parser as CatalogPageMessageParser;
    }
}
