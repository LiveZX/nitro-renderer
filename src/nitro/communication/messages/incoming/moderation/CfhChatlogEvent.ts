import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CfhChatlogMessageParser } from '../../parser/moderation/CfhChatlogMessageParser';

export class CfhChatlogEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CfhChatlogMessageParser);
    }

    public getParser(): CfhChatlogMessageParser
    {
        return this.parser as CfhChatlogMessageParser;
    }
}
