import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ChatReviewSessionDetachedMessageParser } from '../../parser/help/ChatReviewSessionDetachedMessageParser';

export class ChatReviewSessionDetachedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChatReviewSessionDetachedMessageParser);
    }

    public getParser(): ChatReviewSessionDetachedMessageParser
    {
        return this.parser as ChatReviewSessionDetachedMessageParser;
    }
}
