import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { NotificationDialogMessageParser } from '../../parser/notifications/NotificationDialogMessageParser';

export class NotificationDialogMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NotificationDialogMessageParser);
    }

    public getParser(): NotificationDialogMessageParser
    {
        return this.parser as NotificationDialogMessageParser;
    }
}
