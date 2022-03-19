import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { MiniMailUnreadCountParser } from '../../parser/friendlist/MiniMailUnreadCountParser';

export class MiniMailUnreadCountEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MiniMailUnreadCountParser);
    }

    public getParser(): MiniMailUnreadCountParser
    {
        return this.parser as MiniMailUnreadCountParser;
    }
}
