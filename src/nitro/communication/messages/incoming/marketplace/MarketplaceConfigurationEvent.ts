import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { MarketplaceConfigurationMessageParser } from '../../parser/marketplace/MarketplaceConfigurationMessageParser';

export class MarketplaceConfigurationEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceConfigurationMessageParser);
    }

    public getParser(): MarketplaceConfigurationMessageParser
    {
        return this.parser as MarketplaceConfigurationMessageParser;
    }
}
