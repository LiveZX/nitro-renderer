import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GroupBuyDataParser } from '../../parser/group/GroupBuyDataParser';

export class GroupBuyDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupBuyDataParser);
    }

    public getParser(): GroupBuyDataParser
    {
        return this.parser as GroupBuyDataParser;
    }
}
