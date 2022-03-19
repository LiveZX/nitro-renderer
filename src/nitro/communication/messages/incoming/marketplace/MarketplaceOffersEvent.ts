import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { MarketplaceOffersParser } from '../../parser/marketplace/MarketplaceOffersParser';

export class MarketPlaceOffersEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceOffersParser);
    }

    public getParser(): MarketplaceOffersParser
    {
        return this.parser as MarketplaceOffersParser;
    }
}
