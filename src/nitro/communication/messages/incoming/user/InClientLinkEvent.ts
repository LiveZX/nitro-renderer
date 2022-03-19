import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { InClientLinkParser } from '../../parser/user/InClientLinkParser';

export class InClientLinkEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, InClientLinkParser);
    }

    public getParser(): InClientLinkParser
    {
        return this.parser as InClientLinkParser;
    }
}
