import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { MarketplaceMakeOfferResultParser } from '../../parser/marketplace/MarketplaceItemPostedParser';


export class MarketplaceMakeOfferResult extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceMakeOfferResultParser);
    }

    public getParser(): MarketplaceMakeOfferResultParser
    {
        return this.parser as MarketplaceMakeOfferResultParser;
    }
}
