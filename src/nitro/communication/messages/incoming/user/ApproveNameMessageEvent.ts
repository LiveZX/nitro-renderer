import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ApproveNameResultParser } from '../../parser';

export class ApproveNameMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ApproveNameResultParser);
    }

    public getParser(): ApproveNameResultParser
    {
        return this.parser as ApproveNameResultParser;
    }
}
