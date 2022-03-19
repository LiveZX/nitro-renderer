import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CheckUserNameResultMessageParser } from '../../parser/avatar/CheckUserNameResultMessageParser';

export class CheckUserNameResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CheckUserNameResultMessageParser);
    }

    public getParser(): CheckUserNameResultMessageParser
    {
        return this.parser as CheckUserNameResultMessageParser;
    }
}
