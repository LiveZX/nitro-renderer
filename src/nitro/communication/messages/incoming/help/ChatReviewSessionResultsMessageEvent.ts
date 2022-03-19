import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ChatReviewSessionResultsMessageParser } from '../../parser/help/ChatReviewSessionResultsMessageParser';

export class ChatReviewSessionResultsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChatReviewSessionResultsMessageParser);
    }

    public getParser(): ChatReviewSessionResultsMessageParser
    {
        return this.parser as ChatReviewSessionResultsMessageParser;
    }
}
