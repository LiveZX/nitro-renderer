import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { TargetedOfferParser } from '../../parser';

export class TargetedOfferEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TargetedOfferParser);
    }

    public getParser(): TargetedOfferParser
    {
        return this.parser as TargetedOfferParser;
    }
}
