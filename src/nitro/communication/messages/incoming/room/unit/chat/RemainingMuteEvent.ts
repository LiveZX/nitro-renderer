import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RemainingMuteParser } from '../../../../parser/room/unit/chat/RemainingMuteParser';

export class RemainingMuteEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RemainingMuteParser);
    }

    public getParser(): RemainingMuteParser
    {
        return this.parser as RemainingMuteParser;
    }
}
