import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CommunityVoteReceivedParser } from '../../../parser/landingview/votes/CommunityVoteReceivedParser';

export class CommunityGoalVoteMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CommunityVoteReceivedParser);
    }

    public getParser(): CommunityVoteReceivedParser
    {
        return this.parser as CommunityVoteReceivedParser;
    }
}
