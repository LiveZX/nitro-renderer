import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { UserWardrobePageParser } from '../../../parser/user/wardrobe/UserWardrobePageParser';

export class UserWardrobePageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserWardrobePageParser);
    }

    public getParser(): UserWardrobePageParser
    {
        return this.parser as UserWardrobePageParser;
    }
}
