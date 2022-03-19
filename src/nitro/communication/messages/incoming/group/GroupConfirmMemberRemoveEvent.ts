import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GroupConfirmMemberRemoveParser } from '../../parser/group/GroupConfirmMemberRemoveParser';

export class GroupConfirmMemberRemoveEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupConfirmMemberRemoveParser);
    }

    public getParser(): GroupConfirmMemberRemoveParser
    {
        return this.parser as GroupConfirmMemberRemoveParser;
    }
}
