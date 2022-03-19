import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ChatReviewSessionStartedMessageParser } from '../../parser/help/ChatReviewSessionStartedMessageParser';

export class ChatReviewSessionStartedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChatReviewSessionStartedMessageParser);
    }

    public getParser(): ChatReviewSessionStartedMessageParser
    {
        return this.parser as ChatReviewSessionStartedMessageParser;
    }
}
