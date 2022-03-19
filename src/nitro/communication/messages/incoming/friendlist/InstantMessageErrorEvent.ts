import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { InstantMessageErrorParser } from '../../parser/friendlist/InstantMessageErrorParser';

export class InstantMessageErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, InstantMessageErrorParser);
    }

    public getParser(): InstantMessageErrorParser
    {
        return this.parser as InstantMessageErrorParser;
    }
}
