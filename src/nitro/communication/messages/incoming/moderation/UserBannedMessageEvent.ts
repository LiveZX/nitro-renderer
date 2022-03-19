import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { UserBannedMessageParser } from '../../parser/moderation';

export class UserBannedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserBannedMessageParser);
    }

    public getParser(): UserBannedMessageParser
    {
        return this.parser as UserBannedMessageParser;
    }
}
