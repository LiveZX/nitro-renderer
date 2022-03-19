import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideSessionDetachedMessageParser } from '../../parser/help/GuideSessionDetachedMessageParser';

export class GuideSessionDetachedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionDetachedMessageParser);
    }

    public getParser(): GuideSessionDetachedMessageParser
    {
        return this.parser as GuideSessionDetachedMessageParser;
    }
}
