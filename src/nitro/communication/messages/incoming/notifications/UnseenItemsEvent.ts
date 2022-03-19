import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { UnseenItemsParser } from '../../parser/notifications/UnseenItemsParser';

export class UnseenItemsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UnseenItemsParser);
    }

    public getParser(): UnseenItemsParser
    {
        return this.parser as UnseenItemsParser;
    }
}
