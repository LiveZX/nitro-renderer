import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { IsUserPartOfCompetitionMessageParser } from '../../parser';

export class IsUserPartOfCompetitionMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IsUserPartOfCompetitionMessageParser);
    }

    public getParser(): IsUserPartOfCompetitionMessageParser
    {
        return this.parser as IsUserPartOfCompetitionMessageParser;
    }
}
