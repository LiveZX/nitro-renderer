import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FindFriendsProcessResultParser } from '../../parser/friendlist/FindFriendsProcessResultParser';

export class FindFriendsProcessResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FindFriendsProcessResultParser);
    }

    public getParser(): FindFriendsProcessResultParser
    {
        return this.parser as FindFriendsProcessResultParser;
    }
}
