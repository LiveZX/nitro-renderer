import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { UserCurrentBadgesParser } from '../../../parser/user/data/UserCurrentBadgesParser';

export class UserCurrentBadgesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserCurrentBadgesParser);
    }

    public getParser(): UserCurrentBadgesParser
    {
        return this.parser as UserCurrentBadgesParser;
    }
}
