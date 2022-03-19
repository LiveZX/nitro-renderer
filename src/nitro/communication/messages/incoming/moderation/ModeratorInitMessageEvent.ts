import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ModeratorInitMessageParser } from '../../parser/moderation/ModeratorInitMessageParser';

export class ModeratorInitMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ModeratorInitMessageParser);
    }

    public getParser(): ModeratorInitMessageParser
    {
        return this.parser as ModeratorInitMessageParser;
    }
}
