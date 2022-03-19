import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { IssueDeletedMessageParser } from '../../parser/moderation/IssueDeletedMessageParser';

export class IssueDeletedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IssueDeletedMessageParser);
    }

    public getParser(): IssueDeletedMessageParser
    {
        return this.parser as IssueDeletedMessageParser;
    }
}
