import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { IgnoreResultParser } from '../../parser/user/IgnoreResultParser';

export class IgnoreResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IgnoreResultParser);
    }

    public getParser(): IgnoreResultParser
    {
        return this.parser as IgnoreResultParser;
    }
}
