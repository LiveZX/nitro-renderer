import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideSessionStartedMessageParser } from '../../parser/help/GuideSessionStartedMessageParser';

export class GuideSessionStartedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionStartedMessageParser);
    }

    public getParser(): GuideSessionStartedMessageParser
    {
        return this.parser as GuideSessionStartedMessageParser;
    }
}
