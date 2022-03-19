import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { MOTDNotificationParser } from '../../parser/notifications/MOTDNotificationParser';

export class MOTDNotificationEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MOTDNotificationParser);
    }

    public getParser(): MOTDNotificationParser
    {
        return this.parser as MOTDNotificationParser;
    }
}
