import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CommunityGoalHallOfFameMessageParser } from '../../parser/quest/CommunityGoalHallOfFameMessageParser';

export class CommunityGoalHallOfFameMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CommunityGoalHallOfFameMessageParser);
    }

    public getParser(): CommunityGoalHallOfFameMessageParser
    {
        return this.parser as CommunityGoalHallOfFameMessageParser;
    }
}
