import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { PollErrorParser } from '../../parser/poll/PollErrorParser';

export class PollErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PollErrorParser);
    }

    public getParser(): PollErrorParser
    {
        return this.parser as PollErrorParser;
    }
}
