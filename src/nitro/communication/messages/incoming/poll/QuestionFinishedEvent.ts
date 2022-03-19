import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { QuestionFinishedParser } from '../../parser/poll/QuestionFinishedParser';

export class QuestionFinishedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, QuestionFinishedParser);
    }

    public getParser(): QuestionFinishedParser
    {
        return this.parser as QuestionFinishedParser;
    }
}
