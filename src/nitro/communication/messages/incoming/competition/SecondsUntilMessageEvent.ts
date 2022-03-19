import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { SecondsUntilMessageParser } from '../../parser';

export class SecondsUntilMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, SecondsUntilMessageParser);
    }

    public getParser(): SecondsUntilMessageParser
    {
        return this.parser as SecondsUntilMessageParser;
    }
}
