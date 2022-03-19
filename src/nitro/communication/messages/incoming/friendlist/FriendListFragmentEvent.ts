import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FriendListFragmentParser } from '../../parser/friendlist/FriendListFragmentMessageParser';

export class FriendListFragmentEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FriendListFragmentParser);
    }

    public getParser(): FriendListFragmentParser
    {
        return this.parser as FriendListFragmentParser;
    }
}
