import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { QuestionParser } from '../../parser/poll/QuestionParser';

export class QuestionEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, QuestionParser);
    }

    public getParser(): QuestionParser
    {
        return this.parser as QuestionParser;
    }
}
