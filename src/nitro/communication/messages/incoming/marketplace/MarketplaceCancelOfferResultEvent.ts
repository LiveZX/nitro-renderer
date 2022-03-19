import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { MarketplaceCancelOfferResultParser } from '../../parser/marketplace/MarketplaceCancelOfferResultParser';

export class MarketplaceCancelOfferResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceCancelOfferResultParser);
    }

    public getParser(): MarketplaceCancelOfferResultParser
    {
        return this.parser as MarketplaceCancelOfferResultParser;
    }
}
