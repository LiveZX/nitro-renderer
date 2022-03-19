import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideSessionPartnerIsTypingMessageParser } from '../../parser/help/GuideSessionPartnerIsTypingMessageParser';

export class GuideSessionPartnerIsTypingMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionPartnerIsTypingMessageParser);
    }

    public getParser(): GuideSessionPartnerIsTypingMessageParser
    {
        return this.parser as GuideSessionPartnerIsTypingMessageParser;
    }
}
