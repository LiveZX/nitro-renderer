import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { QuestCompletedMessageParser } from '../../parser/quest/QuestCompletedMessageParser';

export class QuestCompletedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, QuestCompletedMessageParser);
    }

    public getParser(): QuestCompletedMessageParser
    {
        return this.parser as QuestCompletedMessageParser;
    }
}
