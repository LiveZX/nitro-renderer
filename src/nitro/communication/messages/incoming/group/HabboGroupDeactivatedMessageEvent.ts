import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { HabboGroupDeactivatedMessageParser } from '../../parser/group/HabboGroupDeactivatedMessageParser';

export class HabboGroupDeactivatedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HabboGroupDeactivatedMessageParser);
    }

    public getParser(): HabboGroupDeactivatedMessageParser
    {
        return this.parser as HabboGroupDeactivatedMessageParser;
    }
}
