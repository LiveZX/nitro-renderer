import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideSessionEndedMessageParser } from '../../parser/help/GuideSessionEndedMessageParser';

export class GuideSessionEndedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionEndedMessageParser);
    }

    public getParser(): GuideSessionEndedMessageParser
    {
        return this.parser as GuideSessionEndedMessageParser;
    }
}
