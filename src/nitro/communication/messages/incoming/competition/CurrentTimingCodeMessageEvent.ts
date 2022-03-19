import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CurrentTimingCodeMessageParser } from '../../parser';

export class CurrentTimingCodeMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CurrentTimingCodeMessageParser);
    }

    public getParser(): CurrentTimingCodeMessageParser
    {
        return this.parser as CurrentTimingCodeMessageParser;
    }
}
