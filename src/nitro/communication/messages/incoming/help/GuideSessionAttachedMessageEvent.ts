import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideSessionAttachedMessageParser } from '../../parser/help/GuideSessionAttachedMessageParser';

export class GuideSessionAttachedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionAttachedMessageParser);
    }

    public getParser(): GuideSessionAttachedMessageParser
    {
        return this.parser as GuideSessionAttachedMessageParser;
    }
}
