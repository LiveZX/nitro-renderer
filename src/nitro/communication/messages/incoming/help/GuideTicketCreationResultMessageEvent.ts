import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideTicketCreationResultMessageParser } from '../../parser/help/GuideTicketCreationResultMessageParser';

export class GuideTicketCreationResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideTicketCreationResultMessageParser);
    }

    public getParser(): GuideTicketCreationResultMessageParser
    {
        return this.parser as GuideTicketCreationResultMessageParser;
    }
}
