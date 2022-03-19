import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { MiniMailNewMessageParser } from '../../parser/friendlist/MiniMailNewMessageParser';

export class MiniMailNewMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MiniMailNewMessageParser);
    }

    public getParser(): MiniMailNewMessageParser
    {
        return this.parser as MiniMailNewMessageParser;
    }
}
