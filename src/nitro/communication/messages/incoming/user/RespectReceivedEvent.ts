import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RespectReceivedParser } from '../../parser/user/RespectReceivedParser';

export class RespectReceivedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RespectReceivedParser);
    }

    public getParser(): RespectReceivedParser
    {
        return this.parser as RespectReceivedParser;
    }
}
