import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ModeratorUserInfoMessageParser } from '../../parser/moderation/ModeratorUserInfoMessageParser';

export class ModeratorUserInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ModeratorUserInfoMessageParser);
    }

    public getParser(): ModeratorUserInfoMessageParser
    {
        return this.parser as ModeratorUserInfoMessageParser;
    }
}
