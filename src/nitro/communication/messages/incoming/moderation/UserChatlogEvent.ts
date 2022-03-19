import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { UserChatlogMessageParser } from '../../parser/moderation/UserChatlogMessageParser';

export class UserChatlogEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserChatlogMessageParser);
    }

    public getParser(): UserChatlogMessageParser
    {
        return this.parser as UserChatlogMessageParser;
    }
}
