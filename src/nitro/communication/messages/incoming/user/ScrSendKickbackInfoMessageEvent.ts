import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ScrSendKickbackInfoMessageParser } from '../../parser/user/ScrSendKickbackInfoMessageParser';

export class ScrSendKickbackInfoMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ScrSendKickbackInfoMessageParser);
    }

    public getParser(): ScrSendKickbackInfoMessageParser
    {
        return this.parser as ScrSendKickbackInfoMessageParser;
    }
}
