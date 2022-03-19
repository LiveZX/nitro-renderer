import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideTicketResolutionMessageParser } from '../../parser/help/GuideTicketResolutionMessageParser';

export class GuideTicketResolutionMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideTicketResolutionMessageParser);
    }

    public getParser(): GuideTicketResolutionMessageParser
    {
        return this.parser as GuideTicketResolutionMessageParser;
    }
}
