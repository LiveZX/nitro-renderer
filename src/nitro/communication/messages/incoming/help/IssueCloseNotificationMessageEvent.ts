import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { IssueCloseNotificationMessageParser } from '../../parser/help/IssueCloseNotificationMessageParser';

export class IssueCloseNotificationMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IssueCloseNotificationMessageParser);
    }

    public getParser(): IssueCloseNotificationMessageParser
    {
        return this.parser as IssueCloseNotificationMessageParser;
    }
}
