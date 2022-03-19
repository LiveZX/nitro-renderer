import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { HabboSearchResultParser } from '../../parser/friendlist/HabboSearchResultParser';

export class HabboSearchResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HabboSearchResultParser);
    }

    public getParser(): HabboSearchResultParser
    {
        return this.parser as HabboSearchResultParser;
    }
}
