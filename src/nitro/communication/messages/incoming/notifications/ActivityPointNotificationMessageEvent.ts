import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ActivityPointNotificationParser } from '../../parser/notifications/ActivityPointNotificationParser';

export class ActivityPointNotificationMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ActivityPointNotificationParser);
    }

    public getParser(): ActivityPointNotificationParser
    {
        return this.parser as ActivityPointNotificationParser;
    }
}
