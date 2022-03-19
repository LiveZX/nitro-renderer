import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { MarketplaceBuyOfferResultParser } from '../../parser/marketplace/MarketplaceBuyOfferResultParser';


export class MarketplaceBuyOfferResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceBuyOfferResultParser);
    }

    public getParser(): MarketplaceBuyOfferResultParser
    {
        return this.parser as MarketplaceBuyOfferResultParser;
    }
}
