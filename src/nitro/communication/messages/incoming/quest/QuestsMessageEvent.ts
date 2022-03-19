import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { QuestsMessageParser } from '../../parser/quest/QuestsMessageParser';

export class QuestsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, QuestsMessageParser);
    }

    public getParser(): QuestsMessageParser
    {
        return this.parser as QuestsMessageParser;
    }
}
