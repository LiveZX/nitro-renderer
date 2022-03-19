import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ModeratorMessageParser } from '../../parser/moderation/ModeratorMessageParser';

export class ModeratorMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ModeratorMessageParser);
    }

    public getParser(): ModeratorMessageParser
    {
        return this.parser as ModeratorMessageParser;
    }
}
