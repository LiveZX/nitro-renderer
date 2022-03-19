import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GroupBadgePartsParser } from '../../parser/group/GroupBadgePartsParser';

export class GroupBadgePartsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupBadgePartsParser);
    }

    public getParser(): GroupBadgePartsParser
    {
        return this.parser as GroupBadgePartsParser;
    }
}
