import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { PollOfferParser } from '../../parser/poll/PollOfferParser';

export class PollOfferEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PollOfferParser);
    }

    public getParser(): PollOfferParser
    {
        return this.parser as PollOfferParser;
    }
}
