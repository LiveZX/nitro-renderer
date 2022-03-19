import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { AcceptFriendResultParser } from '../../parser/friendlist/AcceptFriendResultParser';

export class AcceptFriendResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AcceptFriendResultParser);
    }

    public getParser(): AcceptFriendResultParser
    {
        return this.parser as AcceptFriendResultParser;
    }
}
