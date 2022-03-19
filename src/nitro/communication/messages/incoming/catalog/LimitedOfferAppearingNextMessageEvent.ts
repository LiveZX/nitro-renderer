import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { LimitedOfferAppearingNextMessageParser } from '../../parser';

export class LimitedOfferAppearingNextMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, LimitedOfferAppearingNextMessageParser);
    }

    public getParser(): LimitedOfferAppearingNextMessageParser
    {
        return this.parser as LimitedOfferAppearingNextMessageParser;
    }
}
