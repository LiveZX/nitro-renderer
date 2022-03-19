import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { IssueInfoMessageParser } from '../../parser/moderation/IssueInfoMessageParser';

export class IssueInfoMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IssueInfoMessageParser);
    }

    public getParser(): IssueInfoMessageParser
    {
        return this.parser as IssueInfoMessageParser;
    }
}
