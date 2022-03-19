import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GroupSettingsParser } from '../../parser/group/GroupSettingsParser';

export class GroupSettingsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupSettingsParser);
    }

    public getParser(): GroupSettingsParser
    {
        return this.parser as GroupSettingsParser;
    }
}
