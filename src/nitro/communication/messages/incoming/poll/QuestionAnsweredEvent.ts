import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { QuestionAnsweredParser } from '../../parser/poll/QuestionAnsweredParser';

export class QuestionAnsweredEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, QuestionAnsweredParser);
    }

    public getParser(): QuestionAnsweredParser
    {
        return this.parser as QuestionAnsweredParser;
    }
}
