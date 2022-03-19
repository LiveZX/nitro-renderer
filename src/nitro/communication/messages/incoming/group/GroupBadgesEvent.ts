import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GroupBadgesParser } from '../../parser/group/GroupBadgesParser';

export class GroupBadgesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupBadgesParser);
    }

    public getParser(): GroupBadgesParser
    {
        return this.parser as GroupBadgesParser;
    }
}
