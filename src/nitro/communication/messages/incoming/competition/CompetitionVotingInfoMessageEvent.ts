import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CompetitionVotingInfoMessageParser } from '../../parser';

export class CompetitionVotingInfoMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CompetitionVotingInfoMessageParser);
    }

    public getParser(): CompetitionVotingInfoMessageParser
    {
        return this.parser as CompetitionVotingInfoMessageParser;
    }
}
