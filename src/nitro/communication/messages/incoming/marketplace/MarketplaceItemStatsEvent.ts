import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { MarketplaceItemStatsParser } from '../../parser/marketplace/MarketplaceItemStatsParser';

export class MarketplaceItemStatsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceItemStatsParser);
    }

    public getParser(): MarketplaceItemStatsParser
    {
        return this.parser as MarketplaceItemStatsParser;
    }
}
